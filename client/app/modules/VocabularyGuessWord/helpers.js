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

export const tasks = [
    {
        'taskId': 1,
        'points': 1,
        'taskType': 'chooseRusWord',
        'imgUrl': 'https://placehold.it/300x200',
        'transcription': '[kæt]',
        'givenWordEng': 'Cat',
        'givenWordRus': 'Кошка',
        'givenAnswers': [
            {
                'word': 'Собака',
                'type': 'incorrect'
            },
            {
                'word': 'Утка',
                'type': 'incorrect'
            },
            {
                'word': 'Кошка',
                'type': 'correct'
            },
            {
                'word': 'Лошадь',
                'type': 'incorrect'
            }
        ]
    },
    {
        'taskId': 2,
        'points': 1,
        'taskType': 'chooseEngWord',
        'imgUrl': 'https://placehold.it/300x200',
        'transcription': '[dɔg]',
        'givenWordEng': 'Dog',
        'givenWordRus': 'Собака',
        'givenAnswers': [
            {
                'word': 'Dog',
                'type': 'correct'
            },
            {
                'word': 'Duck',
                'type': 'incorrect'
            },
            {
                'word': 'Cat',
                'type': 'incorrect'
            },
            {
                'word': 'Horse',
                'type': 'incorrect'
            }
        ]
    },
    {
        'taskId': 1,
        'points': 1,
        'taskType': 'chooseRusWord',
        'imgUrl': 'https://placehold.it/300x200',
        'transcription': '[ˈbæʧələr]',
        'givenWordEng': 'Bachelor',
        'givenWordRus': 'холостяк',
        'givenAnswers': [
            {
                'word': 'Бочка',
                'type': 'incorrect'
            },
            {
                'word': 'Будка',
                'type': 'incorrect'
            },
            {
                'word': 'Холостяк',
                'type': 'correct'
            },
            {
                'word': 'Бублик',
                'type': 'incorrect'
            }
        ]
    },
    {
        'taskId': 2,
        'points': 1,
        'taskType': 'chooseEngWord',
        'imgUrl': 'https://placehold.it/300x200',
        'transcription': '[braɪd]',
        'givenWordEng': 'bride',
        'givenWordRus': 'невеста',
        'givenAnswers': [
            {
                'word': 'bride',
                'type': 'correct'
            },
            {
                'word': 'wife',
                'type': 'incorrect'
            },
            {
                'word': 'witch',
                'type': 'incorrect'
            },
            {
                'word': 'single',
                'type': 'incorrect'
            }
        ]
    },
];