import { Reducer } from 'redux';
import { UserState, CachedData } from 'baseballcloud/types';

import { IOC } from '../../ioc';
import { ServiceID } from '../../utils/enums';
import { CacheService } from '../../services/CacheService';

import { signIn, validateToken, signOut } from './actionCreators';

const cache = IOC.get<CacheService<CachedData>>(ServiceID.CacheService);

const initialState: UserState = {
	user: null,
	loading: false,
	error: null,
	credentials: cache.get('credentials') || null,
};

export const userReducer: Reducer<UserState> = (state = initialState, action) => {
	switch (action.type) {
		case signIn.REQUEST: {
			return { ...state, loading: true };
		}
		case signIn.SUCCESS: {
			return { ...state, user: action.payload.user, credentials: action.payload.credentials };
		}
		case signIn.FAILURE: {
			return { ...state, error: action.payload };
		}
		case signIn.FULFILL: {
			return { ...state, loading: false };
		}

		case signOut.REQUEST: {
			return { ...state, loading: true };
		}
		case signOut.SUCCESS: {
			return { ...state, user: null, credentials: null };
		}
		case signOut.FAILURE: {
			return { ...state, error: action.payload };
		}
		case signOut.FULFILL: {
			return { ...state, loading: false };
		}

		case validateToken.REQUEST: {
			return { ...state, loading: true };
		}
		case validateToken.SUCCESS: {
			return { ...state, user: action.payload };
		}
		case validateToken.FAILURE: {
			return { ...state, error: action.payload };
		}
		case validateToken.FULFILL: {
			return { ...state, loading: false };
		}

		default: {
			return state;
		}
	}
};
