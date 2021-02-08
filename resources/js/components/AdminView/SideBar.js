import React, { Component } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

class SideBar extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="pt-5 pb-3">
                    <img
                        className="sidebar-img rounded-circle d-flex mx-auto"
                        src={process.env.MIX_PUBLIC_IMAGE_URL + "TR01.jpg"}
                        href="#d"
                    ></img>
                    <h3 className="text-center py-3">Seneth De Silva</h3>
                </div>

                <ul className="list-unstyled">
                    <li className="px-3">
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className="px-3">
                        <a
                            className="dropdown-toggle menu-collapse p-3"
                            aria-controls="pageSubmenu"
                            aria-expanded={open}
                        >
                            Home
                        </a>

                        {/* <Collapse in={open}> */}
                        <ul id="pageSubmenu" className="list-unstyled">
                            <li>
                                <Link to="/admin/dashboard">About us</Link>
                            </li>
                            <li>
                                <Link to="/admin/dashboard">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/admin/packages">Packages</Link>
                                <ul>
                                    <Link to="/admin/itinerary">Itinerary</Link>
                                    <Link to="/admin/pkg_attractions">
                                        Package attractions
                                    </Link>
                                </ul>
                            </li>
                            <li>
                                <Link to="/admin/bespoke">Bespoke Inquiry</Link>
                            </li>
                            <li>
                                <Link to="/admin/transfers">Transfers</Link>
                            </li>
                            <li>
                                <Link to="/admin/attractions">Itinerary</Link>
                            </li>
                            <li>
                                <Link to="/admin/dashboard">Our Team</Link>
                            </li>
                        </ul>
                        {/* </Collapse> */}
                    </li>
                    <li className="px-3">
                        <Link to="/admin/exploresl">Explore Sri Lanka</Link>
                    </li>
                    <li className="px-3">
                        <a className="" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default SideBar;
