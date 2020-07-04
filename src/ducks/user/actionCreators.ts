import { SignInFormData, User, Credentials } from 'baseballcloud/types';
import { createRoutine } from 'redux-saga-routines';
import { SIGN_IN, VALIDATE_TOKEN } from './actionTypes';

export const signIn = createRoutine(SIGN_IN, {
	trigger: (form: SignInFormData) => form,
	success: (user: User, credentials: Credentials) => ({ user, credentials }),
});

export const validateToken = createRoutine(VALIDATE_TOKEN, {
	success: (user: User) => user,
});
