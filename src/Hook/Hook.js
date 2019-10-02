import React, {useState,useEffect} from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `你点击了${count}次`
        return () => {
            console.log('组件卸载或更新了')
        }
    // },[count]);//仅在count更新时更新

    // },[]);//为[]时,只在初次渲染时执行一次；只有卸载时才执行return
    });
    return (
        <div>
            <p>已点击{count}次</p>
            <button onClick={()=>setCount(count+1)}>按钮</button>
        </div>
    )
}
const Hook = () => {
    const [count, setCount] = useState(10);
    return (
        <div>
            <h1>React Hook学习</h1>
            <p>已点击{count}次</p>
            <button onClick={()=>setCount(count+1)}>点击 + 1</button>
            <button onClick={()=>setCount(count-1)}>点击 - 1</button>
            <p>Effect组件</p>
            {count >= 10 ? <Effect></Effect>:null}

        </div>
    );
};

export default Hook;

