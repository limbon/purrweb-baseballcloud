import { promisifyAsyncAction } from '../../utils/promisifiedActions/promisifyAsyncAction';

import {
	updateProfile,
	updateAvatar,
	fetchLeaderboardBatting,
	fetchLeaderboardPitching,
	fetchNetwork,
	fetchTeams,
	fetchSchools,
	fetchFacilities,
} from './actionCreators';

export const $updateProfile = promisifyAsyncAction(updateProfile);
export const $updateAvatar = promisifyAsyncAction(updateAvatar);
export const $fetchLeaderboardBatting = promisifyAsyncAction(fetchLeaderboardBatting);
export const $fetchLeaderboardPitching = promisifyAsyncAction(fetchLeaderboardPitching);
export const $fetchNetwork = promisifyAsyncAction(fetchNetwork);
export const $fetchTeams = promisifyAsyncAction(fetchTeams);
export const $fetchSchools = promisifyAsyncAction(fetchSchools);
export const $fetchFacilities = promisifyAsyncAction(fetchFacilities);
