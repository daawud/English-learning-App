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
    errorRegister: '',
    isLoading: false,
};

const registerFormReducer = (store = initStore, { type, payload }) => {
    switch (type) {
        case aTypes.REGISTER_NAME_FIELD_CHANGE: {
            return {...store, name: payload};
        }

        case aTypes.REGISTER_EMAIL_FIELD_CHANGE: {
            return {...store, email: payload};
        }

        case aTypes.REGISTER_PASSWORD_FIELD_CHANGE: {
            return {...store, password: payload};
        }

        case aTypes.REGISTER_PASSWORD_REPEAT_FIELD_CHANGE: {
            return {...store, passwordRepeat: payload};
        }

        case aTypes.REGISTER_NAME_FIELD_BLUR: {
            const nameValidation = new Validator();

            nameValidation.validateForm({...payload});

            if (nameValidation.isValid) {
                return {...store, name: payload.value, nameValidationError: ''};
            } else {
                return {...store, name: payload.value, nameValidationError: nameValidation.error};
            }
        }

        case aTypes.REGISTER_EMAIL_FIELD_BLUR: {
            const emailValidation = new Validator();

            emailValidation.validateForm({...payload});

            if (emailValidation.isValid) {
                return {...store, email: payload.value, emailValidationError: ''};
            } else {
                return {...store, email: payload.value, emailValidationError: emailValidation.error};
            }
        }

        case aTypes.REGISTER_PASSWORD_FIELD_BLUR: {
            const passwordValidation = new Validator();

            passwordValidation.validateForm({...payload});

            if (passwordValidation.isValid) {
                return {...store, password: payload.value, passwordValidationError: ''};
            } else {
                return {...store, password: payload.value, passwordValidationError: passwordValidation.error};
            }
        }

        case aTypes.REGISTER_PASSWORD_FIELD_REPEAT_BLUR: {

            if (payload.value === store.password) {
                return {...store, passwordRepeat: payload.value, passwordRepeatValidationError: ''};
            } else {
                return {...store, passwordRepeat: payload.value, passwordRepeatValidationError: 'Пароли не совпадают'};
            }
        }

        case aTypes.REGISTER_CLEAR_NAME_ERROR_MESSAGE: {
            return { ...store, nameValidationError: '' };
        }

        case aTypes.REGISTER_CLEAR_EMAIL_ERROR_MESSAGE: {
            return { ...store, emailValidationError: '' };
        }

        case aTypes.REGISTER_CLEAR_PASSWORD_ERROR_MESSAGE: {
            return { ...store, passwordValidationError: '' };
        }

        case aTypes.REGISTER_CLEAR_PASSWORD_REPEAT_ERROR_MESSAGE: {
            return { ...store, passwordRepeatValidationError: '' };
        }

        case aTypes.REGISTER_CLEAR_FIELDS: {
            return {...store, name: '', email: '', password: '', passwordRepeat: ''};
        }

        case aTypes.SEND_REQUEST_FOR_REGISTER_REJECT: {
            return {...store, errorRegister: payload};
        }

        case aTypes.REGISTER_MODAL_LOADING: {
            return {...store, isLoading: true};
        }

        case aTypes.REGISTER_MODAL_LOADING_REJECT: {
            return {...store, isLoading: false};
        }
    }
    return store;
};

export default registerFormReducer;