import aTypes from './actionTypes';

export function authOpen() {
    return {
        type: aTypes.AUTH_MODAL_OPEN,
    };
}

export function authClose() {
    return {
        type: aTypes.AUTH_MODAL_CLOSE,
    };
}

export function formFieldsUpdate(field) {
    switch (field.name) {
        case 'email': {
            return {
                type: aTypes.EMAIL_FIELD_UPDATE,
                payload: field.value,
            };
        }
        case 'password': {
            return {
                type: aTypes.PASSWORD_FIELD_UPDATE,
                payload: field.value,
            };
        }
    }

}

export function fieldValidationErrors(errorsLog) {
    return {
        type: aTypes.FIELDS_VALIDATION_ERRORS,
        payload: errorsLog,
    };
}