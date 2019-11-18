import aTypes from './actionTypes';

/**
 * Функция обработки изменения данных в поле password по onChange
 * @param {string} value - значение поля password
 * @returns {Object} payload - название action, {Object} type - название типа action
 */
export function passwordOnChange(value) {
    return {
        type: aTypes.AUTH_PASSWORD_FIELD_CHANGE,
        payload: value,
    };
}

/**
 * Функция обработки изменения данных в поле email по onChange
 * @param {string} value - значение поля email
 * @returns {Object} payload - название action, type - название типа action
 */
export function emailOnChange(value) {
    return {
        type: aTypes.AUTH_EMAIL_FIELD_CHANGE,
        payload: value,
    };
}

