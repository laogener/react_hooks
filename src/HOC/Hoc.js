import React, {Component} from 'react';

// 高阶组件，传入一个组件，返回一个新的组件
const withLearnReact = (Com) => {
    const NewComponent = (props) => {
        // {...props}继承传入的状态
        return <Com {...props} name='hello world'></Com>
    };
    return NewComponent
}
class Hoc extends Component {
    render() {
        return (
            <div>
                <h1>高阶组件的写法</h1>
                {this.props.title}
                <p>内容：{this.props.name}</p>
            </div>
        );
    }
}

export default withLearnReact(Hoc);
