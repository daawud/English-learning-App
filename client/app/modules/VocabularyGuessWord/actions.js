import aTypes from './actionTypes';

/**
 * Функция запуска саги, отвечающая за запрос данных с data сервера
 * @param {Array} value - массив с объектами со всеми словами для угадывания
 * @returns {Object} payload - название action, {Object} type - название типа action
 */
export function getVocabularyWordsSet() {
    return {
        type: aTypes.GET_VOCABULARY_WORDS_SET,
    };
}

/**
 * Функция очистки редюсера.
 * @returns {Object} type - название типа action
 */
export function clearVocabulary() {
    return {
        type: aTypes.CLEAR_VOCABULARY,
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
 * @param {String} value тип ответа пользователя: correct or incorrect
 * @returns {Object} type - название типа action
 */
export function userCorrectAnswer(value) {
    return {
        type: aTypes.RECORD_USER_ANSWER,
        payload: value,
    };
}

/**
 * Функция экшн для обработки нажатия на кнопку ПОКАЗАТЬ ОТВЕТ
 * @returns {Object} type - название типа action
 */
export function vocabularyShowAnswerModal() {
    return {
        type: aTypes.VOCABULARY_SHOW_ANSWER_MODAL,
    };
}

/**
 * Функция экшн для обработки нажатия на кнопку закрыть модальное окно показа правильного ответа
 * @returns {Object} type - название типа action
 */
export function vocabularyCloseAnswerModal() {
    return {
        type: aTypes.VOCABULARY_CLOSE_ANSWER_MODAL,
    };
}

/**
 * Функция экшн, вызывает сагу для начисления балла
 * @returns {Object} type - название типа action
 */
export function addPointOnCorrectAnswer() {
    return {
        type: aTypes.VOCABULARY_ADD_POINT,
    };
}

/**
 * Функция экшн, фиксирует угаданное слово, чтобы исключить добавление очков при повторном редактировании ответа в инпуте
 * @returns {Object} type - название типа action
 */
export function setCorrectAnswer() {
    return {
        type: aTypes.SET_CORRECT_ANSWER,
    };
}