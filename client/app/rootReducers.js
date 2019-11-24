import authFormReducer from '~/modules/Auth/reducer';
import registerFormReducer from '~/modules/Register/reducer';
import forgotPasswordReducer from '~/modules/ForgotPassword/reducer';
import headerReducer from '~/modules/Header/reducer';

const rootReducers = {
    authFormReducer,
    registerFormReducer,
    forgotPasswordReducer,
    headerReducer,
};

export default rootReducers;