import aTypes from './actionTypes';

export function registerOpen() {
    return {
        type: aTypes.REGISTER_OPEN,
        payload: '',
    };
}

export function registerClose() {
    return {
        type: aTypes.REGISTER_CLOSE,
        payload: '',
    };
}

export function formFieldsUpdate(fields) {
    return {
        type: aTypes.FORM_FIELDS_UPDATE,
        payload: fields,
    };
}