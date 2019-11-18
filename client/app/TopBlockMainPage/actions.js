import aTypes from './actionTypes';

/**
 * Функция отвечающая за показ модального приветственного блока главной страницы
 * @returns {Object} type - название типа action
 */
export function mainBlockToShow() {
    return {
        type: aTypes.MAIN_BLOCK_SHOW,
    };
}

/**
 * Функция отвечающая за показ модального модуля выбора обучающего материала
 * @returns {Object} type - название типа action
 */
export function materialOptionsBlockToShow() {
    return {
        type: aTypes.MATERIAL_OPTIONS_BLOCK_SHOW,
    };
}

/**
 * Функция отвечающая за показ модального модуля выбора теста
 * @returns {Object} type - название типа action
 */
export function testOptionsBlockToShow() {
    return {
        type: aTypes.TEST_OPTIONS_BLOCK_SHOW,
    };
}

/**
 * Функция отвечающая за показ модального модуля выбора курса обучения
 * @returns {Object} type - название типа action
 */
export function courseOptionsBlockToShow() {
    return {
        type: aTypes.COURSE_OPTIONS_BLOCK_SHOW,
    };
}