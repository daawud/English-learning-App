import aTypes from './actionTypes';

const initStore = {
    authModalOpened: false,
    registerModalOpened: false,
    forgotPasswordModalOpened: false,
    userIsRegistered: false,
    userIsLogged: false,
    isLoading: false,
    data: {},
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

        case aTypes.AUTH_USER_IS_LOGGED: {
            return { ...store, userIsLogged: true};
        }

        case aTypes.AUTH_USER_IS_LOGOUT: {
            return { ...store, userIsLogged: false, data: {}};
        }

        case aTypes.HEADER_GET_DATA_FULFILD: {
            return { ...store, userIsLogged: true, data: payload};
        }

        case aTypes.HEADER_LOADING_DATA: {
            return {...store, isLoading: true};
        }

        case aTypes.HEADER_LOADING_DATA_REJECT: {
            return {...store, isLoading: false};
        }
    }
    return store;
};

export default headerReducer;