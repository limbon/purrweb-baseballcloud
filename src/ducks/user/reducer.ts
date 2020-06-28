import { Reducer } from 'redux';
import { UserState } from 'baseballcloud/types';
import { UserAction, REQUEST_SIGN_IN_SUCCESS } from './actionTypes';

const initialState: UserState = null;

export const userReducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_SIGN_IN_SUCCESS: {
			return action.payload;
		}

		default: {
			return state;
		}
	}
};
