import { call, put, fork, takeEvery } from 'redux-saga/effects';

import aTypes from "~/modules/Header/actionTypes";
import { titleWithToken, fetchData } from '~/libs/api/api';
import { HEADER_API } from '~/modules/Header/api';

function* sendRequestGetData() {
    try {
        const param = {...titleWithToken()};

        param.method = 'GET';                   //Метод ставим в сзависимости от запроса
        const response = yield call(fetchData, HEADER_API, param);

        if (response.err) {
            throw new Error(response.err['errors']);
        }

        yield put({
            type: aTypes.HEADER_GET_DATA_FULFILL,
            payload: response,
        });
    } catch (err) {
        if (err.message === 'TypeError: Failed to fetch') {
            yield put({type: aTypes.AUTH_USER_IS_LOGOUT});
        } else {
            yield put({
                type: aTypes.SEND_REFRESH_TOKEN_TO_AUTH,
                payload: aTypes.HEADER_GET_DATA,
            });
        }
    }
}

function* watchHeaderGetData() {
    yield takeEvery(aTypes.HEADER_GET_DATA, sendRequestGetData);
}

export default function* moduleHeaderSaga() {
    yield fork(watchHeaderGetData);
}