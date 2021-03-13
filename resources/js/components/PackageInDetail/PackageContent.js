import React, { Component } from "react";
// import PhoneCode from 'react-phone-code'; //this is working and dependency is still available in the project
import { CountryDropdown } from "react-country-region-selector";
import axios from "axios";
import notifyService from "../services/notifyService";
import "../../css/PackageContent.css";

class PackageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packageData: {}
        };
    }

    componentDidMount() {
        const { packageData } = this.state;
        axios
            .get("/api/packagewithitinerary/" + this.props.packageId)
            .then(res => {
                if (res.status == 200) {
                    this.setState({ packageData: res.data });
                } else {
                    notifyService.notify(
                        res.data.message,
                        notifyService.Notifications.Failure
                    );
                }
            })
            .catch(error => {
                console.log(error);
                notifyService.notify(
                    error,
                    notifyService.Notifications.Failure
                );
            });
    }

    render() {
        const {
            packageData: { packageEntry }
        } = this.state;
        let selectedPackage = {};
        if (packageEntry !== undefined) {
            selectedPackage = packageEntry[0];
        }
        console.log(selectedPackage);
        return (
            <div>
                <div
                    className="w-100 text-white"
                    style={{ backgroundColor: "#252525" }}
                >
                    <div className="row">
                        <div className="col pkg-meta-wrap">
                            <div className="h2 text-white">
                                {selectedPackage.name}
                            </div>
                            <div className="">
                                <p>
                                    {selectedPackage.no_of_days} Days{" "}
                                    <span>|</span>{" "}
                                    {selectedPackage.no_of_nights} Nights
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col itinerary-wrap">
                            {typeof selectedPackage.itineraries !== "undefined"
                                ? this.renderItineraries()
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderItineraries() {
        const {
            packageData: { packageEntry }
        } = this.state;
        let selectedPackage = {};
        if (packageEntry !== undefined) {
            selectedPackage = packageEntry[0];
        }
        return selectedPackage.itineraries.map(item => (
            <div className="itinerary-item" key={item.itinerary_id}>
                <div className="">
                    <div className="">
                        <h3>{item.description}</h3>
                        <p>{item.features}</p>
                    </div>
                </div>
            </div>
        ));
    }
}

export default PackageContent;
