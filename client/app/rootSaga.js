import { fork } from 'redux-saga/effects';
import tokenHandlerSaga from '~/TokenHandler/saga';

export default function* rootSaga() {
    yield fork(tokenHandlerSaga);
};

