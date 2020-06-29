import { SignInFormData, User } from 'baseballcloud/types';

import {
	REQUEST_SIGN_IN,
	VALIDATE_TOKEN,
	REQUEST_SIGN_IN_SUCCESS,
	VALIDATE_TOKEN_SUCCESS,
	RequestSignInAction,
	ValidateTokenAction,
	ValidateTokenSuccessAciton,
	RequestSignInSuccessAction,
} from './actionTypes';

export const requestSignIn = (data: SignInFormData): RequestSignInAction => {
	return {
		type: REQUEST_SIGN_IN,
		payload: data,
	};
};

export const validateToken = (): ValidateTokenAction => {
	return {
		type: VALIDATE_TOKEN,
	};
};

export const requestSignInSuccess = (user: User): RequestSignInSuccessAction => {
	return {
		type: REQUEST_SIGN_IN_SUCCESS,
		payload: user,
	};
};

export const validateTokenSuccess = (user: User): ValidateTokenSuccessAciton => {
	return {
		type: VALIDATE_TOKEN_SUCCESS,
		payload: user,
	};
};
