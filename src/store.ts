import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import promiseWatcherSaga2 from './utils/promisifiedActions/promisifyWatcher';
// import { promiseWatcherSaga } from './utils/promisifiedActions/promiseWatcher';

import { ApplicationStore } from 'baseballcloud/types';

import { userReducer, userSaga } from './ducks/user';
import { profileReducer, profileSaga } from './ducks/profile';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<ApplicationStore>({
	userState: userReducer,
	profileState: profileReducer,
});

const middleware = [sagaMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

function* rootSaga() {
	yield all([userSaga(), profileSaga(), promiseWatcherSaga2()]);
}
sagaMiddleware.run(rootSaga);

export { store };
