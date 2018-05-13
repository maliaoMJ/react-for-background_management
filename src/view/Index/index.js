import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import { Home, Order, Category, User, Product} from '../view'
import './index.scss'


class IndexPage extends Component {
    render() {
        return (
            <div className="IndexPage">
                <div className="header">
                    <Header></Header>
                </div>
                <div className="body">
                    <div className="slider">
                        <Slider props={this.props.history} ></Slider>
                    </div>
                    <div className="container">
                        <div className="navgation"><p className="navgationTitle">商品管理</p></div>
                        <div className="box">
                            <Switch>
                                <Route exact path='/index/home' component={Home}></Route>
                                <Route exact path='/index/order' component={Order}></Route>
                                <Route exact path='/index/category' component={Category}></Route>
                                <Route exact path='/index/User' component={User}></Route>
                                <Route exact path='/index/Product' component={Product}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default IndexPage