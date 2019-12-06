import { call, put, fork, takeEvery } from 'redux-saga/effects';

import aType from '~/modules/VocabularyGuessWord/actionTypes';
import { URI_RANDOM_TASKS, URI_POINTS_USER } from './api';
import {fetchData} from "~/libs/api/api";
import Token, {getAuthHeader} from "~/libs/api/Tokens";

const fetchParam = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};
const bod = {
    action: "add",
    points: 1,
};

function* fetchVocabularyGuessWord() {
    try {
        const response = yield call(fetchData, URI_RANDOM_TASKS);

        if (response.err) {
            throw new Error(response.err.errors);
        }

        yield put({
            type: aType.GET_VOCABULARY_WORDS_SET_FULFILLED,
            payload: response,
        });

    } catch (err) {
        yield put({type: aType.GET_VOCABULARY_WORDS_SET_REJECT});
    }
}

function* vocabularyAddPoint() {
    try {
        const userID = Token.getUserIdFromToken();
        const URI = URI_POINTS_USER + userID;
        const params = {...fetchParam};

        params.headers.Authorization = getAuthHeader();
        params.body = JSON.stringify(bod);
        const response = yield call(fetchData, URI, params);

        yield put({type: aType.HEADER_GET_DATA});

        if (response.err) {
            throw new Error(response.err.errors);
        }

    } catch (err) {
        // Обработка ошибки
    }
}

function* watchVocabularyGuessWord() {
    yield takeEvery(aType.GET_VOCABULARY_WORDS_SET, fetchVocabularyGuessWord);
}

function* watchVocabularyAddPoint() {
    yield takeEvery(aType.VOCABULARY_ADD_POINT, vocabularyAddPoint);
}

export default function* moduleVocabularyGuessWordSaga() {
    yield fork(watchVocabularyGuessWord);
    yield fork(watchVocabularyAddPoint);
}