import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import Content from "./Content";

// Route Views
import Dashboard from "./Dashboard";
// import UserProfile from "./UserProfile";
import Packages from "./AdminPackage/Packages";
import Excursions from "./AdminExcursion/Excursions";
import Bespoke from "./AdminBespoke/Bespoke";
import Transfer from "./AdminTransfer/Transfer";
import ExploreSL from "./AdminExploreSL/ExploreSL";
import Itinerary from "./AdminPackageItinerary/Itinerary";
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
        path: "/excursions",
        exact: true,
        layout: Content,
        component: Excursions
    },
    {
        path: "/itinerary",
        layout: Content,
        component: Itinerary
    },
    {
        path: "/pkg_attractions",
        layout: Content,
        component: Packages
    },
    {
        path: "/bespoke",
        exact: true,
        layout: Content,
        component: Bespoke
    },
    {
        path: "/transfers",
        exact: true,
        layout: Content,
        component: Transfer
    },
    {
        path: "/exploresl",
        exact: true,
        layout: Content,
        component: ExploreSL
    }
    //   {
    //     path: "/admin/our-team",
    //     layout: Content,
    //     component: OutTeam
    //   }
];
