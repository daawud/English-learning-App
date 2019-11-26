import { call, put, fork, takeEvery, all } from 'redux-saga/effects';

import { fetchData, URL_AUTH  } from '~/libs/api/api';
import aTypes from '~/modules/Register/actionTypes';
import Tokens from "~/libs/api/Tokens";

const fetchParam = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};

function* sendRequestForRegister(action) {
    try {
        const param = {...fetchParam};

        // извлечь из события name, email, password
        param.body = JSON.stringify(action.payload);

        yield put({type: aTypes.REGISTER_MODAL_LOADING});
        const response = yield call(fetchData, `${URL_AUTH}/register`, param);

        if (response.err) {
            throw new Error(response.err['errors']);
        }

        yield put({type: aTypes.REGISTER_MODAL_LOADING_REJECT});

        // Сохранить токены в localStorage
        Tokens.saveToLocalStorage(response);

        //закрыть модально окно и очистить данные из редюсера
        yield all([
            yield put({type: aTypes.REGISTER_FORM_CLOSE}),
            yield put({type: aTypes.REGISTER_CLEAR_FIELDS}),
            yield put({type: aTypes.AUTH_USER_IS_LOGGED}),
            yield put({type: aTypes.HEADER_GET_DATA}),
        ]);

    } catch(err) {
        yield put({
            type: aTypes.SEND_REQUEST_FOR_REGISTER_REJECT,
            payload: err.message,
        })
    }
}

function* watchSendRequestForRegister() {
    yield takeEvery(aTypes.SEND_REQUEST_FOR_REGISTER, sendRequestForRegister);
}

export default function* moduleRegisterSaga() {
    yield fork(watchSendRequestForRegister);
}