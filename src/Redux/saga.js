import {call,put,takeEvery} from 'redux-saga/effects'

// 编写模拟登录接口
const api = {
    login(){
        return new Promise((resolve,reject) => {
            // 模拟异步登录
            setTimeout(()=>{
                // 通过一个随机数去判断登录成功或失败
                if(Math.random() > 0.5){
                    resolve({id:1,name:'lion'})
                }else {
                    reject({msg:'用户名或密码错误'})
                }
            },1000)
        },)
    }
};
// 编写真正的工作saga ES6里面的星星函数 Grnerator生成器
function* login(action) {
    try {
        const res = yield call(api.login);
        // put触发action，触发reducer
        yield put({type:'login',res})
    }catch (e) {

        yield put({type:'login_failed',message:e.msg})
    }

}
function* mySaga() {
    // 事件监听，监听action来了就触发一个函数，其实是触发上面的login星星函数

    yield takeEvery('login_request',login)
}
export default mySaga
