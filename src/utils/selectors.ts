import { createSelector } from 'reselect';
import { ApplicationStore, ProfileState, Profile } from 'baseballcloud/types';

export const selectUser = createSelector<ApplicationStore, any, ProfileState>(
	[(store) => store.user],
	(user) => user,
);

export const selectActiveProfile = createSelector<ApplicationStore, any, Profile>(
	[(store) => store.profile],
	({ activeProfile, profiles }) => activeProfile && profiles[activeProfile],
);

export const selectProfile = createSelector<ApplicationStore, any, ProfileState>(
	[(store) => store.profile],
	(profile) => profile,
);
