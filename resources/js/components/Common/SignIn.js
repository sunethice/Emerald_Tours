import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import '../../css/SignIn.css';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            signup: false,
            signin: {
                email: "",
                password: ""
            }//,
            // signup: {
            //     name: "",
            //     email: "",
            //     password: "",
            //     confirmation_password: ""
            // }
        };
    }

    render() {
        const { signup, signin } = this.state;
        return (
            <>
                <div className="ModalHeading text-center">
                    Welcome to Emerald Tours
                </div>
                <div style={{display:signup?'none':'block'}}>
                    <form>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="email"
                                    value={signin.email}
                                    className="form-control signinEntry"
                                    placeholder="Email"
                                    onChange={event =>
                                        this.setState({ signin: {email: event.target.value} })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="password"
                                    className="form-control signinEntry"
                                    placeholder="Password"
                                    value={signin.password}
                                    onChange={event =>
                                        this.setState({ signin: {password: event.target.value} })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col text-left">
                                <input
                                    type="checkbox"
                                    className="form-control chkKeepSigned"
                                />
                                <a href="" className="forgotPass">
                                    Keep me signed in
                                </a>
                            </div>
                            <div className="col text-right">
                                <a href="" className="forgotPass">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="form-row mb-3 text-center">
                            <div className="col">
                                <button
                                    type="submit"
                                    className="btn btn-auth btn-warning btn-signin"
                                    onClick={()=>{
                                        console.log(this.state);
                                    }}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col text-center signUpWrap">
                                Don't have an account?&nbsp;
                                <a href="" className="signUp">
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </form>
                    <div className="horizontalLine">&nbsp;Or sign in with&nbsp;</div>
                    <Row className="mb-3 text-center">
                        <Col xs={12} md={6}>
                            <button type="button" className="btn btn-auth btn-labeled btn-facebook">
                                <span className="btn-label">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </span>
                                <span className="btn-text">Facebook</span>
                            </button>
                        </Col>
                        <Col xs={12} md={6}>
                            <button type="button" className="btn btn-auth btn-labeled btn-google">
                                <span className="btn-label btn-label-google">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </span>
                                <span className="btn-text">Google</span>
                            </button>
                        </Col>
                    </Row>
                </div>
                <div style={{display:signup?'block':'none'}}>
                    <form>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="text"
                                    // value={signin.email}
                                    className="form-control signinEntry"
                                    placeholder="First Name"
                                    // onChange={event =>
                                    //     this.setState({ signin: {email: event.target.value} })
                                    // }
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    // value={signin.email}
                                    className="form-control signinEntry"
                                    placeholder="Last Name"
                                    // onChange={event =>
                                    //     this.setState({ signin: {email: event.target.value} })
                                    // }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="email"
                                    value={signin.email}
                                    className="form-control signinEntry"
                                    placeholder="Email"
                                    onChange={event =>
                                        this.setState({ signin: {email: event.target.value} })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="password"
                                    className="form-control signinEntry"
                                    placeholder="Password"
                                    // value={signin.password}
                                    // onChange={event =>
                                    //     this.setState({ signin: {password: event.target.value} })
                                    // }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="password"
                                    className="form-control signinEntry"
                                    placeholder="Confirm Password"
                                    // value={signin.password}
                                    // onChange={event =>
                                    //     this.setState({ signin: {password: event.target.value} })
                                    // }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3 text-center">
                            <div className="col">
                                <button
                                    type="submit"
                                    className="btn btn-auth btn-warning btn-signin"
                                    onClick={()=>{
                                        console.log(this.state);
                                    }}
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col text-center signUpWrap">
                                Have an account?&nbsp;
                                <a href="" className="signUp">
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default SignIn;
