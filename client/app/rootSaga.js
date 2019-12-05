import { fork } from 'redux-saga/effects';
import moduleAuthSaga from '~/modules/Auth/saga';
import moduleRegisterSaga from "~/modules/Register/saga";
import moduleHeaderSaga from '~/modules/Header/saga';
import moduleTokenHandlerSaga from '~/modules/TokenHandler/saga';
import moduleVocabularyGuessWordSaga from '~/modules/VocabularyGuessWord/saga';

export default function* rootSaga() {
    yield fork(moduleAuthSaga);
    yield fork(moduleRegisterSaga);
    yield fork(moduleHeaderSaga);
    yield fork(moduleTokenHandlerSaga);
    yield fork(moduleVocabularyGuessWordSaga);
};

