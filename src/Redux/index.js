import {createStore,applyMiddleware,combineReducers} from "redux";
import logger from 'redux-logger'
import {firstReducer as count} from "./count.redux";
import user from './user.redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

// 第一步，创建中间件
const mid = createSagaMiddleware();
// 第二步，应用中间件
const store = createStore(
    combineReducers({count,user}),
    applyMiddleware(mid,logger)
);

// 第三步，执行saga，把监听事件跑起来
mid.run(saga)

export default store
