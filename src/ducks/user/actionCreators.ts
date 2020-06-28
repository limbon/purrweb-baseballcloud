import { SignInFormData } from 'baseballcloud/types';

import { REQUEST_SIGN_IN, RequestSignInAction } from './actionTypes';

export const requestSignIn = (data: SignInFormData): RequestSignInAction => {
	return {
		type: REQUEST_SIGN_IN,
		payload: data,
	};
};
