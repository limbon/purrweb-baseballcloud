import { takeLatest, put, call } from 'redux-saga/effects';

import { ApiService } from '../../services/ApiService';

import { IOC } from '../../ioc';

import { signIn, validateToken, signOut, signUp } from './actionCreators';

const api = IOC.get<ApiService>(ApiService);

function* signInSaga(action: ReturnType<typeof signIn.request>) {
	try {
		const { user, credentials } = yield call(api.requestSignIn, action.payload);
		yield put(signIn.success({ user, credentials }));
	} catch (error) {
		yield put(signIn.failure(error));
	}
}

function* signUpSaga(action: ReturnType<typeof signUp.request>) {
	try {
		const { user, credentials } = yield call(api.requestSignUp, action.payload);
		yield put(signIn.success({ user, credentials }));
	} catch (error) {
		yield put(signIn.failure(error));
	}
}

function* signOutSaga() {
	try {
		yield call(api.requestSignOut);
		yield put(signOut.success());
	} catch (error) {
		yield put(signOut.failure(error));
	}
}

function* validateTokenSaga() {
	try {
		const user = yield call(api.requestValidateToken);
		yield put(validateToken.success(user));
	} catch (error) {
		yield put(validateToken.failure(error));
	}
}

export function* userSaga() {
	yield takeLatest(signIn.request, signInSaga);
	yield takeLatest(signUp.request, signUpSaga);
	yield takeLatest(signOut.request, signOutSaga);
	yield takeLatest(validateToken.request, validateTokenSaga);
}
