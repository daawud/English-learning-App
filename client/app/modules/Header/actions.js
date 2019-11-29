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
 * Функция отвечающая за показ модального окна Формы регистрации пользователя
 * @returns {Object} type - название типа action
 */
export function registerFormOpen() {
    return {
        type: aTypes.REGISTER_FORM_OPEN,
    };
}

/**
 * Функция отвечающая за закрытие модального окна Формы регистрации пользователя
 * @returns {Object} type - название типа action
 */
export function registerFormClose() {
    return {
        type: aTypes.REGISTER_FORM_CLOSE,
    };
}

/**
 * Функция отвечающая за показ модального окна Формы сброса пароля
 * @returns {Object} type - название типа action
 */
export function forgotPasswordModalToOpen() {
    return {
        type: aTypes.FORGOT_PASSWORD_MODAL_OPEN,
    };
}

/**
 * Функция отвечающая за закрытие модального окна Формы сброса пароля
 * @returns {Object} type - название типа action
 */
export function forgotPasswordModalToClose() {
    return {
        type: aTypes.FORGOT_PASSWORD_MODAL_CLOSE,
    };
}

/**
 * Функция отвечающая за закрытие модального окна Формы сброса пароля
 * @returns {Object} type - название типа action
 */
export function headerGetData() {
    return {
        type: aTypes.HEADER_GET_DATA,
    };
}

/**
 * Функция отвечающая за выход из личного кабинета
 * @returns {Object} type - название типа action
 */
export function userLogOut() {
    return {
        type: aTypes.AUTH_USER_IS_LOGOUT,
    };
}