import { ProfileState } from 'baseballcloud/types';
import { Reducer } from 'redux';
import { ProfileAction, REQUEST_PROFILE_SUCCESS } from './actionTypes';

const initialState: ProfileState = null;

export const profileReducer: Reducer<ProfileState, ProfileAction> = (
	state = initialState,
	action,
) => {
	switch (action.type) {
		case REQUEST_PROFILE_SUCCESS: {
			return action.payload;
		}

		default: {
			return state;
		}
	}
};
