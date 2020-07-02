import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { all } from 'redux-saga/effects';

import { ApplicationStore } from 'baseballcloud/types';

import { userReducer, userSaga } from './ducks/user';
import { profileReducer, profileSaga } from './ducks/profile';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<ApplicationStore>({
	user: userReducer,
	profile: profileReducer,
});

const middleware = [sagaMiddleware, thunk];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

function* rootSaga() {
	yield all([userSaga(), profileSaga()]);
}
sagaMiddleware.run(rootSaga);

export { store };
