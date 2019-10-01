import React, {Component} from 'react';

class LifeCycleSon extends Component {
    constructor(props){
        super(props);
        console.log('1.构造函数')
    }
    componentWillMount() {
        console.log('2.组件将要挂载')
    }
    componentDidMount() {
        // 可以进行api调用,可以进行dom操作，可以对我们的状态进行操作
        console.log('4.组件已挂载')
    }
    componentWillReceiveProps(nextProps, nextContext) {
        // 父组件传递的属性有变化，我们可以在这里做相应的响应操作
        console.log('5.父组件传递的数据更新了')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 组件是否需要更新，需要返回一个Boolean
        console.log('6.组件是否需要更新，需要返回一个布尔值')
        return true
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('7.组件将要更新')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('8.组件已更新')
    }
    componentWillUnmount() {
        console.log('9.组件已销毁')
    }

    render() {
        console.log('3.组件渲染')
        return (
            <div>
                组件生命周期的演示
            </div>
        );
    }
}

class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            son:'我是生命周期',
            showSon:true
        }
        setTimeout(() => {
            this.setState({
                son:'更新'
            })
        },2000)
        setTimeout(() => {
            this.setState({
                showSon:false
            })
        },4000)
    }
    render() {
        return (
            <div>
                {this.state.showSon ? <LifeCycleSon title={this.state.son}></LifeCycleSon> : <div>组件已销毁</div>}

            </div>
        );
    }
}

export default LifeCycle;
