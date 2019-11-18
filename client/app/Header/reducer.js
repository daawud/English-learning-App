import aTypes from './actionTypes';

const initStore = {
    authModalOpened: false,
    registerModalOpened: false,
    forgotPasswordModalOpened: false,
    userIsRegistered: false,
    userIsLogged: false,
};

const headerReducer = (store = initStore, {type, payload}) => {
    switch (type) {
        case aTypes.AUTH_MODAL_OPEN: {
            return {...store,
                authModalOpened: true,
                registerModalOpened: false,
                forgotPasswordModalOpened: false};
        }

        case aTypes.AUTH_MODAL_CLOSE: {
            return {...store, authModalOpened: false};
        }

        case aTypes.REGISTER_FORM_OPEN: {
            return { ...store,
                authModalOpened: false,
                registerModalOpened: true,
                forgotPasswordModalOpened: false};
        }

        case aTypes.REGISTER_FORM_CLOSE: {
            return { ...store, registerModalOpened: false};
        }

        case aTypes.FORGOT_PASSWORD_MODAL_OPEN: {
            return { ...store,
                authModalOpened: false,
                registerModalOpened: false,
                forgotPasswordModalOpened: true};
        }
        case aTypes.FORGOT_PASSWORD_MODAL_CLOSE: {
            return { ...store, forgotPasswordModalOpened: false};
        }
    }
    return store;
};

export default headerReducer;