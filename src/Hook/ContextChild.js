import React,{useContext} from 'react';
// 第二种方法
import {Context} from './UseContext'
import {lili} from './store'
// const ContextChild = ({Context}) => {
// 第二种方法
const ContextChild = () => {
    const ctx = useContext(Context);
    const ctx2 = useContext(lili)
    return (
        <div>
            <p>姓名：{ctx.name}</p>
            <p>年龄：{ctx.age}</p>
            <p>姓名：{ctx2.name}</p>
            <p>年龄：{ctx2.age}</p>
        </div>
);
};

export default ContextChild;
