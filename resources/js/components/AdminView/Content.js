import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import navIcon from "../../img/hamburger.svg";

const Content = ({ children, noNavbar, noFooter }) => {
    const panelRef = React.createRef();
    return (
        <div className="contentWrap">
            <div>
                <Navbar className="sticky-top-admin navBar" expand="lg">
                    <Navbar.Collapse className="order-3" id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="px-3" href="#Blog">
                                Blog
                            </Nav.Link>
                            <Nav.Link
                                className="px-3 text-nowrap"
                                href="/explore-srilanka"
                            >
                                Explore SriLanka
                            </Nav.Link>
                            <Nav.Link
                                className="px-3"
                                href=""
                                onClick={() => this.modalToggle()}
                            >
                                SignIn
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <img src={navIcon} alt="nav icon" />
                    </Navbar.Toggle>
                </Navbar>
            </div>
            <div id="dashboard_content" className="content">
                {children}
            </div>
        </div>
    );
};

export default Content;
