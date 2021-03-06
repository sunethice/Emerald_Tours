import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/PackageAdmin.css";

class BespokeActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Inquiry_client_name: this.props.data
                ? this.props.data.clientname
                : null,
            Inquiry_email: this.props.data ? this.props.data.email : null,
            Inquiry_country: this.props.data ? this.props.data.country : null,
            Inquiry_phone: this.props.data ? this.props.data.phone : null,
            Inquiry_message: this.props.data ? this.props.data.message : null,
            Inquiry_date: this.props.data
                ? new Date(this.props.data.created_at).toLocaleDateString()
                : null,
            action: this.props.action
        };
    }

    render() {
        const {
            Inquiry_client_name,
            Inquiry_email,
            Inquiry_country,
            Inquiry_phone,
            Inquiry_message,
            Inquiry_date
            // action
        } = this.state;
        return (
            <>
                <div>
                    <div>
                        <form>
                            <div className="form-row mb-3">
                                <div className="col-md-4">
                                    <label className="">Client Name</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="">
                                        {Inquiry_client_name}
                                    </label>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-4">
                                    <label className="">Email</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="">{Inquiry_email}</label>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-4">
                                    <label className="">Country</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="">
                                        {Inquiry_country}
                                    </label>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-4">
                                    <label className="">Phone</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="">{Inquiry_phone}</label>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-4">
                                    <label className="">Message</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="">
                                        {Inquiry_message}
                                    </label>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-4">
                                    <label className="">Date</label>
                                </div>
                                <div className="col-md-8">
                                    <label className="">{Inquiry_date}</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default BespokeActions;
