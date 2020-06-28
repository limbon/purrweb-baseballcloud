import { takeLatest, put, call } from 'redux-saga/effects';

import { IOC } from '../../ioc';
import { ApiService } from '../../services/ApiService';
import { ServiceID } from '../../utils/enums';

import { REQUEST_SIGN_IN, RequestSignInAction } from './actionTypes';

import { requestSignInSuccess } from './actionCreators';

function* requestSignIn(action: RequestSignInAction) {
	const api = IOC.get<ApiService>(ServiceID.ApiService);
	try {
		const user = yield call(api.requestSignIn, action.payload);
		yield put(requestSignInSuccess(user));
	} catch (error) {
		// TODO
		console.error(error);
	}
}

export function* userSaga() {
	yield takeLatest(REQUEST_SIGN_IN, requestSignIn);
}
