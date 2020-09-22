import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './store';
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

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading="<div>Loading...</div>"
            persistor={persistor}>
            <Index/>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
