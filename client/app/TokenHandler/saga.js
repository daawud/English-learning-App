import { call, put, fork, takeEvery, takeLatest, take, all } from 'redux-saga/effects';
import { store } from '~/index';

import aType from "~/TokenHandler/actionTypes";
import { fetchData, URL_AUTH, URL_AUTH_LOCAL, URL_AUTH_ERROR, URL_REGISTER } from '~/api';

const fetchParam = {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};

function* sendRequestForAuth() {
    try {
        const param = {...fetchParam};
        param.body = JSON.stringify(store.getState().authFormReducer);  // получаю email/password из store
        const response = yield call(fetchData, URL_AUTH_LOCAL, param);
        //console.log(response);

        if (response.err) {
            throw new Error(response);
        }

        // Сохранить токены в localStorage
        localStorage.setItem('token', response['token']);
        localStorage.setItem('refreshToken', response['refreshToken']);

        //закрыть модально окно и очистить данные из редюсера
        yield all([
            put({type: aType.AUTH_MODAL_CLOSE}),
            put({type: aType.AUTH_CLEAR_FIELDS}),
        ]);

    } catch(err) {
        console.log(err);
        yield put({
            type: aType.RECEIVED_ERROR_AUTH,
            payload: err,
        })
    }
}

function* sendRequestForRegister() {
    try {
        const param = {...fetchParam};
        // извлечь введенные пользователем name. email, password из store
        const {name, email, password} = store.getState().registerFormReducer;
        param.body = JSON.stringify({name, email, password});
        const response = yield call(fetchData, URL_AUTH_ERROR , param);

        if (response.err) {
            throw new Error(response);
        }

        //закрыть модально окно и очистить данные из редюсера
        yield all([
            yield put({type: aType.REGISTER_FORM_CLOSE}),
            yield put({type: aType.REGISTER_CLEAR_FIELDS}),
        ]);

    } catch(err) {
        console.log(err);
        yield put({
            type: aType.RECEIVED_ERROR_AUTH,
            payload: err,
        })
    }
}

function* watchSendRequestForAuth() {
    yield takeEvery(aType.SEND_REQUEST_FOR_AUTH, sendRequestForAuth);
}

function* watchSendRequestForRegister() {
    yield takeEvery(aType.SEND_REQUEST_FOR_REGISTER, sendRequestForRegister);
}

export default function* tokenHandlerSaga() {
    yield fork(watchSendRequestForAuth);
    yield fork(watchSendRequestForRegister);
}