import aTypes from './actionTypes';
import { onAnswerChanges } from './helpers';
import { onNextChanges } from './helpers';

const initStore = {
    tasks: [],
    currentTaskIndex: 0,
    currentsUserAnswer: '',
    isAnswered: false,
    userInputTypedAnswer: {
        value: '',
        color: 'red'
    },
    showAnswerModal: false,
    ifGivenWordsFinished: false,
    sendPoint: false,
};

const guessWordVocabularyReducer = (store = initStore, {type, payload}) => {
    switch (type) {
        case aTypes.GET_VOCABULARY_WORDS_SET_FULFILLED: {
            /* довавляем ключ и статус каждому слову для сортировки прогресс-бара */
            const tasks = payload.map((task, key) => {
                return {...task, id: key, status: key === 0 ? 'ongoing' : 'upcoming'}
            });

            return {...store, ...initStore, tasks};
        }

        case aTypes.CLEAR_VOCABULARY: {
            /* очищаем редюсер */
            return {...store, ...initStore};
        }

        case aTypes.RECORD_USER_ANSWER: {
            if (store.isAnswered) {
                return store;
            }

            const tasks = onAnswerChanges(store, payload);

            return {...store, tasks, currentsUserAnswer: payload, isAnswered: true};
        }

        case aTypes.USER_TYPED_ANSWER: {
            return {...store, userInputTypedAnswer: payload};
        }

        case aTypes.VOCABULARY_SHOW_ANSWER_MODAL: {
            return {...store, showAnswerModal: true};
        }

        case aTypes.VOCABULARY_CLOSE_ANSWER_MODAL: {
            return {...store, showAnswerModal: false};
        }

        case aTypes.VOCABULARY_GO_TO_NEXT_WORD: {
            if ((store.currentTaskIndex + 1) < store.tasks.length) {
                const tasks = onNextChanges(store);

                return {
                    ...store, tasks,
                    ifGivenWordsFinished: +store.currentTaskIndex + 2 === tasks.length,
                    currentTaskIndex: store.currentTaskIndex + 1,
                    currentsUserAnswer: '',
                    isAnswered: false,
                    userInputTypedAnswer: {
                        value: '',
                        color: 'red'
                    },
                    sendPoint: false,
                };
            } else {
                // логика запроса следующего пула слов
            }
        }

        case aTypes.SET_CORRECT_ANSWER: {
            return {...store, sendPoint: true};
        }

    }
    return store;
};

export default guessWordVocabularyReducer;