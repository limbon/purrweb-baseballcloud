import { takeLatest, put, call } from 'redux-saga/effects';

import { IOC } from '../../ioc';

import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

import {
	REQUEST_PROFILE,
	REQUEST_PROFILE_BY_ID,
	RequestProfileAction,
	RequestProfileByIdAction,
} from './actionTypes';

import { requestProfileSuccess } from './actionCreators';

const api = IOC.get<ApiService>(ServiceID.ApiService);

function* requestProfile(action: RequestProfileAction) {
	try {
		const profile = yield call(api.requestCurrentUserProfile);
		yield put(requestProfileSuccess(profile));
	} catch (error) {
		// TODO
		console.error(error);
	}
}

function* requestProfileById(action: RequestProfileByIdAction) {
	try {
		const profile = yield call(api.requestProfileById, action.payload);
		yield put(requestProfileSuccess(profile));
	} catch (error) {
		console.error(error);
	}
}

export function* profileSaga() {
	yield takeLatest(REQUEST_PROFILE, requestProfile);
	yield takeLatest(REQUEST_PROFILE_BY_ID, requestProfileById);
}
