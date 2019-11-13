import aTypes from './actionTypes';

const initStore = {
    email: '',
    forgotPasswordModalOpened: false,
};

const forgotPasswordReducer = (store = initStore, { type, payload }) => {
    switch (type) {
        case aTypes.FORGOT_PASSWORD_MODAL_OPEN: {
            return { ...store, forgotPasswordModalOpened: true };
        }
        case aTypes.FORGOT_PASSWORD_MODAL_CLOSE: {
            return { ...store, ...initStore };
        }
        case aTypes.EMAIL_FIELD_BLUR: {
            return { ...store, email: payload, emailError: '' };
        }
    }
    return store;
};

export default forgotPasswordReducer;