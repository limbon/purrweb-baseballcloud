import {
	REQUEST_PROFILE,
	REQUEST_PROFILE_SUCCESS,
	RequestProfileAction,
	RequestProfileSuccessAction,
} from './actionTypes';
import { Profile } from 'baseballcloud/types';

export const requestProfile = (): RequestProfileAction => {
	return {
		type: REQUEST_PROFILE,
	};
};

export const requestProfileSuccess = (profile: Profile): RequestProfileSuccessAction => {
	return {
		type: REQUEST_PROFILE_SUCCESS,
		payload: profile,
	};
};
