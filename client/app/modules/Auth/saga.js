import { call, put, fork, takeEvery, all } from 'redux-saga/effects';

import { fetchData, URL_AUTH } from '~/libs/api/api';
import aTypes from '~/modules/Auth/actionTypes';
import Tokens from '~/libs/api/Tokens';

const fetchParam = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};

function* sendRequestForAuth(action) {
    try {
        const param = {...fetchParam};

        // извлечь из события
        param.body = JSON.stringify(action.payload);

        yield put({type: aTypes.AUTH_MODAL_LOADING});
        const response = yield call(fetchData, `${URL_AUTH}/login`, param);

        if (response.err) {
            throw new Error(response.err['errors']);
        }

        yield put({type: aTypes.AUTH_MODAL_LOADING_REJECT});

        // Сохранить токены в localStorage
        Tokens.saveToLocalStorage(response);

        //закрыть модально окно и очистить данные из редюсера
        yield all([
            yield put({type: aTypes.AUTH_MODAL_CLOSE}),
            yield put({type: aTypes.AUTH_CLEAR_FIELDS}),
            yield put({type: aTypes.AUTH_USER_IS_LOGGED}),
            yield put({type: aTypes.HEADER_GET_DATA}),
        ]);

    } catch(err) {
        yield put({
            type: aTypes.SEND_REQUEST_FOR_AUTH_REJECT,
            payload: err.message,
        })
    }
}

function* watchSendRequestForAuth() {
    yield takeEvery(aTypes.SEND_REQUEST_FOR_AUTH, sendRequestForAuth);
}

export default function* moduleAuthSaga() {
    yield fork(watchSendRequestForAuth);
}