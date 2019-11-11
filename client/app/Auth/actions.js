import aTypes from './actionTypes';

/**
 * Функция отвечающая за показ модального окна Формы входа в личный кабинет
 * @returns {string} type - название типа action
 */
export function authFormToOpen() {
    return {
        type: aTypes.AUTH_MODAL_OPEN,
    };
}

/**
 * Функция отвечающая за закрытие модального окна Формы входа в личный кабинет
 * @returns {string} type - название типа action
 */
export function authFormToClose() {
    return {
        type: aTypes.AUTH_MODAL_CLOSE,
    };
}

/**
 * Функция обработки изменения данных в полях формы
 * @param {string} key - наименование ключа поля
 * @param {string} value - значение поля
 * @returns {string} payload - action, {string} type - название типа action
 */
export function formFieldsUpdate({key, value}) {
    switch (key) {
        case 'email': {
            return {
                type: aTypes.EMAIL_FIELD_BLUR,
                payload: value,
            };
        }
        case 'password': {
            return {
                type: aTypes.PASSWORD_FIELD_BLUR,
                payload: value,
            };
        }
    }
}