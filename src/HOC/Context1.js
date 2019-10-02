import React, {Component} from 'react';

//没使用上下文的时候的写法，每一层走要把最上层传入的组件属性全量传下去

let store = {
    name:'lion',
    from:'China'
};

// function Info(props) {
//     return (
//         <div>
//             <p>姓名：{props.name}</p>
//             <p>来自哪里：{props.from}</p>
//         </div>
//     )
// }
class Info extends Component{
    render() {
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>来自哪里：{this.props.from}</p>
            </div>
        )
    }
}
function ToolBar(props) {
    return (
        <Info {...props}></Info>
    )
}
class Context1 extends Component {
    render() {
        return (
            <div>
                <ToolBar name={store.name} from={store.from}></ToolBar>
            </div>
        );
    }
}

export default Context1;
