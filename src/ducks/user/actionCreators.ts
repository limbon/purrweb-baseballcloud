import { SignInFormData, User } from 'baseballcloud/types';

import {
	REQUEST_SIGN_IN,
	REQUEST_SIGN_IN_SUCCESS,
	RequestSignInAction,
	RequestSignInSuccessAction,
} from './actionTypes';

export const requestSignIn = (data: SignInFormData): RequestSignInAction => {
	return {
		type: REQUEST_SIGN_IN,
		payload: data,
	};
};

export const requestSignInSuccess = (user: User): RequestSignInSuccessAction => {
	return {
		type: REQUEST_SIGN_IN_SUCCESS,
		payload: user,
	};
};
