import aTypes from './actionTypes';

const initStore = {
    tasks: [],
    currentTaskIndex: 0,
    currentsUserAnswer: '',
    isAnswered: false
};

const guessWordVocabularyReducer = (store = initStore, {type, payload}) => {

    /**
     * Функция для облегчения кода switch при нажатии на кнопки выбора ответа
     * @returns {Object} tasks - обновленный отсортированный вариант списка слов
     */
    function onAnswerChanges() {
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
     * Функция для облегчения кода switch для нажатии на кнопку NEXT
     * @returns {Object} tasks - обновленный отсортированный вариант списка слов
     */
    function onNextChanges() {
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

    switch (type) {
        case aTypes.GET_VOCABULARY_WORDS_SET: {
            /* довавляем ключ и статус каждому слову для сортировки прогресс-бара */
            const tasks = payload.map((task, key) => {
                return {...task, id: key, status: key === 0 ? 'ongoing' : 'upcoming'}
            });

            return {...store, tasks: [...tasks]};
        }

        case aTypes.RECORD_USER_ANSWER: {
            if(store.isAnswered) {
                return
            }

            const tasks = onAnswerChanges();

            return {...store, tasks, currentsUserAnswer: payload, isAnswered: true};
        }

        case aTypes.VOCABULARY_GO_TO_NEXT_WORD: {
            if ((store.currentTaskIndex + 1) < store.tasks.length) {
                const tasks = onNextChanges();

                return {...store, tasks,
                    currentTaskIndex: store.currentTaskIndex + 1,
                    currentsUserAnswer: '',
                    isAnswered: false};
            } else {
                // логика запроса следующего пула слов
            }
        }
    }
    return store;
};

export default guessWordVocabularyReducer;