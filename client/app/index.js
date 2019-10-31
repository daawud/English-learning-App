import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Routes from './routes';
import rootReducers from './rootReducers';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();
const store = createStore(combineReducers(rootReducers), applyMiddleware(saga));

saga.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'),
);
