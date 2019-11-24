import { call, put, fork, takeEvery, all } from 'redux-saga/effects';
import { fetchData, URL_AUTH} from '~/libs/api/api';

import aTypes from '~/modules/TokenHandler/actionTypes';
import Tokens from "~/classes/Tokens";

const token = new Tokens();
const fetchParam = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};

function* sendRefreshRequest(action) {
    try {
        const param = {...fetchParam};
        const tokenLS = token.getFromLocalStorage();

        param.body = JSON.stringify(tokenLS);
        const response = yield call(fetchData, `${URL_AUTH}/refresh`, param);
        console.log(response);

        if (response.err) {
            throw new Error(response.err['errors']);
        }

        // Сохраняем полученную пару токенов в LocalStorage
        token.saveToLocalStorage(response);
        yield put({type: action.payload});

    } catch(err) {
        token.removeTokensFromLocalStorage();
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