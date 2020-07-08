import { PayloadMetaActionCreator } from 'typesafe-actions';
import { PromisifiedActionMeta } from './PromisifiedActionMeta';

export interface AsyncActionCreator<TRequest = any, TSuccess = any, TError = any> {
	request: PayloadMetaActionCreator<string, TRequest, PromisifiedActionMeta>;
	success: PayloadMetaActionCreator<string, TSuccess, PromisifiedActionMeta>;
	failure: PayloadMetaActionCreator<string, TError, PromisifiedActionMeta>;
	cancel?: PayloadMetaActionCreator<string, undefined, PromisifiedActionMeta>;
}
