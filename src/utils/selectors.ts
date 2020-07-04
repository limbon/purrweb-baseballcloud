import { createSelector } from 'reselect';
import {
	ApplicationStore,
	ProfileState,
	Profile,
	UserState,
	User,
	Credentials,
} from 'baseballcloud/types';

export const selectUser = createSelector<ApplicationStore, UserState, User | null>(
	[(store) => store.userState],
	(state) => state.user,
);

export const selectCredentials = createSelector<
	ApplicationStore,
	UserState,
	Credentials | null
>([(store) => store.userState], (state) => state.credentials);

export const selectActiveProfile = createSelector<
	ApplicationStore,
	ProfileState,
	Profile | null
>([(store) => store.profileState], ({ activeProfile, profiles }) =>
	activeProfile ? profiles[activeProfile] : null,
);

export const selectProfileState = createSelector<ApplicationStore, ProfileState, ProfileState>(
	[(store) => store.profileState],
	(state) => state,
);
