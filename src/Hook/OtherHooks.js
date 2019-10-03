import React,{useMemo,useCallback,useRef} from 'react';

const UseRefCom = () => {
    const inputRef = useRef();
    const getValue = () => {
      console.log(inputRef.current.value)
    };
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={getValue}>获取input的值</button>
        </div>
    )
}

const OtherHooks = () => {
    const obj1 = {
        height:180,
        name:'lion',
        age:18
    };
    const obj2 = {
        height:170,
        name:'lily',
        age:19,
        sex:'girl'
    };
    // useMemo和useCallback唯一的不同是返回值不同，useCallback返回的是useCallback整个函数
    // const memoVal = useMemo(() => Object.assign(obj1,obj2),[obj1,obj2]);
    const memoCallback = useCallback(() => Object.assign(obj1,obj2),[obj1,obj2]);

    // console.log(memoVal)
    console.log(memoCallback)
    return (
        <div>
            {/*<p>{memoVal.name}</p>*/}
            <p>{memoCallback().name}</p>
            <UseRefCom></UseRefCom>
        </div>
    );
};

export default OtherHooks;
