import { call, put, fork, takeEvery } from 'redux-saga/effects';

import aType from '~/modules/VocabularyGuessWord/actionTypes';
import { URI_RANDOM_TASKS } from './api';
import {fetchData} from "~/libs/api/api";

const fetchParam = {
    method: 'GET',
};

function* fetchVocabularyGuessWord() {
    try {
        const param = {...fetchParam};
        const response = yield call(fetchData, URI_RANDOM_TASKS, param);

        if (response.err) {
            throw new Error(response.err.errors);
        }

        yield put({
            type: aType.GET_VOCABULARY_WORDS_SET_FULFILLED,
            payload: response,
        });

    } catch (err) {
        //
        yield put({type: aType.GET_VOCABULARY_WORDS_SET_REJECT});
    }
}

function* watchVocabularyGuessWord() {
    yield takeEvery(aType.GET_VOCABULARY_WORDS_SET, fetchVocabularyGuessWord);
}

export default function* moduleVocabularyGuessWordSaga() {
    yield fork(watchVocabularyGuessWord);
}