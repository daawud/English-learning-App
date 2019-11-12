import aTypes from './actionTypes';
import Validator from '~/classes/Validator';

const initStore = {
    name: '',
    nameValidationError: '',
    email: '',
    emailValidationError: '',
    password: '',
    passwordValidationError: '',
    passwordRepeat: '',
    passwordRepeatValidationError: '',
    registerModalOpened: false,
    userIsRegistered: false
};

const registerFormReducer = (store = initStore, { type, payload }) => {
    switch (type) {
        case aTypes.REGISTER_FORM_OPEN: {
            return { ...store, registerModalOpened: true };
        }

        case aTypes.REGISTER_FORM_CLOSE: {
            return { ...store, ...initStore};
        }

        case aTypes.NAME_FIELD_BLUR: {
            const nameValidation = new Validator();

            nameValidation.validateForm({...payload});

            if (nameValidation.isValid) {
                return {...store, name: payload.value, nameValidationError: ''};
            } else {
                return {...store, name: payload.value, nameValidationError: nameValidation.error};
            }
        }

        case aTypes.EMAIL_FIELD_BLUR: {
            const emailValidation = new Validator();

            emailValidation.validateForm({...payload});

            if (emailValidation.isValid) {
                return {...store, email: payload.value, emailValidationError: ''};
            } else {
                return {...store, email: payload.value, emailValidationError: emailValidation.error};
            }
        }

        case aTypes.PASSWORD_FIELD_BLUR: {
            const passwordValidation = new Validator();

            passwordValidation.validateForm({...payload});

            if (passwordValidation.isValid) {
                return {...store, password: payload.value, passwordValidationError: ''};
            } else {
                return {...store, password: payload.value, passwordValidationError: passwordValidation.error};
            }
        }

        case aTypes.PASSWORD_FIELD_REPEAT_BLUR: {

            if (payload.value === store.password) {
                return {...store, passwordRepeat: payload.value, passwordRepeatValidationError: ''};
            } else {
                return {...store, passwordRepeat: payload.value, passwordRepeatValidationError: 'Пароли не совпадают'};
            }
        }

        case aTypes.CLEAR_NAME_ERROR_MESSAGE: {
            return { ...store, nameValidationError: '' };
        }

        case aTypes.CLEAR_EMAIL_ERROR_MESSAGE: {
            return { ...store, emailValidationError: '' };
        }

        case aTypes.CLEAR_PASSWORD_ERROR_MESSAGE: {
            return { ...store, passwordValidationError: '' };
        }

        case aTypes.CLEAR_PASSWORD_REPEAT_ERROR_MESSAGE: {
            return { ...store, passwordRepeatValidationError: '' };
        }
    }
    return store;
};



export default registerFormReducer;