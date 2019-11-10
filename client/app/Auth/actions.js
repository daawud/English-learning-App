'use strict';

import aTypes from './actionTypes';

/**
 * Функция отвечающая за показ модального окна Формы входа в личный кабинет
 * @returns {{type: string}} - название типа action
 */
export function authOpen() {
    return {
        type: aTypes.AUTH_MODAL_OPEN,
    };
}

/**
 * Функция отвечающая за показ модального окна Формы регистрации пользователя
 * @returns {{type: string}} - название типа action
 */
export function authClose() {
    return {
        type: aTypes.AUTH_MODAL_CLOSE,
    };
}

/**
 *
 * @param field {Object} - объект с данными полей формы
 * @returns {{payload: *, type: *}} - payload - action, type - название типа action
 */
export function formFieldsUpdate(field) {
    let [key] = Object.keys(field);
    let [value] = Object.values(field);
    switch (key) {
        case 'email': {
            return {
                type: aTypes.EMAIL_FIELD_UPDATE,
                payload: value,
            };
        }
        case 'password': {
            return {
                type: aTypes.PASSWORD_FIELD_UPDATE,
                payload: value,
            };
        }
    }
}

export function showPassword(data) {
    return {
        type: aTypes.SHOW_PASSWORD_FIELD,
        payload: data,
    };
}
