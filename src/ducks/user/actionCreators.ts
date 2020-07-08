import { createAsyncAction } from 'typesafe-actions';

import { SignInFormData, User, Credentials, SignUpFormData } from 'baseballcloud/types';

import {
	SignInActions,
	SignUpActions,
	SignOutActions,
	ValidateTokenActions,
} from './actionTypes';

export const signIn = createAsyncAction(
	SignInActions.request,
	SignInActions.success,
	SignInActions.failure,
	SignInActions.cancel,
)<
	[SignInFormData, undefined],
	[{ user: User; credentials: Credentials }, undefined],
	[Error, undefined],
	[undefined, undefined]
>();

export const signUp = createAsyncAction(
	SignUpActions.request,
	SignUpActions.success,
	SignUpActions.failure,
	SignUpActions.cancel,
)<
	[SignUpFormData, undefined],
	[{ user: User; credentials: Credentials }, undefined],
	[Error, undefined],
	[undefined, undefined]
>();

export const signOut = createAsyncAction(
	SignOutActions.request,
	SignOutActions.success,
	SignOutActions.failure,
	SignOutActions.cancel,
)<
	[undefined, undefined],
	[undefined, undefined],
	[Error, undefined],
	[undefined, undefined]
>();

export const validateToken = createAsyncAction(
	ValidateTokenActions.request,
	ValidateTokenActions.success,
	ValidateTokenActions.failure,
	ValidateTokenActions.cancel,
)<[undefined, undefined], [User, undefined], [Error, undefined], [undefined, undefined]>();

export default {
	signIn,
	signUp,
	signOut,
	validateToken,
};
