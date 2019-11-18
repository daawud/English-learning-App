import aTypes from './actionTypes';

const initStore = {
    email: '',
    password: '',
};

const authFormReducer = (store = initStore, {type, payload}) => {
    switch (type) {
        case aTypes.AUTH_EMAIL_FIELD_CHANGE: {
            return {...store, email: payload};
        }

        case aTypes.AUTH_PASSWORD_FIELD_CHANGE: {
            return {...store, password: payload};
        }
    }
    return store;
};

export default authFormReducer;