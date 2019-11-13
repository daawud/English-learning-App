import aTypes from './actionTypes';

/**
 * Функция отвечающая за показ модального окна Формы входа в личный кабинет
 * @returns {Object} type - название типа action
 */
export function authFormToOpen() {
    return {
        type: aTypes.AUTH_MODAL_OPEN,
    };
}

/**
 * Функция отвечающая за закрытие модального окна Формы входа в личный кабинет
 * @returns {Object} type - название типа action
 */
export function authFormToClose() {
    return {
        type: aTypes.AUTH_MODAL_CLOSE,
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

/**
 * Функция обработки изменения данных в поле password по onBlur
 * @param {string} value - значение поля password
 * @returns {Object} payload - название action, {Object} type - название типа action
 */
export function passwordOnBlur(value) {
    return {
        type: aTypes.PASSWORD_FIELD_BLUR,
        payload: value,
    };
}