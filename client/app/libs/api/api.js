export const URL_AUTH = 'http://ela-auth-service.abirula.com/api/v1/auth';

/**
 * Создать ошибку по прошествии заданного времени
 * @param {Number} timeout задержка в мс
 * @return {Promise<Error>} превышение времени задержки
 */
function fetchTimer(timeout) {
    return new Promise(res => {
        setTimeout(() => {
            res({
                timerError: new Error(`Server does not respond for ${timeout / 1000} seconds`),
            });
        }, timeout);
    });
}

/**
 * Сделать запрос на сервер
 * @param {String} URL адрес для запроса
 * @param {Object} options параметры для fetch функции
 * @param {Number} [timeout=15000] задержка в мс
 * @return {Promise} ответ сервера
 */
export async function fetchData(URL, options, timeout = 15000) {
    try {
        const response = await Promise.race([fetchTimer(timeout), fetch(URL, options)]);


        if (response.ok) {
            return await response.json();
        } else {
            const errorBody = await response.json();

            errorBody.errorCode = response.status  || response.timerError;

            return {err: errorBody};
        }
    } catch (err) {
        return ({err: {
                errors: err,
            }});
    }
}