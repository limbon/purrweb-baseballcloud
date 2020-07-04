import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { all } from 'redux-saga/effects';

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
	yield all([userSaga(), profileSaga(), routinePromiseWatcherSaga()]);
}
sagaMiddleware.run(rootSaga);

export { store };
