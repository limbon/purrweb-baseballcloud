import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ApplicationStore } from 'baseballcloud/types';

import { userReducer } from './ducks/user';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<ApplicationStore>({
	user: userReducer,
});

const middleware = [sagaMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export { store };
