import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Switch from "react-switch";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import "../../css/SignIn.css";
import { connect } from "react-redux";
import { signIn, signUp } from "../actions/AuthAction";

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            register: false,
            signin: {
                email: "shone@emeraldtours.co",
                password: "abcd1234"
            },
            checked: false,
            signup: {
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmation_password: ""
            }
        };
        this.onLoginAsAdminChange = this.onLoginAsAdminChange.bind(this);
    }

    onLoginAsAdminChange(checked) {
        this.setState({ checked });
    }

    onSigninClick() {
        console.log("onSign success");
        const { signin, checked } = this.state;
        this.props.signin(checked, signin);
    }

    onSignupClick() {
        const { signup } = this.state;
        this.props.signup(signup);
    }

    render() {
        const { register, signup, signin } = this.state;
        console.log();
        return (
            <>
                <div className="ModalHeading text-center">
                    Welcome to Emerald Tours
                </div>
                <div style={{ display: register ? "none" : "block" }}>
                    <form>
                        <div className="form-row mb-3">
                            <div className="col text-left">
                                <div className="forgotPass">Login as admin</div>
                            </div>
                            <div className="col text-right">
                                <Switch
                                    onColor="#ffba00"
                                    height={21}
                                    width={48}
                                    onChange={this.onLoginAsAdminChange}
                                    checked={this.state.checked}
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
                                        this.setState({
                                            signin: {
                                                email: event.target.value
                                            }
                                        })
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
                                        this.setState({
                                            signin: {
                                                password: event.target.value
                                            }
                                        })
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
                                    type="button"
                                    className="btn btn-auth btn-warning btn-signin"
                                    onClick={() => {
                                        this.onSigninClick();
                                    }}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col text-center signUpWrap">
                                Don't have an account?&nbsp;
                                <a
                                    href="#"
                                    className="signUp"
                                    onClick={() => {
                                        this.setState({
                                            signup: true
                                        });
                                    }}
                                >
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </form>
                    <div className="horizontalLine">
                        &nbsp;Or sign in with&nbsp;
                    </div>
                    <Row className="mb-3 text-center">
                        <Col xs={12} md={6}>
                            <button
                                type="button"
                                className="btn btn-auth btn-labeled btn-facebook"
                            >
                                <span className="btn-label">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </span>
                                <span className="btn-text">Facebook</span>
                            </button>
                        </Col>
                        <Col xs={12} md={6}>
                            <button
                                type="button"
                                className="btn btn-auth btn-labeled btn-google"
                            >
                                <span className="btn-label btn-label-google">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </span>
                                <span className="btn-text">Google</span>
                            </button>
                        </Col>
                    </Row>
                </div>
                <div style={{ display: register ? "block" : "none" }}>
                    <form>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="text"
                                    value={signup.firstname}
                                    className="form-control signinEntry"
                                    placeholder="First Name"
                                    onChange={event =>
                                        this.setState({
                                            signup: {
                                                firstname: event.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    value={signup.lastname}
                                    className="form-control signinEntry"
                                    placeholder="Last Name"
                                    onChange={event =>
                                        this.setState({
                                            signup: {
                                                lastname: event.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="email"
                                    value={signup.email}
                                    className="form-control signinEntry"
                                    placeholder="Email"
                                    onChange={event =>
                                        this.setState({
                                            signup: {
                                                email: event.target.value
                                            }
                                        })
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
                                    value={signup.password}
                                    onChange={event =>
                                        this.setState({
                                            signup: {
                                                password: event.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <input
                                    type="password"
                                    className="form-control signinEntry"
                                    placeholder="Confirm Password"
                                    value={signup.confirmation_password}
                                    onChange={event =>
                                        this.setState({
                                            signup: {
                                                confirmation_password:
                                                    event.target.value
                                            }
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-row mb-3 text-center">
                            <div className="col">
                                <button
                                    type="submit"
                                    className="btn btn-auth btn-warning btn-signin"
                                    onClick={() => {
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
                                <a
                                    href="#"
                                    className="signUp"
                                    onClick={() => {
                                        this.setState({
                                            signup: false
                                        });
                                    }}
                                >
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

const mapStateToProps = State => {
    const { AuthReducer } = State;
    const { user } = AuthReducer;
    return { user };
};

const mapDispatchToProps = dispatch => ({
    signin: (isAdmin, credentials) => {
        console.log("dispacth signin");
        dispatch(signIn(isAdmin, credentials));
    },
    signup: registerInfo => dispatch(signUp(registerInfo))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
