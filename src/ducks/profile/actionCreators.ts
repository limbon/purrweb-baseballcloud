import {
	FETCH_PROFILE,
	FETCH_PROFILE_BY_ID,
	UPDATE_PROFILE,
	FETCH_TEAMS,
	FETCH_SCHOOLS,
	FETCH_FACILITIES,
} from './actionTypes';

import { Profile, ProfileForm, Team, School, Facility } from 'baseballcloud/types';
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
	trigger: (form: ProfileForm) => form,
	success: (profile: Profile | null) => profile,
	failure: (error: Error) => error,
});

export const fetchTeams = createRoutine(FETCH_TEAMS, {
	trigger: (search: string) => search,
	success: (teams: { [index: string]: Team }) => teams,
});

export const fetchSchools = createRoutine(FETCH_SCHOOLS, {
	trigger: (search: string) => search,
	success: (teams: { [index: string]: School }) => teams,
});

export const fetchFacilities = createRoutine(FETCH_FACILITIES, {
	trigger: (search: string) => search,
	success: (teams: { [index: string]: Facility }) => teams,
});
