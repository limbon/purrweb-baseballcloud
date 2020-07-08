import { createReducer } from 'typesafe-actions';

import { UserState, CachedData } from 'baseballcloud/types';

import { IOC } from '../../ioc';
import { CacheService } from '../../services/CacheService';

import { signIn, validateToken, signOut, signUp } from './actionCreators';

const cache = IOC.get<CacheService<CachedData>>(CacheService);

const initialState: UserState = {
	user: null,
	loading: false,
	error: null,
	credentials: cache.get('credentials') || null,
};

export const userReducer = createReducer(initialState)
	.handleAction(
		[signIn.request, signUp.request, signOut.request, validateToken.request],
		(state) => {
			return { ...state, loading: true };
		},
	)
	.handleAction(validateToken.success, (state, action) => {
		return { ...state, user: action.payload };
	})
	.handleAction([signIn.success, signUp.success], (state, action) => {
		return { ...state, ...action.payload, loading: false };
	})
	.handleAction(signOut.success, (state) => {
		return { ...state, user: null, credentials: null, loading: false };
	})
	.handleAction(
		[signIn.failure, signUp.failure, signOut.failure, validateToken.failure],
		(state, action) => {
			return { ...state, error: action.payload, loading: false };
		},
	);
