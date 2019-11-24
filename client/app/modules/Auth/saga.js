import { call, put, fork, takeEvery, all } from 'redux-saga/effects';

import { fetchData, URL_AUTH } from '~/libs/api/api';
import aTypes from '~/modules/Auth/actionTypes';
import Tokens from '~/classes/Tokens';

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
        const response = yield call(fetchData, `${URL_AUTH}/login`, param);

        if (response.err) {
            throw new Error(response.err['errors']);
        }

        // Сохранить токены в localStorage
        let token = new Tokens();
        token.saveToLocalStorage(response);

        //закрыть модально окно и очистить данные из редюсера
        yield all([
            put({type: aTypes.AUTH_MODAL_CLOSE}),
            put({type: aTypes.AUTH_CLEAR_FIELDS}),
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