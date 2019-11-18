import aTypes from './actionTypes';

/**
 * Функция обработки изменения данных в поле NAME по onChange
 * @param {string} value - значение поля password
 * @returns {Object} payload - название action, {Object} type - название типа action
 */
export function nameOnChange(value) {
    return {
        type: aTypes.REGISTER_NAME_FIELD_CHANGE,
        payload: value,
    };
}

/**
 * Функция обработки изменения данных в поле EMAIL по onChange
 * @param {string} value - значение поля email
 * @returns {Object} payload - название action, type - название типа action
 */
export function emailOnChange(value) {
    return {
        type: aTypes.REGISTER_EMAIL_FIELD_CHANGE,
        payload: value,
    };
}

/**
 * Функция обработки изменения данных в поле PASSWORD по onChange
 * @param {string} value - значение поля password
 * @returns {Object} payload - название action, {Object} type - название типа action
 */
export function passwordOnChange(value) {
    return {
        type: aTypes.REGISTER_PASSWORD_FIELD_CHANGE,
        payload: value,
    };
}

/**
 * Функция обработки изменения данных в поле PASSWORD_REPEAT по onChange
 * @param {string} value - значение поля email
 * @returns {Object} payload - название action, type - название типа action
 */
export function passwordRepeatOnChange(value) {
    return {
        type: aTypes.REGISTER_PASSWORD_REPEAT_FIELD_CHANGE,
        payload: value,
    };
}

/**
 * Функция обработки изменения данных в поле name по onBlur
 * @param {string} name - значение поля name
 * @returns {Object} payload - action, key - название поля input, value - значение поля input
 */
export function nameOnBlur(name) {
    return {
        type: aTypes.REGISTER_NAME_FIELD_BLUR,
        payload: {
            key: 'name',
            value: name
        },
    };
}

/**
 * Функция обработки изменения данных в поле email по onBlur
 * @param {string} email - значение поля email
 * @returns {Object} payload - action, key - название поля input, value - значение поля input
 */
export function emailOnBlur(email) {
    return {
        type: aTypes.REGISTER_EMAIL_FIELD_BLUR,
        payload: {
            key: 'email',
            value: email
        },
    };
}

/**
 * Функция обработки изменения данных в поле password по onBlur
 * @param {string} password - значение поля password
 * @returns {Object} payload - action, key - название поля input, value - значение поля input
 */
export function passwordOnBlur(password) {
    return {
        type: aTypes.REGISTER_PASSWORD_FIELD_BLUR,
        payload: {
            key: 'password',
            value: password
        },
    };
}

/**
 * Функция обработки изменения данных в поле password_repeat по onBlur
 * @param {string} password_repeat - значение поля password_repeat
 * @returns {Object} payload - action, key - название поля input, value - значение поля input
 */
export function passwordRepeatOnBlur(password_repeat) {
    return {
        type: aTypes.REGISTER_PASSWORD_FIELD_REPEAT_BLUR,
        payload: {
            key: 'password_repeat',
            value: password_repeat
        },
    };
}

/**
 * Функция отвечающая за очистку сообщения об ошибке валидации поля NAME при фокусе на данном поле
 * @returns {Object} type - название типа action
 */
export function clearNameErrorMassage() {
    return {
        type: aTypes.REGISTER_CLEAR_NAME_ERROR_MESSAGE,
    };
}

/**
 * Функция отвечающая за очистку сообщения об ошибке валидации поля EMAIL при фокусе на данном поле
 * @returns {Object} type - название типа action
 */
export function clearEmailErrorMassage() {
    return {
        type: aTypes.REGISTER_CLEAR_EMAIL_ERROR_MESSAGE,
    };
}

/**
 * Функция отвечающая за очистку сообщения об ошибке валидации поля PASSWORD при фокусе на данном поле
 * @returns {Object} type - название типа action
 */
export function clearPasswordErrorMassage() {
    return {
        type: aTypes.REGISTER_CLEAR_PASSWORD_ERROR_MESSAGE,
    };
}

/**
 * Функция отвечающая за очистку сообщения об ошибке валидации поля PASSWORD_REPEAT при фокусе на данном поле
 * @returns {Object} type - название типа action
 */
export function clearPasswordRepeatErrorMassage() {
    return {
        type: aTypes.REGISTER_CLEAR_PASSWORD_REPEAT_ERROR_MESSAGE,
    };
}