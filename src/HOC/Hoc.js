import React, {Component} from 'react';

// 第一个高阶组件，传入一个组件，返回一个新的组件，（返回函数组件）
const withLearnReact = (Com) => {
    const NewComponent = (props) => {
        // {...props}继承传入的状态
        return <Com {...props} name='hello world'></Com>
    };
    return NewComponent
}
// 第二个高阶组件，重写生命周期，重写生命周期需要class组件，（返回class组件）
const withLifeCycle = (Com) => {
    class NewComponent extends Component {
        componentDidMount() {
            console.log('重写componentDidMount生命周期')
        }

        render() {
            return <Com {...this.props}></Com>
        }
    }
    return NewComponent
};
// @withLearnReact
// @withLifeCycle
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

// export default withLifeCycle(withLearnReact(Hoc));
// 高阶组件装饰器写法
export default Hoc;
