import React, {Component,PureComponent} from 'react';

// 可以使用PureComponent去代替我们的生命周期
// class Title extends PureComponent {
// // class Title extends Component {
// //     shouldComponentUpdate(nextProps, nextState, nextContext) {
// //         return nextProps.title !== this.props.title
// //     }
//
//     render() {
//         console.log('我是Title组件')
//         return (
//             <div>
//                 标题：{this.props.title}
//             </div>
//         );
//     }
// }

// 使用React.memo代替以上的Title组件，让函数式组件也拥有PureComponent的功能
    const Title = React.memo((props) => {
        console.log('我是Title组件')
        return (
            <div>
                标题：{props.title}
            </div>
        );
    })


class Count extends Component {
    render() {
        console.log('我是Count组件')
        return (
            <div>
               条数：{this.props.count}
            </div>
        );
    }
}

class PureMemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'React学习',
            count:0
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                count:this.state.count + 1
            })
        },1000)
    }

    render() {
        return (
            <div>
                <Title title={this.state.title}></Title>
                <Count count={this.state.count}></Count>
            </div>
        );
    }
}

export default PureMemo;
