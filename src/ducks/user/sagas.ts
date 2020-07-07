import { takeLatest, put, call } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import { ApiService } from '../../services/ApiService';

import { IOC } from '../../ioc';

import { signIn, validateToken, signOut, signUp } from './actionCreators';

const api = IOC.get<ApiService>(ApiService);

function* signInSaga(action: AnyAction) {
	yield put(signIn.request());
	try {
		const { user, credentials } = yield call(api.requestSignIn, action.payload);
		yield put(signIn.success(user, credentials));
	} catch (error) {
		yield put(signIn.failure(error));
	}
	yield put(signIn.fulfill());
}

function* signUpSaga(action: AnyAction) {
	yield put(signIn.request());
	try {
		const { user, credentials } = yield call(api.requestSignUp, action.payload);
		yield put(signIn.success(user, credentials));
	} catch (error) {
		yield put(signIn.failure(error));
	}
	yield put(signIn.fulfill());
}

function* signOutSaga() {
	yield put(signOut.request());
	try {
		yield call(api.requestSignOut);
		yield put(signOut.success());
	} catch (error) {
		yield put(signOut.failure(error));
	}
	yield put(signOut.fulfill());
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
	yield takeLatest(signUp.TRIGGER, signUpSaga);
	yield takeLatest(signOut.TRIGGER, signOutSaga);
	yield takeLatest(validateToken.TRIGGER, validateTokenSaga);
}
