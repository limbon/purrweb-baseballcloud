import { injectable, inject } from 'inversify';
import axios from 'axios';
import { keyBy } from 'lodash';

import { CacheService } from './CacheService';

import {
	SignInFormData,
	User,
	CachedData,
	Profile,
	Team,
	School,
	Facility,
	ProfileForm,
	Credentials,
	SignUpFormData,
	LeaderboardBattingData,
	LeaderboardFilterOptions,
	LeaderboardPitchingData,
	NetworkFilterOptions,
	NetworkUserData,
} from 'baseballcloud/types';

import {
	REQUEST_PROFILE_BY_ID,
	REQUEST_CURRENT_PROFILE_ID,
	REQUEST_TEAMS,
	REQUEST_SCHOOLS,
	REQUEST_FACILITIES,
	REQUEST_UPDATE_PROFILE,
} from '../requests/profile';

import {
	REQUEST_LEADERBOARD_BATTING,
	REQUEST_LEADERBOARD_PITCHING,
} from '../requests/leaderboard';

import { REQUEST_NETWORK } from '../requests/network';

@injectable()
export class ApiService {
	@inject(CacheService) private cacheService: CacheService<CachedData>;
	private BASE_URL = 'https://baseballcloud-back.herokuapp.com/api/v1';

	constructor() {
		// DEBUG
		(window as any).ApiService = this;
	}

	private get GRAPHQL() {
		return `${this.BASE_URL}/graphql`;
	}
	private get Headers() {
		return this.cacheService.get<Credentials>('credentials');
	}

	private requestCurrentUserId = async (): Promise<number> => {
		const response = await axios.post<{ data: { current_profile: { id: number } } }>(
			this.GRAPHQL,
			{ query: REQUEST_CURRENT_PROFILE_ID },
			{ headers: this.Headers },
		);
		return response.data.data.current_profile.id;
	};

	requestSignIn = async (
		data: SignInFormData,
	): Promise<{ user: User; credentials: Credentials }> => {
		const url = `${this.BASE_URL}/auth/sign_in`;
		const response = await axios.post<{ data: User }>(url, data);

		this.cacheService.set('credentials', {
			'access-token': response.headers['access-token'],
			uid: response.headers.uid,
			client: response.headers.client,
		});

		return {
			user: response.data.data,
			credentials: this.cacheService.get<Credentials>('credentials')!,
		};
	};

	requestSignUp = async (
		data: SignUpFormData,
	): Promise<{ user: User; credentials: Credentials }> => {
		const url = `${this.BASE_URL}/auth`;

		const response = await axios.post(url, data);

		this.cacheService.set('credentials', {
			'access-token': response.headers['access-token'],
			uid: response.headers.uid,
			client: response.headers.client,
		});

		return {
			user: response.data.data,
			credentials: this.cacheService.get<Credentials>('credentials')!,
		};
	};

	requestSignOut = async () => {
		const url = `${this.BASE_URL}/auth/sign_out`;
		await axios.delete(url, { headers: this.Headers });
		this.cacheService.remove('credentials');
	};

	uploadAvatar = async (name: string, data: File) => {
		const url = `${this.BASE_URL}/s3/signed_url`;
		const response = await axios.post(url, { name }, { headers: this.Headers });
		const { signedUrl, fileKey } = response.data;
		await axios.put(signedUrl, data, {
			headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...this.Headers },
		});
		return `https://baseballcloud-staging-assets.s3.us-east-2.amazonaws.com/${fileKey}`;
	};

	requestValidateToken = async (): Promise<User> => {
		const url = `${this.BASE_URL}/auth/validate_token`;
		const response = await axios.get<{ data: User }>(url, { headers: this.Headers });

		return response.data.data;
	};

	requestBattingLeaderboard = async (
		input: LeaderboardFilterOptions,
	): Promise<LeaderboardBattingData[]> => {
		const response = await axios.post<{
			data: { leaderboard_batting: { leaderboard_batting: LeaderboardBattingData[] } };
		}>(
			this.GRAPHQL,
			{ query: REQUEST_LEADERBOARD_BATTING, variables: { input } },
			{ headers: this.Headers },
		);

		return response.data.data.leaderboard_batting.leaderboard_batting;
	};

	requestPitchingLeaderboard = async (
		input: LeaderboardFilterOptions,
	): Promise<LeaderboardPitchingData[]> => {
		const response = await axios.post<{
			data: { leaderboard_pitching: { leaderboard_pitching: LeaderboardPitchingData[] } };
		}>(
			this.GRAPHQL,
			{ query: REQUEST_LEADERBOARD_PITCHING, variables: { input } },
			{ headers: this.Headers },
		);

		return response.data.data.leaderboard_pitching.leaderboard_pitching;
	};

	requestNetwork = async (
		input: NetworkFilterOptions,
	): Promise<{ profiles: NetworkUserData[]; total_count: number }> => {
		const response = await axios.post<{
			data: { profiles: { profiles: NetworkUserData[]; total_count: number } };
		}>(
			this.GRAPHQL,
			{ query: REQUEST_NETWORK, variables: { input } },
			{ headers: this.Headers },
		);

		return response.data.data.profiles;
	};

	requestProfileById = async (id: string): Promise<Profile> => {
		const response = await axios.post<{ data: { profile: Profile } }>(
			this.GRAPHQL,
			{ query: REQUEST_PROFILE_BY_ID, variables: { id } },
			{ headers: this.Headers },
		);
		return response.data.data.profile;
	};

	requestCurrentUserProfile = async (): Promise<Profile> => {
		const id = await this.requestCurrentUserId();
		const response = await axios.post<{ data: { profile: Profile } }>(
			this.GRAPHQL,
			{ query: REQUEST_PROFILE_BY_ID, variables: { id } },
			{ headers: this.Headers },
		);

		return response.data.data.profile;
	};

	requestUpdateProfile = async (form: ProfileForm): Promise<Partial<Profile>> => {
		const response = await axios.post<{
			data: { update_profile: { profile: Partial<Profile> } };
		}>(
			this.GRAPHQL,
			{ query: REQUEST_UPDATE_PROFILE, variables: { form } },
			{ headers: this.Headers },
		);
		return response.data.data.update_profile.profile;
	};

	requestTeams = async (search: string) => {
		const response = await axios.post<{
			data: { teams: { teams: { [index: string]: Team } } };
		}>(
			this.GRAPHQL,
			{ query: REQUEST_TEAMS, variables: { search } },
			{ headers: this.Headers },
		);

		return keyBy(response.data.data.teams.teams, (t) => t.name);
	};

	requestSchools = async (search: string) => {
		const response = await axios.post<{
			data: { schools: { schools: { [index: string]: School } } };
		}>(
			this.GRAPHQL,
			{ query: REQUEST_SCHOOLS, variables: { search } },
			{ headers: this.Headers },
		);

		return keyBy(response.data.data.schools.schools, (s) => s.name);
	};

	requestFacilities = async (search: string) => {
		const response = await axios.post<{
			data: { facilities: { facilities: { [index: string]: Facility } } };
		}>(
			this.GRAPHQL,
			{ query: REQUEST_FACILITIES, variables: { search } },
			{ headers: this.Headers },
		);

		return keyBy(response.data.data.facilities.facilities, (s) => s.u_name);
	};
}
