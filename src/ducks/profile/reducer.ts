import { ProfileState } from 'baseballcloud/types';
import { Reducer } from 'redux';
import { ProfileAction, REQUEST_PROFILE_SUCCESS, SET_ACTIVE_PROFILE_ID } from './actionTypes';

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

		default: {
			return state;
		}
	}
};
