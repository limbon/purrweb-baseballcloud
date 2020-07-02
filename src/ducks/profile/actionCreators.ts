import {
	REQUEST_PROFILE,
	REQUEST_PROFILE_SUCCESS,
	REQUEST_PROFILE_BY_ID,
	SET_ACTIVE_PROFILE_ID,
	RequestProfileAction,
	RequestProfileByIdAction,
	RequestProfileSuccessAction,
	SetActiveProfileIdAction,
} from './actionTypes';
import { Profile } from 'baseballcloud/types';

export const requestProfile = (): RequestProfileAction => {
	return {
		type: REQUEST_PROFILE,
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
