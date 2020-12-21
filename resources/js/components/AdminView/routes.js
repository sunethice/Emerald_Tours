import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import Content from "./Content";

// Route Views
import Dashboard from "./Dashboard";
// import UserProfile from "./UserProfile";
import Packages from "./Packages";
import Transfer from "./Transfer";
import ExploreSL from "./ExploreSL";
// import Error from "./Error";

export default [
    {
        path: "",
        exact: true,
        layout: Content,
        component: () => <Redirect to="/admin/dashboard" />
    },
    {
        path: "/dashboard",
        exact: true,
        layout: Content,
        component: Dashboard
    },
    // {
    //   path: "/admin/user-profile",
    //   layout: Content,
    //   component: UserProfile
    // },
    {
        path: "/packages",
        exact: true,
        layout: Content,
        component: Packages
    },
    {
        path: "/transfers",
        exact: true,
        layout: Content,
        component: Transfer
    },
    {
        path: "/exploresl",
        layout: Content,
        component: ExploreSL
    }
    //   {
    //     path: "/admin/our-team",
    //     layout: Content,
    //     component: OutTeam
    //   }
];
