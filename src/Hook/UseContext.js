import React,{useContext} from 'react';
import ContextChild from './ContextChild'
// 第三种方法
import {lili} from './store'
// 第一种方法
// const Context = React.createContext({
//     name:'lion',
//     age:18
// });
// 第二种方法
export const  Context = React.createContext({
    name:'lion',
    age:18
});

const UseContext = () => {
    // const ctx = useContext(Context);
    const ctx = useContext(Context);
    const ctx2 = useContext(lili);

    return (
        <div>
            <h1>useContext</h1>
            <p>姓名：{ctx.name}</p>
            <p>年龄：{ctx.age}</p>
            <p>使用子组件</p>
            {/*// 第一种方法*/}
            {/*<ContextChild Context={Context}></ContextChild>*/}
            {/*第二种方法*/}
            <ContextChild></ContextChild>
            <p>全局store</p>
            <p>姓名：{ctx2.name}</p>
            <p>年龄：{ctx2.age}</p>
        </div>
    );
};

export default UseContext;
