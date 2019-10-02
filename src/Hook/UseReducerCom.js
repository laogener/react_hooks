import React,{useReducer} from 'react';

const initState = {count:0};
const reducer = (state,action) => {
    switch (action.type) {
        case 'reset':
            return initState;
        case 'add':
            return {count: state.count+1};
        case 'reduce':
            return {count: state.count-1};
        default:
            return state
    }
};
const UseReducerCom = () => {
    const [state,dispatch] = useReducer(reducer,initState);
    return (
        <div>
            <h1>useReducer</h1>
            <p>当前数量：{state.count}</p>
            <p>
                <button onClick={() => dispatch({type:'reset'})}>重置</button>
                <button onClick={() => dispatch({type:'add'})}>数量+1</button>
                <button onClick={() => dispatch({type:'reduce'})}>数量-1</button>
            </p>
        </div>
    );
};

export default UseReducerCom;
