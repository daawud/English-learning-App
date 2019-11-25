import { fork } from 'redux-saga/effects';
import moduleAuthSaga from '~/modules/Auth/saga';
import moduleRegisterSaga from "~/modules/Register/saga";
import moduleTokenHandlerSaga from '~/modules/TokenHandler/saga';

export default function* rootSaga() {
    yield fork(moduleAuthSaga);
    yield fork(moduleRegisterSaga);
    yield fork(moduleTokenHandlerSaga);
};

