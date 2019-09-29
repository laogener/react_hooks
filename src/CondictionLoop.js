import React, {Component} from 'react';

class CondictionLoop extends Component {
    constructor(props){
        super(props);
        this.state = {
            showTitle:true,
            fruits:[
                {name:'香蕉',price:10},
                {name:'苹果',price:20},
                {name:'橘子',price:30},
                {name:'梅子',price:40},
                {name:'火龙果',price:50},
            ]
        }
        // setTimeout(() => {
        //     this.setState({
        //         showTitle:false
        //     })
        // },3000)
        // 事件绑定，改变this指向的第一种方法
        // this.hideTitle = this.hideTitle.bind(this)
    }
    // 事件绑定，第一种和第三种方法
    hideTitle(){
        this.setState({
            showTitle:false
        })
    }
    // 事件绑定，第二种方法,利用箭头函数改变this指向
    // hideTitle = () => {
    //     this.setState({
    //         showTitle:false
    //     })
    // }
    render() {
        // 条件渲染的第二种写法
        // let result = this.state.showTitle ? <h2>{this.props.title}</h2> : null;
        // 条件渲染的第三种写法
        let result
        if(this.state.showTitle){
            result = (<h2>{this.props.title}</h2>)
        }else {
            result = null
        }
        return (
            <div>
                <h1>条件渲染和数据循环渲染</h1>
                {/*事件绑定，第一种*/}
                {/*<button onClick={this.hideTitle}>不显示title</button>*/}
                {/*事件绑定，第三种*/}
                <button onClick={() => this.hideTitle()}>不显示title</button>
                {/*条件渲染的第一种写法*/}
                {/*{this.state.showTitle ? <h2>{this.props.title}</h2> : null}*/}
                {/*条件渲染的第二种写法*/}
                {result}
                {/*数据循环渲染*/}
                <ul>
                    {
                        this.state.fruits.map((fruit,index) => {
                            return <li key={index}>
                                水果名称：{fruit.name}  价格：{fruit.price}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CondictionLoop;
