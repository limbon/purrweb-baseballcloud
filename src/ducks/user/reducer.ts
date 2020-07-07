import { Reducer } from 'redux';
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

export const userReducer: Reducer<UserState> = (state = initialState, action) => {
	switch (action.type) {
		case signIn.REQUEST:
		case signUp.REQUEST:
		case signOut.REQUEST:
		case validateToken.REQUEST: {
			return { ...state, loading: true };
		}

		case signIn.SUCCESS:
		case signUp.SUCCESS: {
			return { ...state, user: action.payload.user, credentials: action.payload.credentials };
		}
		case signOut.SUCCESS: {
			return { ...state, user: null, credentials: null };
		}
		case validateToken.SUCCESS: {
			return { ...state, user: action.payload };
		}

		case signIn.FAILURE:
		case signUp.FAILURE:
		case signOut.FAILURE:
		case validateToken.FAILURE: {
			return { ...state, error: action.payload };
		}

		case signIn.FULFILL:
		case signUp.FULFILL:
		case signOut.FULFILL:
		case validateToken.FULFILL: {
			return { ...state, loading: false };
		}

		default: {
			return state;
		}
	}
};
