import { ProfileState } from 'baseballcloud/types';
import { Reducer } from 'redux';
import { signOut } from '../user';

import { fetchProfile, fetchProfileById, updateProfile, updateAvatar } from './actionCreators';

const initialState: ProfileState = {
	activeProfile: null,
	profiles: {},
	loading: false,
	error: null,
};

export const profileReducer: Reducer<ProfileState> = (state = initialState, action) => {
	switch (action.type) {
		case fetchProfile.REQUEST: {
			return { ...state, loading: true };
		}
		case fetchProfile.SUCCESS: {
			const { id } = action.payload;
			return {
				...state,
				activeProfile: id,
				profiles: {
					...state.profiles,
					[id]: action.payload,
				},
			};
		}
		case fetchProfile.FAILURE: {
			return { ...state, error: action.payload };
		}
		case fetchProfile.FULFILL: {
			return { ...state, loading: false };
		}

		case fetchProfileById.REQUEST: {
			return { ...state, loading: true };
		}
		case fetchProfileById.SUCCESS: {
			const { id } = action.payload;
			return {
				...state,
				profiles: {
					...state.profiles,
					[id]: action.payload,
				},
			};
		}
		case fetchProfileById.FAILURE: {
			return { ...state, error: action.payload };
		}
		case fetchProfileById.FULFILL: {
			return { ...state, loading: false };
		}

		case updateProfile.REQUEST: {
			return { ...state, loading: true };
		}
		case updateProfile.SUCCESS: {
			const { id } = action.payload;
			return {
				...state,
				profiles: {
					...state.profiles,
					[id]: {
						...state.profiles[id],
						...action.payload,
					},
				},
			};
		}
		case updateProfile.FAILURE: {
			return { ...state, error: action.payload };
		}
		case updateProfile.FULFILL: {
			return { ...state, loading: false };
		}

		case signOut.SUCCESS: {
			const { activeProfile } = state;
			const {
				[activeProfile!]: {},
				...profiles
			} = state.profiles;

			return {
				...state,
				activeProfile: null,
				profiles,
			};
		}

		default: {
			return state;
		}
	}
};
