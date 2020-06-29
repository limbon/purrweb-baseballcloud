import { takeLatest, put, call } from 'redux-saga/effects';

import { IOC } from '../../ioc';

import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

import { REQUEST_PROFILE, RequestProfileAction } from './actionTypes';

import { requestProfileSuccess } from './actionCreators';

function* requestProfile(action: RequestProfileAction) {
	const api = IOC.get<ApiService>(ServiceID.ApiService);
	try {
		const profile = yield call(api.requestCurrentUserProfile);
		yield put(requestProfileSuccess(profile));
	} catch (error) {
		// TODO
		console.error(error);
	}
}

export function* profileSaga() {
	yield takeLatest(REQUEST_PROFILE, requestProfile);
}
