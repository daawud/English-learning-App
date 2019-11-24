'use strict';
import aTypes from './actionTypes';

/**
 * Функция обработки изменения данных в поле email по onBlur
 * @param {string} value - значение поля email
 * @returns {Object} payload - название action, type - название типа action
 */
export function emailOnChange(value) {
    return {
        type: aTypes.FORGOT_PASSWORD_EMAIL_FIELD_CHANGE,
        payload: value,
    };
}
