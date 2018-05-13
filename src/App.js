import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import './assets/style/App.scss';

const Home = ()=>{
  return (
    <div>Home page</div>
  )
}
const Index = () => {
  return ( <div> Index page </div>)
}
const User = () => {
  return ( <div> User page </div>
  )
}
const Detail = ({match}) => {
  return (
    <div>detail id is {match.params.id}</div>
  )
}
const NoFound = () => {
  return (
    <div>No Found 404</div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header></Header>
        </div>
        <div className="body">
            <div className="slider">
              <Slider></Slider>
            </div>
            <div className="container">
              <div className="navgation"><p calssName="navgationTitle">商品管理</p></div>
              <div className="box">
              <Router>
                <Switch>
                  <Route exact path='/' component={Index}></Route>
                  <Route exact path='/home' component={Home}></Route>
                  <Route exact path='/user' component={User}></Route>
                  <Route exact path='/detail/:id' component={Detail}></Route>
                  <Route component={NoFound}></Route>
                </Switch>
              </Router>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
