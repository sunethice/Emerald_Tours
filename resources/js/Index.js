import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { configureStore } from "./store";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "./css/index.css";
import Customer from "./Customer";
import Admin from "./Admin";
import Dashboard from "./components/AdminView/Dashboard";
// import UserProfile from "./UserProfile";
import Packages from "./components/AdminView/Packages";

class Index extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Customer}></Route>
                <Route path="/admin" component={Admin}></Route>
                {/* <Route
                    path="/admin"
                    render={({ match: { url } }) => (
                    <Switch>
                        <Route path={`${url}/`} component={Dashboard} exact />
                        <Route exact path={`${url}/home`}>
                            <Dashboard/>
                        </Route>
                        <Route exact path={`${url}/packages`}>
                            <Packages/>
                        </Route>
                    </Switch>
                    )}
                /> */}
            </Router>
        );
    }
}

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading="<div>Loading...</div>" persistor={persistor}>
            <Index />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
