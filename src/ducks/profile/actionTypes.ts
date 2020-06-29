import { Profile } from 'baseballcloud/types';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';

export const REQUEST_PROFILE_SUCCESS = 'REQUEST_PROFILE_SUCCESS';

export type RequestProfileAction = {
	type: typeof REQUEST_PROFILE;
};

export type RequestProfileSuccessAction = {
	type: typeof REQUEST_PROFILE_SUCCESS;
	payload: Profile;
};

export type ProfileAction = RequestProfileSuccessAction;
