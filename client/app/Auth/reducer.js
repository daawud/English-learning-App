import aTypes from './actionTypes';

const initStore = {
    email: '',
    emailError: '',
    password: '',
    authModalOpened: false,
    userAuthenticateStatus: false
};

const authFormReducer = (store = initStore, { type, payload }) => {
    switch (type) {
        case aTypes.AUTH_MODAL_OPEN: {
            return { ...store, authModalOpened: true };
        }
        case aTypes.AUTH_MODAL_CLOSE: {
            return { ...store, authModalOpened: false };
        }
        case aTypes.EMAIL_FIELD_UPDATE: {
            return { ...store, email: payload };
        }
        case aTypes.PASSWORD_FIELD_UPDATE: {
            return { ...store, password: payload };
        }
        case aTypes.FIELDS_VALIDATION_ERRORS: {
            return { ...store, emailError: payload.email };
        }
    }
    return store;
};

export default authFormReducer;