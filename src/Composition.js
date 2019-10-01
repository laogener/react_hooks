import React from 'react';

function Dialog(props) {
    return (
        <div style={{border:`2px solid ${props.color}`}}>
            {/*相当于Vue框架里面的匿名插槽*/}
            {props.children}
            {/*相当于Vue里面的具名插槽*/}
            {props.btn}
        </div>
    )
}

const Composition = () => {
    const confimBtn = (
        <button onClick={() => alert('hello world')}>确认</button>
    )
    return (
        <div>
            <h1>组件复合的写法</h1>
            <Dialog color='green' btn={confimBtn}>
                <h2>你好</h2>
                <p>React学习</p>
            </Dialog>
        </div>
    );
};

export default Composition;
