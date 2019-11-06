import aTypes from './actionTypes';

const initStore = {
    name: '',
    email: '',
    password: '',
    authModalOpened: false,
    registerModalOpened: false,
    isLoggedIn: false,
    isRegistered: false
};

const registerFormReducer = (store = initStore, { type, payload }) => {
    switch (type) {
        case aTypes.REGISTER_OPEN: {
            return { ...store, authModalOpened: false, registerModalOpened: true };
        }
        case aTypes.REGISTER_CLOSE: {
            return { ...store, registerModalOpened: false };
        }
        case aTypes.FORM_FIELDS_UPDATE: {
            return { ...store, name: payload.name, email: payload.email, password: payload.password };
        }
    }
    return store;
};

export default registerFormReducer;