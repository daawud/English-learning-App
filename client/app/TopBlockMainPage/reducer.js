import aTypes from './actionTypes';

const initStore = {
    mainTopBlockShow: false,
    materialOptionsBlockShow: false,
    testOptionsBlockShow: false,
};

const topPageBlockReducer = (store = initStore, {type, payload}) => {
    switch (type) {
        case aTypes.MAIN_BLOCK_SHOW: {
            return {...initStore, mainTopBlockShow: true};
        }
        case aTypes.MATERIAL_OPTIONS_BLOCK_SHOW: {
            return {...initStore, materialOptionsBlockShow: true};
        }
        case aTypes.TEST_OPTIONS_BLOCK_SHOW: {
            return {...initStore, testOptionsBlockShow: true};
        }
    }
    return store;
};

export default topPageBlockReducer;