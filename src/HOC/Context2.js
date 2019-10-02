import React, {Component} from 'react';

// 使用上下文context
let store = {
    name:'lion',
    from:'China'
};
const XdContext = React.createContext();
const {Provider, Consumer} = XdContext;
class Info extends Component{
    render() {
        return (
            <Consumer>
                {
                    store => {
                        return (
                            <div>
                                <p>姓名：{store.name}</p>
                                <p>来自哪里：{store.from}</p>
                            </div>
                        )
                    }
                }
            </Consumer>

        )
    }
}
function ToolBar(props) {
    return (
        <Info {...props}></Info>
    )
}
class Context2 extends Component {
    render() {
        return (
            <div>
                <Provider value={store}>
                    <ToolBar></ToolBar>
                </Provider>
            </div>
        );
    }
}

export default Context2;
