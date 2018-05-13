import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
// 加載视图
import {IndexPage} from './view/view'
import './assets/style/App.scss';

const NoFound = () => {
  return (
    <div>No Found 404</div>
  )
}
const Error = ()=> {
  return (
    <div>error page</div>
  )
}
class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={IndexPage}></Route>
          <Route exact path='/sigin' component={IndexPage}></Route>
          <Route exact path='/error' component={Error}></Route>
          <Route  path='/index' component={IndexPage}></Route>
          <Route component={NoFound}></Route>
        </Switch>

      </div>
    );
  }
}

export default App;
