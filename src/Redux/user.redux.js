// 初始化state
const initialState = {
    isLogin:false
};

// reducer
export default (state = initialState, action) => {
    switch (action.type) {

        case 'login':
            return {isLogin:true}
        default:
            return state
    }
}
// 编写redux-saga生成action函数
const login = () => {
    return {type:'login_request'}
};
export {login}
