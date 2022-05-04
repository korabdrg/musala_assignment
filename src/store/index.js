import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import {combinedReducers} from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const something = [sagaMiddleware];

const store = createStore(combinedReducers, applyMiddleware(...something));

sagaMiddleware.run(rootSaga);

export {store};
