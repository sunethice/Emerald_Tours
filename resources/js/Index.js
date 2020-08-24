import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import './css/index.css';
import Customer from './Customer';
import Admin from './Admin';

class Index extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Customer}></Route>
        <Route exact path="/admin" component={Admin}></Route>
      </Router>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('root'));