import aType from "~/TokenHandler/actionTypes";

/**
 * Функция инициирует отправку запроса аутентификации
 */
export function sendRequestForAuth() {
    return {
        type: aType.SEND_REQUEST_FOR_AUTH,
    }
}

/**
 * Функция инициирует отправку запроса для регистрации ползователя
 */
export function sendRequestForRegister() {
    return {
        type: aType.SEND_REQUEST_FOR_REGISTER,
    }
}
