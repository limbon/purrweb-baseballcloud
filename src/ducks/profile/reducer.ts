import { ProfileState } from 'baseballcloud/types';
import { Reducer } from 'redux';
import {
	ProfileAction,
	REQUEST_PROFILE_SUCCESS,
	SET_ACTIVE_PROFILE_ID,
	REQUEST_UPDATE_PROFILE_SUCCESS,
} from './actionTypes';

const initialState: ProfileState = {
	activeProfile: null,
	profiles: {},
};

export const profileReducer: Reducer<ProfileState, ProfileAction> = (
	state = initialState,
	action,
) => {
	switch (action.type) {
		case REQUEST_PROFILE_SUCCESS: {
			const { id } = action.payload;
			return {
				...state,
				profiles: { ...state.profiles, [id]: action.payload },
			};
		}

		case SET_ACTIVE_PROFILE_ID: {
			return {
				...state,
				activeProfile: action.payload,
			};
		}

		case REQUEST_UPDATE_PROFILE_SUCCESS: {
			const { id } = action.payload;
			return {
				...state,
				profiles: { ...state.profiles, [id!]: { ...state.profiles[id!], ...action.payload } },
			};
		}

		default: {
			return state;
		}
	}
};
