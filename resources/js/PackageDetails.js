import React from "react";
import Header from "./components/ClientView/Header";
import Footer from "./components/ClientView/Footer";
import Showcase from "./components/ClientView/Showcase";
import PackageContent from "./components/PackageInDetail/PackageContent";
import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackage } from "./components/actions/PackageAction";

const PackageDetatils = ({ match, location }) => {
    const {
        params: { packageId }
    } = match; /* used to get a parameter in url passed without the question mark
        ex: emeraldtours.co/packages/1
    */

    return (
        <div className="App">
            <Header></Header>
            <Showcase></Showcase>
            <PackageContent packageId={packageId}></PackageContent>
            <Footer></Footer>
        </div>
    );
};

export default PackageDetatils;
