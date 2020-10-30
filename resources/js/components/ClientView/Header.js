import React, { Component, useState } from "react";
import logo from "../../img/logo1.png";
import navIcon from "../../img/hamburger.svg";
import SL_img004 from '../../img/SL_img004.jpg';
import { Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import SignIn from "../Common/SignIn";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../css/Header.css';


class Header extends Component {

    constructor() {
        super();
		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
    }

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
                                href="#"
                                to="gallery_wrap"
                                smooth="true"
                                duration={1000}
                            >
                                Gallery
                            </Nav.Link>
                            <Nav.Link
                                className="px-3 text-white"
                                href="#Excursions"
                            >
                                Excursions
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className="mx-lg-auto w-75" href="#home">
                        <img
                            className="d-block mx-lg-auto"
                            style={{ width: "30%" }}
                            src={logo}
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
                                href="#Explore"
                            >
                                Explore SriLanka
                            </Nav.Link>
                            <Nav.Link className="px-3 text-white" href="" onClick={() => this.handleShow()}>
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
                <Modal className="AuthModal no-gutters" show={this.state.show} onHide={() => this.handleClose()} centered>
					{/* <Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header> */}
					<Modal.Body className="no-gutters">
                        <Container className="no-gutters">
                            <Row>
                                <Col xs={12} md={6} className="signInColLeft">
                                    <div className="ModalHeading text-center">Welcome to Emerald Tours</div>
                                    <form>
                                        <div className="form-row mb-3">
                                            <div className="col">
                                                <input type="email" className="form-control signinEntry" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-row mb-3">
                                            <div className="col">
                                                <input type="password" className="form-control signinEntry" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div className="form-row mb-3">
                                            <div className="col text-left">
                                                <input type="checkbox" className="form-control chkKeepSigned"/>
                                                <a href="" className="forgotPass">Keep me signed in</a>
                                            </div>
                                            <div className="col text-right">
                                                <a href="" className="forgotPass">Forgot password?</a>
                                            </div>
                                        </div>
                                        <div className="form-row mb-3 text-center">
                                            <div className="col">
                                                <button type="submit" className="btn btn-warning btn-signin">Sign in</button>
                                            </div>
                                        </div>
                                        <div className="form-row mb-3">
                                            <div className="col text-center signUpWrap">
                                                Don't have an account?&nbsp;<a href="" className="signUp">Sign Up</a>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="horizontalLine">&nbsp;or&nbsp;</div>
                                    <Row className="mb-3 text-center">
                                        <Col xs={12} md={6}>
                                            <button type="submit" className="btn btn-warning btn-signin">Sign in with facebook</button>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <button type="submit" className="btn btn-warning btn-signin">Sign in with google</button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={6} md={6} className="signInColRight d-sm-none d-md-block">
                                    <div className="closeBtn">
                                        <FontAwesomeIcon class="closeIcon" icon={faTimes} />
                                    </div>
                                    <img src={ process.env.MIX_PUBLIC_URL + `/images/SL_img004.jpg`} className="signInImg"></img>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
					{/* <Modal.Footer>
						<Button variant="secondary" onClick={() => this.handleClose()}>
							Close
                        </Button>
						<Button variant="primary" onClick={() => this.handleClose()}>
							Save Changes
                        </Button>
					</Modal.Footer> */}
				</Modal>
            </>
        );
    }
}

export default Header;
