import React, {Component} from 'react';
import PropsDemo from "./PropsDemo";
import CondictionLoop from "./CondictionLoop";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg:'constructor内的变量',
            count:0
        }
    }

    // 这里的写法和constructor里面的this.state是一样的
    // state = {
    //     msg:'render外的变量'
    // };
    componentDidMount() {
       // this.setState({
       //     count:this.state.count + 1
       // },() => {
       //     // 通过setState回调函数，获取最新值
       //     console.log(this.state.count,'这里是后输出的，因为setState是异步')
       // })
       //  // 由于setState是异步更新，这里的值还是0
       //  console.log(this.state.count,'这里是先输出的')

        // 如果修改的state是依赖上一次更新的额state，那么可以这样写
        this.setState((prevState,prevProps) => {
            return {
                count: prevState.count + 1
            }
        },() => {
            console.log(this.state.count,'这里是后输出的，因为setState是异步')
        })
        console.log(this.state.count,'这里是先输出的')
    }

    render() {
        const msg = 'render内的变量';
        return (
            <div>
                <p> hello world</p>
                {/*变量渲染*/}
                <p>{msg}</p>
                <p>{this.state.msg}</p>
                <p>{this.state.count}</p>
                {/*组件属性传递 props*/}
                <PropsDemo title='父级传入的数据'></PropsDemo>
                {/*条件渲染和数据循环渲染*/}
                <CondictionLoop title='条件渲染'></CondictionLoop>
            </div>
        );
    }
}

export default App;
