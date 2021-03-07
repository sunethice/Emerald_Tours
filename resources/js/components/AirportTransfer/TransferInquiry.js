import React, { Component } from "react";
// import PhoneCode from 'react-phone-code'; //this is working and dependency is still available in the project
import { CountryDropdown } from "react-country-region-selector";
import axios from "axios";
import { ToastContainer, Slide } from "react-toastify";
import notifyService from "../services/notifyService";
import "../../css/AirportTransfers.css";

class TransferInquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientname: "",
            email: "",
            country: "",
            phone: "",
            message: ""
            // countryCode: ''
        };
    }

    // }
    // getPhoneNumber(countryCode){
    //     this.setState({ countryCode: countryCode });
    //     console.log("values selected are:", countryCode);

    // }

    onInquireNowClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const { clientname, email, country, phone, message } = this.state;
        axios
            .post("/api/transferinquiry", {
                clientname,
                email,
                country,
                phone,
                message
            })
            .then(res => {
                if (res.status == 200) {
                    console.log(res.data);
                    this.formReset();
                    toast("Bespoke request sent successfully");
                }
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    formReset() {
        this.setState({
            clientname: "",
            email: "",
            country: "",
            phone: "",
            message: ""
        });
    }

    render() {
        const {
            clientname,
            email,
            country,
            phone,
            message
            // countryCode
        } = this.state;
        return (
            <div>
                <div
                    className="w-100 text-white"
                    style={{ backgroundColor: "#252525" }}
                >
                    <div className="row">
                        <div className="col inquire-wrap">
                            <div className="h2 section-title text-white text-center">
                                Inquiry
                            </div>
                            <form>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <input
                                            type="text"
                                            value={clientname}
                                            className="form-control"
                                            placeholder="Name"
                                            onChange={event =>
                                                this.setState({
                                                    clientname:
                                                        event.target.value
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="email"
                                            value={email}
                                            className="form-control"
                                            placeholder="Email"
                                            onChange={event =>
                                                this.setState({
                                                    email: event.target.value
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <CountryDropdown
                                            className="form-control bespokeCountry"
                                            value={country}
                                            onChange={val =>
                                                this.setState({ country: val })
                                            }
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="tel"
                                            value={phone}
                                            className="form-control"
                                            placeholder="Telephone"
                                            onChange={event =>
                                                this.setState({
                                                    phone: event.target.value
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <textarea
                                            id="messageTxt"
                                            value={message}
                                            className="form-control msgTxtArea"
                                            rows="3"
                                            placeholder="Message"
                                            onChange={event =>
                                                this.setState({
                                                    message: event.target.value
                                                })
                                            }
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <button
                                            type="submit"
                                            className="btn btn-warning"
                                            onClick={event => {
                                                this.onInquireNowClick(event);
                                            }}
                                        >
                                            Inquire Now
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TransferInquiry;
