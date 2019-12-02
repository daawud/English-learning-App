import aTypes from './actionTypes';

const initStore = {
    email: '',
    password: '',
    errorAuth: '',
    isLoading: false,
};

const authFormReducer = (store = initStore, {type, payload}) => {
    switch (type) {
        case aTypes.AUTH_EMAIL_FIELD_CHANGE: {
            return {...store, email: payload};
        }

        case aTypes.AUTH_PASSWORD_FIELD_CHANGE: {
            return {...store, password: payload};
        }

        case aTypes.AUTH_CLEAR_FIELDS: {
            return{...store, email: '', password: ''};
        }

        case aTypes.SEND_REQUEST_FOR_AUTH_REJECT: {
            return {...store, errorAuth: payload};
        }

        case aTypes.AUTH_MODAL_LOADING: {
            return {...store, isLoading: true};
        }

        case aTypes.AUTH_MODAL_LOADING_REJECT: {
            return {...store, isLoading: false};
        }

        case aTypes.AUTH_MODAL_CLEAR_ERROR: {
            return {...store, errorAuth: ''};
        }
    }
    return store;
};

export default authFormReducer;