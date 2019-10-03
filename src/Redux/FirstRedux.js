import React, {Component} from 'react';
// redux
// import store from "./store";

// react-redux
import {connect} from 'react-redux'

import {add,reduce,asyncAdd} from './count.redux'

// // 返回数据的方法，供我们connect使用，他会帮我们把数据转换成props
// const mapStateToProps = (state) => {
//     return {
//         count:state
//     }
// };
// // 返回dispatch方法的方法，供我们connect使用，他会帮我们把dispatch转换成props
// const mapDispatchToProps = (dispatch) => {
//   return {
//       add:() => dispatch({type:'add'}),
//       reduce:() => dispatch({type:'reduce'})
//   }
// };

// 装饰器写法
@connect(
    // state => {
    //     return {
    //         count:state
    //     }
    // },
    // 这一行代码等价上面的几行代码
    state => ({count:state}),
    // dispatch => ({
    //     add:() => dispatch({type:'add'}),
    //     reduce:() => dispatch({type:'reduce'})
    // }),
    // 因为redux默认只支持同步写法，所以上面返回dispatch的方法可以简写成下面的代码
    // {
    //     add:() => ({type:'add'}),
    //     reduce:() => ({type:'reduce'}),
    //     asyncAdd:() => dispatch => {
    //         setTimeout(() => {
    //             dispatch({type:'add'})
    //         },2000)
    //     }
    // }

    // 抽离后的写法
    {add,reduce,asyncAdd}
)
class FirstRedux extends Component {
    render() {
        return (
            <div>
                <h1>学习Redux,编写一个redux累加器</h1>
                {/*redux写法*/}
                {/*{store.getState()}*/}
                {/*<div>*/}
                {/*    <button onClick={() => store.dispatch({type:'add'})}>+1</button>*/}
                {/*    <button onClick={() => store.dispatch({type:'reduce'})}>-1</button>*/}
                {/*</div>*/}
                {/*react-redux写法*/}
                {this.props.count}
                <div>
                    <button onClick={() => this.props.add()}>+1</button>
                    <button onClick={() => this.props.reduce()}>-1</button>
                    <button onClick={() => this.props.asyncAdd()}>延时+1</button>
                </div>
            </div>
        );
    }
}
// react-redux
// export default connect(mapStateToProps,mapDispatchToProps)(FirstRedux);

// 装饰器写法
export default FirstRedux;
