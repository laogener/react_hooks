// class组件
// import React, {Component} from 'react';
//
// class PropsMemo extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.title}
//             </div>
//         );
//     }
// }
//
// export default PropsMemo;

// 函数式组件
import React from 'react'

// export default function PropsMemo(props) {
//     return (
//         <div> {props.title}</div>
//     )
// }
// 接收参数的解构写法
export default function PropsMemo({title}) {
    return (
        <div> {title}</div>
    )
}
