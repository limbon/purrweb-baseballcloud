import {
	FETCH_PROFILE,
	FETCH_PROFILE_BY_ID,
	UPDATE_PROFILE,
	FETCH_TEAMS,
	FETCH_SCHOOLS,
	FETCH_FACILITIES,
	UPDATE_AVATAR,
	FETCH_LEADERBOARD_BATTING,
} from './actionTypes';

import {
	Profile,
	ProfileForm,
	Team,
	School,
	Facility,
	LeaderboardFilterOptions,
	LeaderboardBattingData,
} from 'baseballcloud/types';

import { createRoutine, promisifyRoutine, PromiseCreator } from 'redux-saga-routines';

export const fetchProfile = createRoutine(FETCH_PROFILE, {
	success: (profile: Profile) => profile,
	failure: (error: Error) => error,
});

export const fetchProfileById = createRoutine(FETCH_PROFILE_BY_ID, {
	trigger: (id: string) => id,
	success: (profile: Profile) => profile,
});

export const updateProfile = createRoutine(UPDATE_PROFILE, {
	trigger: (form: Partial<ProfileForm>) => form,
	success: (profile: Profile | null) => profile,
	failure: (error: Error) => error,
});
export const updateProfilePromise: PromiseCreator<Partial<ProfileForm>> = promisifyRoutine(
	updateProfile,
);

export const updateAvatar = createRoutine(UPDATE_AVATAR, {
	trigger: ({ name, data }: { name: string | null; data: File | null }) => ({ name, data }),
	success: (url: string) => url,
});
export const updateAvatarPromise: PromiseCreator<{
	name: string | null;
	data: File | null;
}> = promisifyRoutine(updateAvatar);

export const fetchLeaderboardBatting = createRoutine(FETCH_LEADERBOARD_BATTING, {
	trigger: (input: LeaderboardFilterOptions) => input,
	success: (data: LeaderboardBattingData) => data,
});
export const fetchLeaderboardBattingPromise: PromiseCreator<LeaderboardFilterOptions> = promisifyRoutine(
	fetchLeaderboardBatting,
);

export const fetchTeams = createRoutine(FETCH_TEAMS, {
	trigger: (search: string) => search,
	success: (teams: { [index: string]: Team }) => teams,
});
export const fetchTeamsPromise: PromiseCreator<string> = promisifyRoutine(fetchTeams);

export const fetchSchools = createRoutine(FETCH_SCHOOLS, {
	trigger: (search: string) => search,
	success: (schools: { [index: string]: School }) => schools,
});
export const fetchSchoolsPromise: PromiseCreator<string> = promisifyRoutine(fetchSchools);

export const fetchFacilities = createRoutine(FETCH_FACILITIES, {
	trigger: (search: string) => search,
	success: (facilities: { [index: string]: Facility }) => facilities,
});
export const fetchFacilitiesPromise: PromiseCreator<string> = promisifyRoutine(fetchFacilities);
