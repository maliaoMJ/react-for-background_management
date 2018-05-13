import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
// 加載视图
import {IndexPage, Sigin, NoFound, Error} from './view/view'
import './assets/style/App.scss';


class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={IndexPage}></Route>
          <Route path='/index' component={IndexPage}></Route>
          <Route exact path='/sigin' component={Sigin}></Route>
          <Route exact path='/error' component={Error}></Route>
          <Route component={NoFound}></Route>
        </Switch>

      </div>
    );
  }
}

export default App;
