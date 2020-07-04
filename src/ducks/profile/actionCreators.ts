import {
	REQUEST_PROFILE,
	REQUEST_PROFILE_SUCCESS,
	REQUEST_UPDATE_PROFILE,
	REQUEST_UPDATE_PROFILE_SUCCESS,
	REQUEST_PROFILE_BY_ID,
	SET_ACTIVE_PROFILE_ID,
	RequestProfileAction,
	RequestProfileByIdAction,
	RequestProfileSuccessAction,
	SetActiveProfileIdAction,
	RequestUpdateProfileAction,
	RequestUpdateProfileSuccessAction,
} from './actionTypes';
import { Profile, ProfileForm } from 'baseballcloud/types';

export const requestProfile = (): RequestProfileAction => {
	return {
		type: REQUEST_PROFILE,
	};
};

export const requestUpdateProfile = (form: ProfileForm): RequestUpdateProfileAction => {
	return {
		type: REQUEST_UPDATE_PROFILE,
		payload: form,
	};
};

export const requestProfileById = (id: string): RequestProfileByIdAction => {
	return {
		type: REQUEST_PROFILE_BY_ID,
		payload: id,
	};
};

export const setActiveProfileId = (id: string): SetActiveProfileIdAction => {
	return {
		type: SET_ACTIVE_PROFILE_ID,
		payload: id,
	};
};

export const requestProfileSuccess = (profile: Profile): RequestProfileSuccessAction => {
	return {
		type: REQUEST_PROFILE_SUCCESS,
		payload: profile,
	};
};

export const requestUpdateProfileSuccess = (
	profile: Partial<Profile>,
): RequestUpdateProfileSuccessAction => {
	return {
		type: REQUEST_UPDATE_PROFILE_SUCCESS,
		payload: profile,
	};
};
