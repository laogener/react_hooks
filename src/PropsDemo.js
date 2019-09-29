// class组件
// import React, {Component} from 'react';
//
// class PropsDemo extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.title}
//             </div>
//         );
//     }
// }
//
// export default PropsDemo;

// 函数式组件
import React from 'react'

// export default function PropsDemo(props) {
//     return (
//         <div> {props.title}</div>
//     )
// }
// 接收参数的解构写法
export default function PropsDemo({title}) {
    return (
        <div> {title}</div>
    )
}
