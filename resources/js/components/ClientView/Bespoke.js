import React, { Component } from "react";
// import PhoneCode from 'react-phone-code'; //this is working and dependency is still available in the project
import { CountryDropdown } from "react-country-region-selector";
import axios from "axios";
import "../../css/bespoke.css";

class Bespoke extends Component {
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

    // getPhoneNumber(countryCode){
    //     this.setState({ countryCode: countryCode });
    //     console.log("values selected are:", countryCode);

    // }

    onInquireNowClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const { clientname, email, country, phone, message } = this.state;
        axios.post("/api/bespoke", { clientname, email, country, phone, message })
            .then(res =>{
                console.log(res);
            }).catch(error => {
                console.log(error.response)
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
                    className="mt-5 w-100 text-white"
                    style={{ backgroundColor: "#252525" }}
                >
                    <div className="row no-gutters">
                        <div className="col-12 col-sm-6">
                            <img
                                src={process.env.MIX_PUBLIC_IMAGE_URL + 'bespoke.jpg'}
                                href=""
                                alt="bespoke"
                                style={{ maxWidth: "100%" }}
                            />
                        </div>
                        <div className="col-12 col-sm-6 p-5">
                            <div className="h2 section-title text-white text-center">Bespoke Tours</div>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, curabitur nec lacus
                                pellentesque ut facilisis.
                            </p>
                            <form>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <input
                                            type="text"
                                            value={clientname}
                                            className="form-control"
                                            placeholder="Name"
                                            onChange={event =>
                                                this.setState({ clientname: event.target.value })
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
                                                this.setState({ email: event.target.value })
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
                                        {/* <PhoneCode
                                            onSelect={(code) => {
                                                this.getPhoneNumber(code);
                                            }} // required
                                            // showFirst={['US', 'IN']}
                                            defaultValue={country}
                                            id='bespokeCountryCode'
                                            name='bespokeCountryCode'
                                            value={countryCode}
                                            className='form-control bespokeCountryCode'
                                            // optionClassName='some option class name'
                                        /> */}
                                        <input
                                            type="tel"
                                            value={phone}
                                            className="form-control"
                                            placeholder="Telephone"
                                            onChange={event =>
                                                this.setState({ phone: event.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <textarea
                                            id="messageTxt"
                                            value={message}
                                            className="form-control"
                                            rows="3"
                                            placeholder="Message"
                                            onChange={event =>
                                                this.setState({ message: event.target.value })
                                            }
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <button
                                            type="submit"
                                            className="btn btn-warning"
                                            onClick={(event) => {
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

export default Bespoke;
