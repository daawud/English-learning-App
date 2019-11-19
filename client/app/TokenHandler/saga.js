import { call, put, fork, takeEvery, all } from 'redux-saga/effects';
import { store } from '~/index';

import aType from "~/TokenHandler/actionTypes";
import { fetchData, URL_AUTH } from '~/api';

const fetchParam = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};

// function* sendRequestForAuth() {
//     try {
//         const param = {...fetchParam};
//
//         // извлечь email/password из store
//         param.body = JSON.stringify(store.getState().authFormReducer);
//         const response = yield call(fetchData, URL_AUTH + 'login', param);
//
//         if (response.err) {
//             throw new Error(response.err['errors']);
//         }
//
//         // Сохранить токены в localStorage
//         localStorage.setItem('token', response['token']);
//         localStorage.setItem('refreshToken', response['refreshToken']);
//
//         //закрыть модально окно и очистить данные из редюсера
//         yield all([
//             put({type: aType.AUTH_MODAL_CLOSE}),
//             put({type: aType.AUTH_CLEAR_FIELDS}),
//         ]);
//
//     } catch(err) {
//         yield put({
//             type: aType.RECEIVED_ERROR_AUTH,
//             payload: err.message,
//         })
//     }
// }

function* sendRequestForRegister() {
    try {
        const param = {...fetchParam};

        // извлечь введенные пользователем name. email, password из store
        const {name, email, password} = store.getState().registerFormReducer;
        param.body = JSON.stringify({name, email, password});
        const response = yield call(fetchData, URL_AUTH + 'register', param);

        if (response.err) {
            throw new Error(response.err['errors']);
        }

        // Сохранить токены в localStorage
        localStorage.setItem('token', response['token']);
        localStorage.setItem('refreshToken', response['refreshToken']);

        //закрыть модально окно и очистить данные из редюсера
        yield all([
            yield put({type: aType.REGISTER_FORM_CLOSE}),
            yield put({type: aType.REGISTER_CLEAR_FIELDS}),
        ]);

    } catch(err) {
        yield put({
            type: aType.RECEIVED_ERROR_REGISTER,
            payload: err.message,
        })
    }
}


function* watchSendRequestForRegister() {
    yield takeEvery(aType.SEND_REQUEST_FOR_REGISTER, sendRequestForRegister);
}

export default function* tokenHandlerSaga() {
    yield fork(watchSendRequestForRegister);
}