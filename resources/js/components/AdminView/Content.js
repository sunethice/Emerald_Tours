import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import navIcon from "../../img/hamburger.svg";
import SlidePanelHOC from "../Common/SidePanel";

const ContentWrap = React.forwardRef((props, pRef) => (
    <div id="dashboard_content" ref={pRef} className="content">
        {React.cloneElement(props.children, {
            pRef,
            sliderfunc: props.sliderfunc
        })}
    </div>
));

const Content = ({ children, noNavbar, noFooter }) => {
    const panelHolderRef = useRef(null);
    const [slider, setSlider] = useState(<div></div>);

    const genSlider = (bodyComponent, data, withAction, isPanelOpen) => {
        setSlider(renderSlider(bodyComponent, data, withAction, isPanelOpen));
    };

    const renderSlider = (bodyComponent, data, withAction, isPanelOpen) => {
        const SlidePanel = SlidePanelHOC(bodyComponent, data, withAction);
        return (
            <SlidePanel
                openPanel={isPanelOpen}
                pTitle="Add Transfer"
                pSubTitle="add a new transfer to the list"
            ></SlidePanel>
        );
    };

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
            <ContentWrap
                ref={el => {
                    panelHolderRef.current = el;
                }}
                sliderfunc={genSlider}
            >
                {children}
            </ContentWrap>
            <div>{slider}</div>
        </div>
    );
};

export default Content;
