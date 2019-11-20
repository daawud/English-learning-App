/**
 * Класс создает экземпляр для работы с токенами
 * @class
 */
export default class Tokens {
    constructor() {}

    /**
     * Метод сохранения access и refresh токенов в LocalStorage
     * @param token {Object} - объект с access и refresh токеном
     */
    saveToLocalStorage(token) {
        localStorage.setItem('token', token['token']);
        localStorage.setItem('refreshToken', token['refreshToken']);
    }
}