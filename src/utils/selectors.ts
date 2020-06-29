import { createSelector } from 'reselect';
import { ApplicationStore, ProfileState } from 'baseballcloud/types';

export const selectUser = createSelector<ApplicationStore, any, ProfileState>(
	[(store) => store.user],
	(user) => user,
);

export const selectProfile = createSelector<ApplicationStore, any, ProfileState>(
	[(store) => store.profile],
	(profile) => profile,
);
