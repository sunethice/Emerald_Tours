import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import store from "./store";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import "./css/index.css";
import Customer from "./Customer";
import Admin from "./Admin";
import AirportTransfer from "./AirportTransfer";
import PackageDetails from "./PackageDetails";
import ExploreSriLanka from "./ExploreSriLanka";
import { ToastContainer, toast, Slide } from "react-toastify";

class Index extends Component {
    render() {
        return (
            <Router>
                <ToastContainer
                    position="bottom-right"
                    transition={Slide}
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Route exact path="/" component={Customer}></Route>
                <Route path="/admin" component={Admin}></Route>
                <Route
                    exact
                    path="/explore-srilanka"
                    component={ExploreSriLanka}
                ></Route>
                <Route
                    path="/airport-transfers"
                    component={AirportTransfer}
                ></Route>
                <Route
                    exact
                    path="/package/:packageId"
                    component={PackageDetails}
                ></Route>
            </Router>
        );
    }
}

// const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading="<div>Loading...</div>" persistor={persistor}>
            <Index />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
