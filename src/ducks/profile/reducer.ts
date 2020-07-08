import { createReducer } from 'typesafe-actions';

import { ProfileState } from 'baseballcloud/types';

import { fetchProfile, fetchProfileById, updateProfile } from './actionCreators';

const initialState: ProfileState = {
	activeProfile: null,
	profiles: {},
	loading: false,
	error: null,
};

export const profileReducer = createReducer(initialState)
	.handleAction(
		[fetchProfile.request, fetchProfileById.request, updateProfile.request],
		(state) => {
			return { ...state, loading: true };
		},
	)
	.handleAction(fetchProfile.success, (state, action) => {
		const { id } = action.payload;
		return {
			...state,
			activeProfile: id,
			loading: false,
			profiles: {
				...state.profiles,
				[id]: action.payload,
			},
		};
	})
	.handleAction(fetchProfileById.success, (state, action) => {
		const { id } = action.payload;
		return {
			...state,
			loading: false,
			profiles: { ...state.profiles, [id]: action.payload },
		};
	})
	.handleAction(updateProfile.success, (state, action) => {
		const { id } = action.payload;
		return {
			...state,
			loading: false,
			profiles: {
				...state.profiles,
				[id]: {
					...state.profiles[id],
					...action.payload,
				},
			},
		};
	})
	.handleAction(
		[fetchProfile.failure, fetchProfileById.failure, updateProfile.failure],
		(state, action) => ({
			...state,
			loading: false,
			error: action.payload,
		}),
	);
