import { Profile, ProfileForm } from 'baseballcloud/types';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const REQUEST_PROFILE_BY_ID = 'REQUEST_PROFILE_BY_ID';
export const REQUEST_UPDATE_PROFILE = 'REQUEST_UPDATE_PROFILE';

export const SET_ACTIVE_PROFILE_ID = 'SET_ACTIVE_PROFILE';

export const REQUEST_TEAMS = 'REQUEST_TEAMS';

export const REQUEST_PROFILE_SUCCESS = 'REQUEST_PROFILE_SUCCESS';
export const REQUEST_UPDATE_PROFILE_SUCCESS = 'REQUEST_UPDATE_PROFILE_SUCCESS';

export type RequestProfileAction = {
	type: typeof REQUEST_PROFILE;
};

export type RequestUpdateProfileAction = {
	type: typeof REQUEST_UPDATE_PROFILE;
	payload: ProfileForm;
};

export type RequestProfileByIdAction = {
	type: typeof REQUEST_PROFILE_BY_ID;
	payload: string;
};

export type RequestProfileSuccessAction = {
	type: typeof REQUEST_PROFILE_SUCCESS;
	payload: Profile;
};

export type SetActiveProfileIdAction = {
	type: typeof SET_ACTIVE_PROFILE_ID;
	payload: string;
};

export type RequestUpdateProfileSuccessAction = {
	type: typeof REQUEST_UPDATE_PROFILE_SUCCESS;
	payload: Partial<Profile>;
};

export type ProfileAction =
	| RequestProfileSuccessAction
	| SetActiveProfileIdAction
	| RequestUpdateProfileSuccessAction;
