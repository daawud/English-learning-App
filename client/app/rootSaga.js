import { fork } from 'redux-saga/effects';
import moduleAuthSaga from '~/Auth/saga';
import moduleRegisterSaga from "~/Register/saga";

export default function* rootSaga() {
    yield fork(moduleAuthSaga);
    yield fork(moduleRegisterSaga);
};

