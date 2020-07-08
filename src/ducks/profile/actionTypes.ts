export enum FetchProfileActions {
	request = 'FETCH_PROFILE/REQUEST',
	success = 'FETCH_PROFILE/SUCCESS',
	failure = 'FETCH_PROFILE/FAILURE',
}

export enum FetchProfileByIdActions {
	request = 'FETCH_PROFILE_BY_ID/REQUEST',
	success = 'FETCH_PROFILE_BY_ID/SUCCESS',
	failure = 'FETCH_PROFILE_BY_ID/FAILURE',
}

export enum UpdateProfileActions {
	request = 'UPDATE_PROFILE/REQUEST',
	success = 'UPDATE_PROFILE/SUCCESS',
	failure = 'UPDATE_PROFILE/FAILURE',
	cancel = 'UPDATE_PROFILE/CANCEL',
}

export enum UploadAvatarActions {
	request = 'UPLOAD_AVATAR/REQUEST',
	success = 'UPLOAD_AVATAR/SUCCESS',
	failure = 'UPLOAD_AVATAR/FAILURE',
	cancel = 'UPLOAD_AVATAR/CANCEL',
}

export enum FetchLeaderboardBattingActions {
	request = 'FETCH_LEADERBOARD_BATTING/REQUEST',
	success = 'FETCH_LEADERBOARD_BATTING/SUCCESS',
	failure = 'FETCH_LEADERBOARD_BATTING/FAILURE',
	cancel = 'FETCH_LEADERBOARD_BATTING/CANCEL',
}

export enum FetchLeaderboardPitchingActions {
	request = 'FETCH_LEADERBOARD_PITCHING/REQUEST',
	success = 'FETCH_LEADERBOARD_PITCHING/SUCCESS',
	failure = 'FETCH_LEADERBOARD_PITCHING/FAILURE',
	cancel = 'FETCH_LEADERBOARD_PITCHING/CANCEL',
}

export enum FetchNetworkActions {
	request = 'FETCH_NETWORK/REQUEST',
	success = 'FETCH_NETWORK/SUCCESS',
	failure = 'FETCH_NETWORK/FAILURE',
	cancel = 'FETCH_NETWORK/CANCEL',
}

export enum FetchTeamsActions {
	request = 'FETCH_TEAMS/REQUEST',
	success = 'FETCH_TEAMS/SUCCESS',
	failure = 'FETCH_TEAMS/FAILURE',
	cancel = 'FETCH_TEAMS/CANCEL',
}

export enum FetchSchoolsActions {
	request = 'FETCH_SCHOOLS/REQUEST',
	success = 'FETCH_SCHOOLS/SUCCESS',
	failure = 'FETCH_SCHOOLS/FAILURE',
	cancel = 'FETCH_SCHOOLS/CANCEL',
}

export enum FetchFacilitiesActions {
	request = 'FETCH_FACILITIES/REQUEST',
	success = 'FETCH_FACILITIES/SUCCESS',
	failure = 'FETCH_FACILITIES/FAILURE',
	cancel = 'FETCH_FACILITIES/CANCEL',
}
