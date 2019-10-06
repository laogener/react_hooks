import React, {Component} from 'react';
import {BrowserRouter,Link,Route,Switch,Redirect} from "react-router-dom";

function App() {
    return (
        <div>
            {/*编写路由导航*/}
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/classes'>课程</Link></li>
                <li><Link to='/mine'>我的</Link></li>
                <li><Link to='/asdas'>没有的组件</Link></li>
            </ul>
            {/*路由配置*/}
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/classes' component={Classes}></Route>
                <Route path='/login' component={Login}></Route>
                {/*<Route path='/mine' component={Mine}></Route>*/}
                <RouteGuard></RouteGuard>

                <Route path='/detail/:course' component={Detail}></Route>
                {/*配置404组件*/}
                <Route  component={Notfound}></Route>
            </Switch>


        </div>
    )
}

// 编写路由守卫组件进行权限控制
class RouteGuard extends Component{

    render() {
        return (
            <Route render={props => {
                return auth.islogin ? <Route path='/mine' component={Mine}></Route> : (<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}></Redirect>)
            }}></Route>
        )

    }
}
// 模拟接口
const auth = {
    islogin:false,
    login(callback){
     this.islogin = true;
     setTimeout(callback,1000)
    }
}
class Login extends Component {
    state = {
        isLogin:false
    };
    login = () => {
        auth.login(() => {
            this.setState({isLogin : true})
        })
    }
    render() {
        const from = this.props.location.state && this.props.location.state.from || '/';
        if(this.state.isLogin){
            return <Redirect to={from}></Redirect>
        }
        return (
            <div>
                <p>请先登录</p>
                <button onClick={() => this.login()}>登录</button>
            </div>
        )
    }


}

function Detail({match,location,history}) {
    // console.log(props)
    return (
        <div>
            我是{match.params.course}课程的详情页
            <button onClick={() => history.push({pathname:'/',state:{foo:'bar'}})}>返回</button>
        </div>
    )
}
function Home({location}) {
    return (
        <div>
            首页组件
            {location.state && location.state.foo ? <p>从详情页带回来的参数{location.state.foo}</p> : null}
        </div>
    )
}
function Classes() {
    return (
        <div>
            课程组件
            <ul>
                <li><Link to='/detail/react'>react</Link></li>
                <li><Link to='/detail/vue'>vue</Link></li>
            </ul>
        </div>
    )
}
function Mine() {
    return (
        <div>
            <h2>个人中心</h2>
            <ul>
                <li><Link to='/mine/userinfo'>个人信息</Link></li>
                <li><Link to='/mine/order'>客户订单</Link></li>
            </ul>
            <Switch>
                <Route path='/mine/userinfo' component={() => {return (<div>个人信息</div>)}}></Route>
                <Route path='/mine/order' component={() => {return (<div>客户订单</div>)}}></Route>
                {/*路由重定向：当进入个人中心是没有命中我们的路由配置的时候就显示重定向路由的内容*/}
                <Redirect to='/mine/order'></Redirect>
            </Switch>
        </div>
    )
}
function Notfound() {
    return (
        <div>404组件</div>
    )
}

const RouterSample = () => {
    return (
        <div>
            <h1>演示react-router4.x版本的使用</h1>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </div>
    );
};

export default RouterSample;
