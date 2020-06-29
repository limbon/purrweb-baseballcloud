import { Profile } from 'baseballcloud/types';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const REQUEST_PROFILE_BY_ID = 'REQUEST_PROFILE_BY_ID';

export const REQUEST_PROFILE_SUCCESS = 'REQUEST_PROFILE_SUCCESS';

export type RequestProfileAction = {
	type: typeof REQUEST_PROFILE;
};

export type RequestProfileByIdAction = {
	type: typeof REQUEST_PROFILE_BY_ID;
	payload: string;
};

export type RequestProfileSuccessAction = {
	type: typeof REQUEST_PROFILE_SUCCESS;
	payload: Profile;
};

export type ProfileAction = RequestProfileSuccessAction;
