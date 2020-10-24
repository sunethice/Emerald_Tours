import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import SideBar from "./components/AdminView/SideBar";
import Content from "./components/AdminView/Content";
import Header from "./components/ClientView/Header";
import "./Admin.css";
import routes from "./components/AdminView/routes";

import Dashboard from "./components/AdminView/Dashboard";
import Packages from "./components/AdminView/Packages";

function handleClick() {
    alert("handleClick");
    // $('#sidebar').toggleClass('active');
    // $(this).toggleClass('active');
}

const Admin = ({ match }) => (
    <div className="wrapper">
        <SideBar></SideBar>
        <Switch>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={`${match.url}${route.path}`}
                        path={`${match.url}${route.path}`}
                        exact
                    >
                        <route.layout>
                            <route.component />
                        </route.layout>
                    </Route>
                );
            })}
        </Switch>
    </div>
);

export default Admin;
