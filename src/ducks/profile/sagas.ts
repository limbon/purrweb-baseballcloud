import { takeLatest, put, call } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { IOC } from '../../ioc';

import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

import { fetchProfile, fetchProfileById, updateProfile } from './actionCreators';

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

export function* profileSaga() {
	yield takeLatest(fetchProfile.TRIGGER, fetchProfileSaga);
	yield takeLatest(fetchProfileById.TRIGGER, fetchProfileByIdSaga);
	yield takeLatest(updateProfile.TRIGGER, updateProfileSaga);
}
