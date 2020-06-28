import { SignInFormData, User } from 'baseballcloud/types';

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';

export const REQUEST_SIGN_IN_SUCCESS = 'REQUEST_SIGN_IN_SUCCESS';

export type RequestSignInAction = {
	type: typeof REQUEST_SIGN_IN;
	payload: SignInFormData;
};

export type RequestSignInSuccessAction = {
	type: typeof REQUEST_SIGN_IN_SUCCESS;
	payload: User;
};

export type UserAction = RequestSignInSuccessAction;
