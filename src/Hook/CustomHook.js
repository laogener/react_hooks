import React,{useEffect} from 'react';

const useChangeTitle = (title) => {
    useEffect(() => {
        document.title = title;
    },[title])
};
const CustomHook = () => {
    useChangeTitle('自定义修改标题的Hook')
    return (
        <div>
            测试自定义修改标题的Hook
        </div>
    );
};

export default CustomHook;
