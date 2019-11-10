import aTypes from './actionTypes';
import Validator from '~/classes/Validator';

const initStore = {
    email: '',
    emailValidationError: '',
    password: '',
    passwordValidationError: '',
    authModalOpened: false,
    userIsLogged: false,
    typeOfPasswordInput: 'password'
};

const authFormReducer = (store = initStore, {type, payload}) => {
    switch (type) {
        case aTypes.AUTH_MODAL_OPEN: {
            return {...store, authModalOpened: true};
        }
        case aTypes.AUTH_MODAL_CLOSE: {
            return {...store, authModalOpened: false,};
        }
        case aTypes.EMAIL_FIELD_UPDATE: {
            const emailValidation = new Validator();
            emailValidation.validateForm({email: payload});
            if (emailValidation.isValid) {
                return {...store, email: payload, emailValidationError: ''};
            } else {
                return {...store, email: '', emailValidationError: emailValidation.error};
            }
        }
        case aTypes.PASSWORD_FIELD_UPDATE: {
            return {...store, password: payload};

        }
        case aTypes.SHOW_PASSWORD_FIELD: {
            return {
                ...store,
                typeOfPasswordInput: payload === 'password' ? 'text' : 'password'
            };
        }
    }
    return store;
};

export default authFormReducer;