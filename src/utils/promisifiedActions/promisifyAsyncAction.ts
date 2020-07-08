import { AsyncActionCreator } from './AsyncActionCreator';
import { Dispatch } from 'redux';
import { v4 as uuid } from 'uuid';
import { START_WATCH_PROMISIFIED_ACTION } from './constants';

export const promisifyAsyncAction = <
	TAsyncActionCreator extends AsyncActionCreator,
	TRequest = ReturnType<TAsyncActionCreator['request']>['payload'],
	TSuccess = ReturnType<TAsyncActionCreator['success']>['payload']
>(
	actionCreators: TAsyncActionCreator,
) => (dispatch: Dispatch, payload?: TRequest): Promise<TSuccess | {}> => {
	return new Promise((resolve, reject) => {
		return dispatch({
			type: START_WATCH_PROMISIFIED_ACTION,
			payload,
			meta: {
				defer: { resolve, reject },
				taskId: uuid(),
				actionCreators,
			},
		});
	});
};
