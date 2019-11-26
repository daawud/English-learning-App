import aTypes from './actionTypes';

/**
 * Функция получения списка задач и опрокидывания их в редюсер.
 * @param {Array} value - массив с объектами со всеми словами для угадывания
 * @returns {Object} payload - название action, {Object} type - название типа action
 */
export function getVocabularyWordsSet(value) {
    return {
        type: aTypes.GET_VOCABULARY_WORDS_SET,
        payload: value,
    };
}

/**
 * Функция экшн для обработки нажатия на кнопку NEXT
 * @returns {Object} type - название типа action
 */
export function nextWord() {
    return {
        type: aTypes.VOCABULARY_GO_TO_NEXT_WORD,
    };
}

/**
 * Функция для обработки нажатия на кнопку выбора правильного ответа
 * @param {String} тип ответа пользователя: correct or incorrect
 * @returns {Object} type - название типа action
 */
export function recordUserAnswer(value) {
    return {
        type: aTypes.RECORD_USER_ANSWER,
        payload: value,
    };
}