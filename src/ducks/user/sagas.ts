import { takeLatest, put, call } from 'redux-saga/effects';

import { IOC } from '../../ioc';
import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

import {
	REQUEST_SIGN_IN,
	VALIDATE_TOKEN,
	RequestSignInAction,
	ValidateTokenAction,
} from './actionTypes';

import { requestSignInSuccess, validateTokenSuccess } from './actionCreators';

const api = IOC.get<ApiService>(ServiceID.ApiService);

function* requestSignIn(action: RequestSignInAction) {
	try {
		const user = yield call(api.requestSignIn, action.payload);
		yield put(requestSignInSuccess(user));
	} catch (error) {
		// TODO
		console.error(error);
	}
}

function* validateToken(action: ValidateTokenAction) {
	try {
		const user = yield call(api.requestValidateToken);
		yield put(validateTokenSuccess(user));
	} catch (error) {
		// TODO
		console.error(error);
	}
}

export function* userSaga() {
	yield takeLatest(REQUEST_SIGN_IN, requestSignIn);
	yield takeLatest(VALIDATE_TOKEN, validateToken);
}
