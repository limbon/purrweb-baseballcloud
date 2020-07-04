import { takeLatest, put, call } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

import { IOC } from '../../ioc';

import { signIn, validateToken } from './actionCreators';

const api = IOC.get<ApiService>(ServiceID.ApiService);

function* signInSaga(action: AnyAction) {
	yield put(signIn.request());
	try {
		const user = yield call(api.requestSignIn, action.payload);
		yield put(signIn.success(user));
	} catch (error) {
		yield put(signIn.failure(error));
	}
	yield put(signIn.fulfill());
}

function* validateTokenSaga(action: AnyAction) {
	yield put(validateToken.request());
	try {
		const user = yield call(api.requestValidateToken);
		yield put(validateToken.success(user));
	} catch (error) {
		yield put(validateToken.failure());
	}
	yield put(validateToken.fulfill());
}

export function* userSaga() {
	yield takeLatest(signIn.TRIGGER, signInSaga);
	yield takeLatest(validateToken.TRIGGER, validateTokenSaga);
}
