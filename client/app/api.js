const protocol = 'http';
const domen = 'localhost';
const port = 8080;

export const rootURL = `${protocol}://${domen}:${port}`;

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
            throw { err: new Error(`Error ${response.status}`) || response.timerError };
        }
    } catch (err) {
        return err;
    }
}
