import aTypes from './actionTypes';

const initStore = {
    email: '',
};

const forgotPasswordReducer = (store = initStore, { type, payload }) => {
    switch (type) {
        case aTypes.FORGOT_PASSWORD_EMAIL_FIELD_CHANGE: {
            return { ...store, email: payload};
        }
    }
    return store;
};

export default forgotPasswordReducer;