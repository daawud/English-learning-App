/**
 * Функция для облегчения кода switch редюсера при нажатии на кнопки выбора ответа
 * @returns {Object} tasks - обновленный отсортированный вариант списка слов
 */
export function onAnswerChanges(store, payload) {
    // меняем в объекте текущего слова его показатели
    const currentWordArray = {
        ...store.tasks[store.currentTaskIndex],
        status: payload
    };
    // отделяем другие слова от текущего
    let tasks = store.tasks.filter(task => +task.id !== +currentWordArray.id );
    // приклеиваем текущее слово с новыми параметрами
    tasks.push(currentWordArray);
    // сортируем полученные массив по id для правильного отображения прогрес-бара
    tasks.sort((less, more) => {
        return less.id - more.id;
    });
    return tasks;
}

/**
 * Функция для облегчения кода switch редюсера для нажатии на кнопку NEXT
 * @returns {Object} tasks - обновленный отсортированный вариант списка слов
 */
export function onNextChanges(store) {
    // меняем в объекте следующего слова его показатели
    const nextWordArray = {
        ...store.tasks[store.currentTaskIndex + 1],
        status: 'ongoing'
    };
    // отделяем другие слова от следующего
    let tasks = store.tasks.filter(task => +task.id !== (store.currentTaskIndex + 1));
    // приклеиваем следующее слово с новыми параметрами
    tasks.push(nextWordArray);
    // сортируем полученные массив по id для правильного отображения прогрес-бара
    tasks.sort((less, more) => {
        return less.id - more.id;
    });
    return tasks;
}