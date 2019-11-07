import aTypes from './actionTypes';

const initStore = {
    email: '',
    password: '',
    authModalOpened: false,
    registerModalOpened: false,
    isLoggedIn: false
};

const authFormReducer = (store = initStore, { type, payload }) => {
    switch (type) {
        case aTypes.AUTH_OPEN: {
            return { ...store, authModalOpened: true, registerModalOpened: false };
        }
        case aTypes.AUTH_CLOSE: {
            return { ...store, authModalOpened: false };
        }
        case aTypes.FORM_FIELDS_UPDATE: {
            return { ...store, email: payload.email, password: payload.password };
        }
    }
    return store;
};

export default authFormReducer;