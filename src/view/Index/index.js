import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import { Home, Order, Category, User, Product} from '../view'
import './index.scss'
const NoFound = () => {
    return (
        <div>No Found 404</div>
    )
}

class IndexPage extends Component {
    render() {
        return (
            <div className="IndexPage">
                <div className="header">
                    <Header history={this.props.history}></Header>
                </div>
                <div className="body">
                    <div className="slider">
                        <Slider props={this.props.history} ></Slider>
                    </div>
                    <div className="container">
                        <div className="navgation"><p className="navgationTitle">商品管理</p></div>
                        <div className="box">
                            <Switch>
                                <Route exact path='/index' component={Home}></Route>
                                <Route exact path='/index/home' component={Home}></Route>
                                <Route exact path='/index/order' component={Order}></Route>
                                <Route exact path='/index/category' component={Category}></Route>
                                <Route exact path='/index/User' component={User}></Route>
                                <Route exact path='/index/Product' component={Product}></Route>
                                <Redirect to="/index/home"></Redirect>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount () {
 
    }
}



export default IndexPage