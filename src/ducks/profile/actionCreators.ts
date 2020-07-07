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

import { createRoutine } from 'redux-saga-routines';

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

export const updateAvatar = createRoutine(UPDATE_AVATAR, {
	trigger: ({ name, data }: { name: string; data: string }) => ({ name, data }),
	success: (url: string) => url,
});

export const fetchLeaderboardBatting = createRoutine(FETCH_LEADERBOARD_BATTING, {
	trigger: (input: LeaderboardFilterOptions) => input,
	success: (data: LeaderboardBattingData) => data,
});

export const fetchTeams = createRoutine(FETCH_TEAMS, {
	trigger: (search: string) => search,
	success: (teams: { [index: string]: Team }) => teams,
});

export const fetchSchools = createRoutine(FETCH_SCHOOLS, {
	trigger: (search: string) => search,
	success: (schools: { [index: string]: School }) => schools,
});

export const fetchFacilities = createRoutine(FETCH_FACILITIES, {
	trigger: (search: string) => search,
	success: (facilities: { [index: string]: Facility }) => facilities,
});
