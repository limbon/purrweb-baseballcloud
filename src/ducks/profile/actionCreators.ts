import { FETCH_PROFILE, FETCH_PROFILE_BY_ID, UPDATE_PROFILE } from './actionTypes';
import { Profile, ProfileForm } from 'baseballcloud/types';
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
	success: (profile: Profile) => profile,
	failure: (error: Error) => error,
});
