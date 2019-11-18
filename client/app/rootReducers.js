import authFormReducer from '~/Auth/reducer';
import registerFormReducer from '~/Register/reducer';
import forgotPasswordReducer from '~/ForgotPassword/reducer';
import topPageBlockReducer from '~/TopBlockMainPage/reducer';
import headerReducer from '~/Header/reducer';
import tokenErrorReducer from '~/TokenHandler/reducer';

const rootReducers = {
    authFormReducer,
    registerFormReducer,
    forgotPasswordReducer,
    topPageBlockReducer,
    headerReducer,
    tokenErrorReducer,
};

export default rootReducers;