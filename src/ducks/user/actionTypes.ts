import { SignInFormData, User } from 'baseballcloud/types';

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const VALIDATE_TOKEN = 'VALIDATE_TOKEN';

export const REQUEST_SIGN_IN_SUCCESS = 'REQUEST_SIGN_IN_SUCCESS';
export const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS';

export type RequestSignInAction = {
	type: typeof REQUEST_SIGN_IN;
	payload: SignInFormData;
};
export type ValidateTokenAction = {
	type: typeof VALIDATE_TOKEN;
};

export type RequestSignInSuccessAction = {
	type: typeof REQUEST_SIGN_IN_SUCCESS;
	payload: User;
};
export type ValidateTokenSuccessAciton = {
	type: typeof VALIDATE_TOKEN_SUCCESS;
	payload: User;
};

export type UserAction = RequestSignInSuccessAction | ValidateTokenSuccessAciton;
