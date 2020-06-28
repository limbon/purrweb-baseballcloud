import { Reducer } from 'redux';
import { UserState } from 'baseballcloud/types';
import { UserAction } from './actionTypes';

const initialState: UserState = null;

export const userReducer: Reducer<UserState, UserAction> = (state = initialState, action) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};
