import { Reducer } from 'redux';
import { UserState } from 'baseballcloud/types';
import { signIn, validateToken } from './actionCreators';

const initialState: UserState = {
	user: null,
	loading: false,
	error: null,
};

export const userReducer: Reducer<UserState> = (state = initialState, action) => {
	switch (action.type) {
		case signIn.REQUEST: {
			return { ...state, loading: true };
		}
		case signIn.SUCCESS: {
			return { ...state, user: action.payload };
		}
		case signIn.FAILURE: {
			return { ...state, error: action.payload };
		}
		case signIn.FULFILL: {
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
