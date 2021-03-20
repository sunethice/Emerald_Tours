import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/AdminView/SideBar";
import "./Admin.css";
import routes from "./components/AdminView/routes";

const Admin = ({ match }) => {
    return (
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
};

export default Admin;
