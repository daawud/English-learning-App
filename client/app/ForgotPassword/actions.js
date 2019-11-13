'use strict';
import aTypes from './actionTypes';

/**
 * Функция отвечающая за показ модального окна Формы входа в личный кабинет
 * @returns {Object} type - название типа action
 */
export function forgotPasswordModalToOpen() {
    return {
        type: aTypes.FORGOT_PASSWORD_MODAL_OPEN,
    };
}

/**
 * Функция отвечающая за закрытие модального окна Формы входа в личный кабинет
 * @returns {Object} type - название типа action
 */
export function forgotPasswordModalToClose() {
    return {
        type: aTypes.FORGOT_PASSWORD_MODAL_CLOSE,
    };
}

/**
 * Функция обработки изменения данных в поле email по onBlur
 * @param {string} value - значение поля email
 * @returns {Object} payload - название action, type - название типа action
 */
export function emailOnBlur(value) {
    return {
        type: aTypes.EMAIL_FIELD_BLUR,
        payload: value,
    };
}
