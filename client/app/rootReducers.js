import authFormReducer from '~/Auth/reducer';
import registerFormReducer from '~/Register/reducer';
import forgotPasswordReducer from '~/ForgotPassword/reducer';
import learningMaterialReducer from '~/LearningMaterialOptions/reducer';

const rootReducers = {
    authFormReducer,
    registerFormReducer,
    forgotPasswordReducer,
    learningMaterialReducer,
};

export default rootReducers;