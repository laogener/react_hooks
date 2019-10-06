import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// import LifeCycle from "./LifeCycle";
// import Antd from './Antd'
// import PureMemo from "./PureDemo";
// import Composition from "./Composition";
// import Hoc from "./HOC/Hoc";
// import Context1 from "./HOC/Context1";
// import Context2 from "./HOC/Context2";
// import Hook from "./Hook/Hook";
// import UseContext from "./Hook/UseContext";
// import UseReducerCom from "./Hook/UseReducerCom";
// import OtherHooks from "./Hook/OtherHooks";
// import CustomHook from "./Hook/CustomHook";

// // Redux
// import FirstRedux from "./Redux/FirstRedux";
// // import store from "./Redux/store";
// // react-redux
// import {Provider} from 'react-redux';
//
// // 抽离
// import {createStore,applyMiddleware} from "redux";
// import logger from 'redux-logger'
// import thunk from "redux-thunk";
// import {firstReducer} from './Redux/count.redux'

import RouterSample from "./Router/RouterSample";

// ReactDOM.render(<App></App>,document.getElementById('root'));
// ReactDOM.render(<LifeCycle></LifeCycle>,document.getElementById('root'));
// ReactDOM.render(<Antd></Antd>,document.getElementById('root'));
// ReactDOM.render(<PureMemo></PureMemo>,document.getElementById('root'));
// ReactDOM.render(<Composition></Composition>,document.getElementById('root'));
// ReactDOM.render(<Hoc title='我是高阶组件体验人员'></Hoc>,document.getElementById('root'));
// ReactDOM.render(<Context2></Context2>,document.getElementById('root'));
// ReactDOM.render(<Hook></Hook>,document.getElementById('root'));
// ReactDOM.render(<UseContext></UseContext>,document.getElementById('root'));
// ReactDOM.render(<UseReducerCom></UseReducerCom>,document.getElementById('root'));
// ReactDOM.render(<OtherHooks></OtherHooks>,document.getElementById('root'));
// ReactDOM.render(<CustomHook></CustomHook>,document.getElementById('root'));

// Redux
// const render = () => {
//     ReactDOM.render(<FirstRedux></FirstRedux>,document.getElementById('root'));
// };
// render();
// store.subscribe(render);

// react-redux

// const store = createStore(firstReducer,applyMiddleware(thunk,logger));
//
// ReactDOM.render(
//     <Provider store={store}>
//         <FirstRedux></FirstRedux>
//     </Provider>
//     ,document.getElementById('root'));

ReactDOM.render(<RouterSample></RouterSample>,document.getElementById('root'));
