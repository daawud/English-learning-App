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
};

const guessWordVocabularyReducer = (store = initStore, {type, payload}) => {
    switch (type) {
        case aTypes.GET_VOCABULARY_WORDS_SET: {
            /* довавляем ключ и статус каждому слову для сортировки прогресс-бара */
            const tasks = payload.map((task, key) => {
                return {...task, id: key, status: key === 0 ? 'ongoing' : 'upcoming'}
            });

            return {...store, tasks: [...tasks]};
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

        case aTypes.VOCABULARY_GO_TO_NEXT_WORD: {
            if ((store.currentTaskIndex + 1) < store.tasks.length) {
                const tasks = onNextChanges(store);

                return {
                    ...store, tasks,
                    currentTaskIndex: store.currentTaskIndex + 1,
                    currentsUserAnswer: '',
                    isAnswered: false,
                    userInputTypedAnswer: {
                        value: '',
                        color: 'red'
                    }
                };
            } else {
                // логика запроса следующего пула слов
            }
        }
    }
    return store;
};

export default guessWordVocabularyReducer;