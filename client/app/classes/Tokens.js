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
    static saveToLocalStorage(token) {
        localStorage.setItem('token', token['token']);
        localStorage.setItem('refreshToken', token['refreshToken']);
    }
    /**
     * Метод извлечения access и refresh из LocalStorage
     * @return {Object} - объект с access и refresh токеном
     */
    static getFromLocalStorage() {
        const tokens = {
            token: localStorage.getItem('token'),
            refreshToken: localStorage.getItem('refreshToken'),
        };

        return (tokens);
    }
    /**
     * Метод очищает LocalStorage
     */
    static removeTokensFromLocalStorage() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }
}