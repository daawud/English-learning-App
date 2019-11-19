import aType from './actionTypes';

const initState = {
  errorAuth: '',
  errorRegister: '',
  errorRestorePass: '',
};

const tokenErrorReducer = (store = initState, {type, payload}) => {
    switch (type) {
        case aType.RECEIVED_ERROR_AUTH: {
            return {...store, errorAuth: payload};
        }

        case aType.RECEIVED_ERROR_REGISTER: {
            return {...store, errorAuth: payload};
        }

        case aType.RECEIVED_ERROR_RESTORE_PASS: {
            return {...store, errorAuth: payload};
        }
    }

    return store;
};

export default tokenErrorReducer;
