import aTypes from './actionTypes';

const initStore = {
    email: '',
    password: '',
    authModalOpened: false,
    userIsLogged: false,
};

const authFormReducer = (store = initStore, {type, payload}) => {
    switch (type) {
        case aTypes.AUTH_MODAL_OPEN: {
            return {...store, authModalOpened: true};
        }

        case aTypes.AUTH_MODAL_CLOSE: {
            return {...store, ...initStore};
        }

        case aTypes.EMAIL_FIELD_BLUR: {
            return {...store, email: payload};
        }

        case aTypes.PASSWORD_FIELD_BLUR: {
            return {...store, password: payload};
        }
    }
    return store;
};

export default authFormReducer;