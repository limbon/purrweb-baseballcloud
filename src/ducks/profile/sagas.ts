import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { IOC } from '../../ioc';

import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

import {
	fetchProfile,
	fetchProfileById,
	updateProfile,
	fetchTeams,
	fetchSchools,
	fetchFacilities,
	updateAvatar,
	fetchLeaderboardBatting,
	fetchLeaderboardPitching,
} from './actionCreators';

const api = IOC.get<ApiService>(ServiceID.ApiService);

function* fetchProfileSaga() {
	yield put(fetchProfile.request());
	try {
		const profile = yield call(api.requestCurrentUserProfile);
		yield put(fetchProfile.success(profile));
	} catch (error) {
		yield put(fetchProfile.failure(error));
	}
	yield put(fetchProfile.fulfill());
}

function* fetchProfileByIdSaga(action: AnyAction) {
	yield put(fetchProfileById.request());
	try {
		const profile = yield call(api.requestProfileById, action.payload);
		yield put(fetchProfileById.success(profile));
	} catch (error) {
		yield put(fetchProfileById.failure(error));
	}
	yield put(fetchProfileById.fulfill());
}

function* updateProfileSaga(action: AnyAction) {
	yield put(updateProfile.request());
	try {
		const profile = yield call(api.requestUpdateProfile, action.payload);
		yield put(updateProfile.success(profile));
	} catch (error) {
		yield put(updateProfile.failure(error));
	}
	yield put(updateProfile.fulfill());
}

function* updateAvatarSaga(action: AnyAction) {
	yield put(updateAvatar.request());
	try {
		const url = yield call(api.uploadAvatar, action.payload.name, action.payload.data);
		yield put(updateAvatar.success(url));
	} catch (error) {
		yield put(updateAvatar.failure(error));
	}
	yield put(updateAvatar.fulfill());
}

function* fetchLeaderboardBattingSaga(action: AnyAction) {
	yield put(fetchLeaderboardBatting.request());
	try {
		const leaderboard = yield call(api.requestBattingLeaderboard, action.payload);
		yield put(fetchLeaderboardBatting.success(leaderboard));
	} catch (error) {
		yield put(fetchLeaderboardBatting.failure(error));
	}
	yield put(fetchLeaderboardBatting.fulfill());
}

function* fetchLeaderboardPitchingSaga(action: AnyAction) {
	yield put(fetchLeaderboardPitching.request());
	try {
		const leaderboard = yield call(api.requestPitchingLeaderboard, action.payload);
		yield put(fetchLeaderboardPitching.success(leaderboard));
	} catch (error) {
		yield put(fetchLeaderboardPitching.failure(error));
	}
	yield put(fetchLeaderboardPitching.fulfill());
}

function* fetchTeamsSaga(action: AnyAction) {
	yield put(fetchTeams.request());
	try {
		const teams = yield call(api.requestTeams, action.payload);
		yield put(fetchTeams.success(teams));
	} catch (error) {
		yield put(fetchTeams.failure(error));
	}
	yield put(fetchTeams.fulfill());
}

function* fetchSchoolsSaga(action: AnyAction) {
	yield put(fetchSchools.request());
	try {
		const schools = yield call(api.requestSchools, action.payload);
		yield put(fetchSchools.success(schools));
	} catch (error) {
		yield put(fetchSchools.failure(error));
	}
	yield put(fetchSchools.fulfill());
}

function* fetchFacilitiesSaga(action: AnyAction) {
	yield put(fetchFacilities.request());
	try {
		const facilities = yield call(api.requestFacilities, action.payload);
		yield put(fetchFacilities.success(facilities));
	} catch (error) {
		yield put(fetchFacilities.failure(error));
	}
	yield put(fetchFacilities.fulfill());
}

export function* profileSaga() {
	yield takeLatest(fetchProfile.TRIGGER, fetchProfileSaga);
	yield takeLatest(fetchProfileById.TRIGGER, fetchProfileByIdSaga);
	yield takeLatest(updateProfile.TRIGGER, updateProfileSaga);
	yield takeLatest(updateAvatar.TRIGGER, updateAvatarSaga);
	yield takeLatest(fetchLeaderboardBatting.TRIGGER, fetchLeaderboardBattingSaga);
	yield takeLatest(fetchLeaderboardPitching.TRIGGER, fetchLeaderboardPitchingSaga);
	yield takeEvery(fetchTeams.TRIGGER, fetchTeamsSaga);
	yield takeEvery(fetchSchools.TRIGGER, fetchSchoolsSaga);
	yield takeEvery(fetchFacilities.TRIGGER, fetchFacilitiesSaga);
}
