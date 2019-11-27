import { call, put, fork, takeEvery, all } from 'redux-saga/effects';
import { fetchData, URL_AUTH} from '~/libs/api/api';

import aTypes from '~/modules/TokenHandler/actionTypes';
import Tokens from "~/libs/api/Tokens";

const fetchParam = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};

function* sendRefreshRequest(action) {
    try {
        const param = {...fetchParam};
        const tokenLS = Tokens.getFromLocalStorage();

        param.body = JSON.stringify(tokenLS);
        const response = yield call(fetchData, `${URL_AUTH}/refresh`, param);

        if (response.err) {
            throw new Error(response.err.errors);
        }

        // Сохраняем полученную пару токенов в LocalStorage
        Tokens.saveToLocalStorage(response);
        yield put({type: action.payload});

    } catch(err) {
        Tokens.removeTokensFromLocalStorage();
        yield all([
            put({type: aTypes.AUTH_MODAL_OPEN}),
            put({type: aTypes.AUTH_USER_IS_LOGOUT}),
        ])
    }
}

function* watchRefreshRequest() {
    yield takeEvery(aTypes.SEND_REFRESH_TOKEN_TO_AUTH, sendRefreshRequest);
}

export default function* moduleTokenHandlerSaga() {
    yield fork(watchRefreshRequest);
}