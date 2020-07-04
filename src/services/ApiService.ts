import { injectable, inject } from 'inversify';
import axios from 'axios';
import { keyBy } from 'lodash';

import { ServiceID } from '../utils/enums';
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
} from 'baseballcloud/types';

import {
	REQUEST_PROFILE_BY_ID,
	REQUEST_CURRENT_PROFILE_ID,
	REQUEST_TEAMS,
	REQUEST_SCHOOLS,
	REQUEST_FACILITIES,
	REQUEST_UPDATE_PROFILE,
} from '../requests/profile';

@injectable()
export class ApiService {
	@inject(ServiceID.CacheService) private cacheService: CacheService<CachedData>;
	private BASE_URL = 'https://baseballcloud-back.herokuapp.com/api/v1';

	constructor() {
		// DEBUG
		(window as any).ApiService = this;
	}

	private get GRAPHQL() {
		return `${this.BASE_URL}/graphql`;
	}
	private get Headers() {
		return {
			'access-token': this.cacheService.get('access-token'),
			uid: this.cacheService.get('uid'),
			client: this.cacheService.get('client'),
		};
	}

	private requestCurrentUserId = async (): Promise<number> => {
		const response = await axios.post<{ data: { current_profile: { id: number } } }>(
			this.GRAPHQL,
			{ query: REQUEST_CURRENT_PROFILE_ID },
			{
				headers: this.Headers,
			},
		);
		return response.data.data.current_profile.id;
	};

	requestSignIn = async (data: SignInFormData): Promise<User> => {
		const url = `${this.BASE_URL}/auth/sign_in`;
		const response = await axios.post<{ data: User }>(url, data);

		this.cacheService.set<string>('access-token', response.headers['access-token']);
		this.cacheService.set<string>('uid', response.headers.uid);
		this.cacheService.set<string>('client', response.headers.client);

		return response.data.data;
	};

	requestValidateToken = async (): Promise<User> => {
		const url = `${this.BASE_URL}/auth/validate_token`;
		const response = await axios.get<{ data: User }>(url, { headers: this.Headers });

		return response.data.data;
	};

	requestProfileById = async (id: string): Promise<Profile> => {
		const response = await axios.post<{ data: { profile: Profile } }>(
			this.GRAPHQL,
			{
				query: REQUEST_PROFILE_BY_ID,
				variables: { id },
			},
			{ headers: this.Headers },
		);
		return response.data.data.profile;
	};

	requestCurrentUserProfile = async (): Promise<Profile> => {
		const id = await this.requestCurrentUserId();
		const response = await axios.post<{ data: { profile: Profile } }>(
			this.GRAPHQL,
			{
				query: REQUEST_PROFILE_BY_ID,
				variables: { id },
			},
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
			{
				query: REQUEST_TEAMS,
				variables: { search },
			},
			{ headers: this.Headers },
		);

		return keyBy(response.data.data.teams.teams, (t) => t.name);
	};

	requestSchools = async (search: string) => {
		const response = await axios.post<{
			data: { schools: { schools: { [index: string]: School } } };
		}>(
			this.GRAPHQL,
			{
				query: REQUEST_SCHOOLS,
				variables: { search },
			},
			{ headers: this.Headers },
		);

		return keyBy(response.data.data.schools.schools, (s) => s.name);
	};

	requestFacilites = async (search: string) => {
		const response = await axios.post<{
			data: { facilities: { facilities: { [index: string]: Facility } } };
		}>(
			this.GRAPHQL,
			{
				query: REQUEST_FACILITIES,
				variables: { search },
			},
			{ headers: this.Headers },
		);

		return keyBy(response.data.data.facilities.facilities, (s) => s.u_name);
	};
}
