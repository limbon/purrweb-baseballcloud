import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';

import { IOC } from '../../ioc';

import { ApiService } from '../../services/ApiService';

import {
	fetchProfile,
	fetchProfileById,
	updateProfile,
	updateAvatar,
	fetchLeaderboardBatting,
	fetchLeaderboardPitching,
	fetchNetwork,
	fetchTeams,
	fetchSchools,
	fetchFacilities,
} from './actionCreators';

const api = IOC.get<ApiService>(ApiService);

function* fetchProfileSaga() {
	try {
		const profile = yield call(api.requestCurrentUserProfile);
		yield put(fetchProfile.success(profile));
	} catch (error) {
		yield put(fetchProfile.failure(error));
	}
}

function* fetchProfileByIdSaga(action: ReturnType<typeof fetchProfileById.request>) {
	try {
		const profile = yield call(api.requestProfileById, action.payload);
		yield put(fetchProfileById.success(profile));
	} catch (error) {
		yield put(fetchProfileById.failure(error));
	}
}

function* updateProfileSaga(action: ReturnType<typeof updateProfile.request>) {
	try {
		const profile = yield call(api.requestUpdateProfile, action.payload);
		yield put(updateProfile.success(profile, action.meta));
	} catch (error) {
		yield put(updateProfile.failure(error, action.meta));
	}
}

function* updateAvatarSaga(action: ReturnType<typeof updateAvatar.request>) {
	try {
		const { data, name } = action.payload;
		const url = yield call(api.uploadAvatar, name, data);
		yield put(updateAvatar.success(url, action.meta));
	} catch (error) {
		yield put(updateAvatar.failure(error, action.meta));
	}
}

function* fetchLeaderboardBattingSaga(
	action: ReturnType<typeof fetchLeaderboardBatting.request>,
) {
	try {
		const leaderboard = yield call(api.requestBattingLeaderboard, action.payload);
		yield put(fetchLeaderboardBatting.success(leaderboard, action.meta));
	} catch (error) {
		yield put(fetchLeaderboardBatting.failure(error, action.meta));
	}
}

function* fetchLeaderboardPitchingSaga(
	action: ReturnType<typeof fetchLeaderboardPitching.request>,
) {
	try {
		const leaderboard = yield call(api.requestPitchingLeaderboard, action.payload);
		yield put(fetchLeaderboardPitching.success(leaderboard, action.meta));
	} catch (error) {
		yield put(fetchLeaderboardPitching.failure(error, action.meta));
	}
}

function* fetchNetworkSaga(action: ReturnType<typeof fetchNetwork.request>) {
	try {
		const network = yield call(api.requestNetwork, action.payload);
		yield put(fetchNetwork.success(network, action.meta));
	} catch (error) {
		yield put(fetchNetwork.failure(error, action.meta));
	}
}

function* fetchTeamsSaga(action: ReturnType<typeof fetchTeams.request>) {
	try {
		const teams = yield call(api.requestTeams, action.payload);
		yield put(fetchTeams.success(teams, action.meta));
	} catch (error) {
		yield put(fetchTeams.failure(error, action.meta));
	}
}

function* fetchSchoolsSaga(action: ReturnType<typeof fetchSchools.request>) {
	try {
		const schools = yield call(api.requestSchools, action.payload);
		yield put(fetchSchools.success(schools, action.meta));
	} catch (error) {
		yield put(fetchSchools.failure(error, action.meta));
	}
}

function* fetchFacilitiesSaga(action: ReturnType<typeof fetchFacilities.request>) {
	try {
		const facilities = yield call(api.requestFacilities, action.payload);
		yield put(fetchFacilities.success(facilities, action.meta));
	} catch (error) {
		yield put(fetchFacilities.failure(error, action.meta));
	}
}

export function* profileSaga() {
	yield takeLatest(fetchProfile.request, fetchProfileSaga);
	yield takeLatest(fetchProfileById.request, fetchProfileByIdSaga);
	yield takeLatest(updateProfile.request, updateProfileSaga);
	yield takeLatest(updateAvatar.request, updateAvatarSaga);
	yield takeLatest(fetchLeaderboardBatting.request, fetchLeaderboardBattingSaga);
	yield takeLatest(fetchLeaderboardPitching.request, fetchLeaderboardPitchingSaga);
	yield takeLatest(fetchNetwork.request, fetchNetworkSaga);
	yield takeEvery(fetchTeams.request, fetchTeamsSaga);
	yield takeEvery(fetchSchools.request, fetchSchoolsSaga);
	yield takeEvery(fetchFacilities.request, fetchFacilitiesSaga);
}
