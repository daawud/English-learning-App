import aTypes from './actionTypes';

/**
 * Функция
 * @param {*[]} value - значение поля password
 * @returns {Object} payload - название action, {Object} type - название типа action
 */
export function getVocabularyWordsSet(value) {
    return {
        type: aTypes.GET_VOCABULARY_WORDS_SET,
        payload: value,
    };
}

/**
 * Функция
 * @param
 * @returns {Object} type - название типа action
 */
export function nextWord() {
    return {
        type: aTypes.VOCABULARY_GO_TO_NEXT_WORD,
    };
}

/**
 * Функция
 * @param
 * @returns {Object} type - название типа action
 */
export function recordUserAnswer(value) {
    return {
        type: aTypes.RECORD_USER_ANSWER,
        payload: value,
    };
}