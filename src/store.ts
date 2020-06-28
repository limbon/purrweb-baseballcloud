import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { ApplicationStore } from 'baseballcloud/types';

import { userReducer, userSaga } from './ducks/user';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<ApplicationStore>({
	user: userReducer,
});

const middleware = [sagaMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

function* rootSaga() {
	yield all([userSaga()]);
}
sagaMiddleware.run(rootSaga);

export { store };
