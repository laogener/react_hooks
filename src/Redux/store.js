import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";
// 创建第一个reducer
const firstReducer = (state=0,action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'reduce':
            return state - 1;
        default:
            return state
    }
};

// 创建数据仓库，把编写好的reducer传入给createStore
const store = createStore(firstReducer,applyMiddleware(thunk,logger));
export default store;
