import aTypes from './actionTypes';

export function authOpen() {
    return {
        type: aTypes.AUTH_OPEN,
        payload: '',
    };
}

export function authClose() {
    return {
        type: aTypes.AUTH_CLOSE,
        payload: '',
    };
}

export function formFieldsUpdate(fields) {
    return {
        type: aTypes.FORM_FIELDS_UPDATE,
        payload: fields,
    };
}