import authFormReducer from '~/Auth/reducer';
import registerFormReducer from '~/Register/reducer';
import forgotPasswordReducer from '~/ForgotPassword/reducer';
import topPageBlockReducer from '~/TopBlockMainPage/reducer';
import headerReducer from '~/Header/reducer';

const rootReducers = {
    authFormReducer,
    registerFormReducer,
    forgotPasswordReducer,
    topPageBlockReducer,
    headerReducer,
};

export default rootReducers;