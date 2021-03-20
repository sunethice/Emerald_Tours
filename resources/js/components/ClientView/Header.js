import React, { Component, useState } from "react";
import navIcon from "../../img/hamburger.svg";
import { Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import SignIn from "../Common/SignIn";
import { Modal, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../css/Header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    modalToggle() {
        this.setState({ show: !this.state.show });
    }
    //
    /*
https://api.instagram.com/oauth/authorize
  ?client_id=3395292697205627
  &redirect_uri=https://emeraldtours.co/
  &scope=user_profile,user_media
  &response_type=code

  https://emeraldtours.co/?code=AQBDdOJJNBYJROolhkEPSrgtCsLYZwYYNVDNxLUletELLWlcepAKOnwFKWX7_FmFAO_NQsiwMhyz4CdIZZ5VoyBOAC-Zx_9NMDM1cFwBjRhOgiwc_GyvQh5PkKOptAkRLcpHfhEm5QVTh3TRt3EdFZNKOIsb7sPA-p1YyPBNJXJEdXHMzeOA-UtGJE8khXn4pOPH7TVEnCt-z2N0bhXuKmRCuE_lFH--lyZclOyYbfdJuw#_


  curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=3395292697205627 \
  -F client_secret=02e19ccb7e085d5a1d441ee11051a99a \
  -F grant_type=authorization_code \
  -F redirect_uri=https://emeraldtours.co/ \
  -F code=AQBDdOJJNBYJROolhkEPSrgtCsLYZwYYNVDNxLUletELLWlcepAKOnwFKWX7_FmFAO_NQsiwMhyz4CdIZZ5VoyBOAC-Zx_9NMDM1cFwBjRhOgiwc_GyvQh5PkKOptAkRLcpHfhEm5QVTh3TRt3EdFZNKOIsb7sPA-p1YyPBNJXJEdXHMzeOA-UtGJE8khXn4pOPH7TVEnCt-z2N0bhXuKmRCuE_lFH--lyZclOyYbfdJuw

  get list of media
  'https://graph.instagram.com/me?fields=media&access_token=IGQVJYbUFpOThYVXRnTzFEQmhQRkFiRWlNMm51VFRtZADhzZADk1UDF3UTJFNmFzM3dJRFlUd1gwZAmxOa2lPaE1FWnVHOG1GbnRIa043b05GZAUh5d3BIZA2xfeXFDODJLeGR1eDVoU2lkNFVFLXhBd01tdV9EcExXWkNSSmdZA

  get media data
  https://graph.instagram.com/17871278756062763?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJYbUFpOThYVXRnTzFEQmhQRkFiRWlNMm51VFRtZADhzZADk1UDF3UTJFNmFzM3dJRFlUd1gwZAmxOa2lPaE1FWnVHOG1GbnRIa043b05GZAUh5d3BIZA2xfeXFDODJLeGR1eDVoU2lkNFVFLXhBd01tdV9EcExXWkNSSmdZA
*/
    render() {
        return (
            <>
                <Navbar
                    className="sticky-top"
                    expand="lg"
                    style={{ backgroundColor: "#012d6b" }}
                >
                    <Navbar.Collapse
                        className="order-1 order-lg-0"
                        id="basic-navbar-nav"
                    >
                        <Nav className="mr-auto">
                            <Nav.Link
                                className="px-3 text-white"
                                href="#Packages"
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                className="px-3 text-white"
                                href=""
                                to="package_wrap"
                                smooth="true"
                                offset={-70}
                                duration={500}
                            >
                                Packages
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                className="px-3 text-white"
                                // href=""
                                to="gallery_wrap"
                                smooth="true"
                                duration={1000}
                            >
                                Gallery
                            </Nav.Link>
                            <Nav.Link
                                className="px-3 text-white"
                                href="https://emeraldtours.co/#Excursions"
                            >
                                Excursions
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className="mx-lg-auto w-75" href="#home">
                        <img
                            className="d-block mx-lg-auto"
                            style={{ width: "30%" }}
                            src={process.env.MIX_PUBLIC_IMAGE_URL + "logo1.png"}
                            href="#"
                            alt="Emerald Tours"
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Collapse className="order-3" id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="px-3 text-white" href="#Blog">
                                Blog
                            </Nav.Link>
                            <Nav.Link
                                className="px-3 text-white text-nowrap"
                                href="/explore-srilanka"
                            >
                                Explore SriLanka
                            </Nav.Link>
                            <Nav.Link
                                className="px-3 text-white"
                                href=""
                                onClick={() => this.modalToggle()}
                            >
                                SignIn
                            </Nav.Link>
                            <Nav.Link className="btn inquire-btn px-3 text-black text-nowrap">
                                Inquire Now
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <img src={navIcon} alt="nav icon" />
                    </Navbar.Toggle>
                </Navbar>
                <Modal
                    className="AuthModal no-gutters"
                    show={this.state.show}
                    onHide={() => this.modalToggle()}
                    centered
                >
                    <Modal.Body className="no-gutters">
                        <Container className="no-gutters">
                            <Row>
                                <Col xs={12} md={6} className="signInColLeft">
                                    <SignIn />
                                </Col>
                                <Col
                                    xs={6}
                                    md={6}
                                    className="signInColRight d-sm-none d-md-block"
                                >
                                    <div
                                        className="closeBtn"
                                        onClick={() => this.modalToggle()}
                                    >
                                        <FontAwesomeIcon
                                            className="closeIcon"
                                            icon={faTimes}
                                        />
                                    </div>
                                    <img
                                        src={
                                            process.env.MIX_PUBLIC_URL +
                                            `/images/SL_img004.jpg`
                                        }
                                        className="signInImg"
                                    ></img>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Header;
