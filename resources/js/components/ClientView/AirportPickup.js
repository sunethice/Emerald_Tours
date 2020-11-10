import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import airportpickup_img from "../../img/airport_pickup.jpg";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/AirportPickup.css";

class AirportPickup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickupDate: "",
            to: "",
            from: "",
            noOfPacks: ""
        };
    }

    onCalendarChange(pValue) {
        console.log(pValue);
        this.setState({ pickupDate: pValue });
    }

    onToChange(pObj) {
        this.setState({ to: pObj.label });
    }

    onFromChange(pObj) {
        this.setState({ from: pObj.label });
    }

    onPacksChange(pObj) {
        console.log(pObj.label);
        this.setState({ noOfPacks: pObj.label });
    }

    render() {
        const { pickupDate, to, from, noOfPacks } = this.state;
        const toOptions = [
            { value: "0", label: "Airport" },
            { value: "1", label: "Colombo" },
            { value: "2", label: "Galle" },
            { value: "3", label: "Bentota" },
            { value: "4", label: "Hikkaduwa" }
        ];
        const fromOptions = [
            { value: "0", label: "Airport" },
            { value: "1", label: "Colombo" },
            { value: "2", label: "Galle" },
            { value: "3", label: "Bentota" },
            { value: "4", label: "Hikkaduwa" }
        ];
        const packsOptions = [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" }
        ];
        let calculatedVal = 800;
        return (
            <div>
                <div
                    className="mt-5 w-100 text-white"
                    style={{ backgroundColor: "#252525" }}
                >
                    <div className="row no-gutters">
                        <div className="col-12 col-sm-6">
                            <img
                                src={airportpickup_img}
                                href=""
                                alt="bespoke"
                                style={{ maxWidth: "100%" }}
                            />
                        </div>
                        <div className="col-12 col-sm-6 p-5">
                            <div className="h2 section-title text-white text-center">
                                Airport &amp; Other Transfers
                            </div>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, curabitur nec lacus
                                pellentesque ut facilisis.Lorem ipsum dolor sit amet, curabitur nec lacus
                                pellentesque ut facilisis.Lorem ipsum dolor sit amet, curabitur nec lacus
                                pellentesque ut facilisis.
                            </p>
                            <form>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <DatePicker
                                            placeholderText="Date"
                                            className="form-control"
                                            dateFormat="dd/MM/yyyy"
                                            value={pickupDate}
                                            selected={pickupDate}
                                            onChange={date =>
                                                this.onCalendarChange(date)
                                            }
                                        />
                                    </div>
                                    <div className="col">
                                        <Select
                                            placeholder="To"
                                            className="form-control form-control-select"
                                            classNamePrefix="form-control"
                                            value={toOptions.find(obj => obj.value === to)}
                                            options={toOptions}
                                            onChange={obj =>
                                                this.onToChange(obj)
                                            }
                                        />
                                    </div>
                                    <div className="col">
                                        <Select
                                            placeholder="From"
                                            className="form-control form-control-select"
                                            classNamePrefix="form-control"
                                            value={fromOptions.find(obj => obj.value === from)}
                                            options={fromOptions}
                                            onChange={obj =>
                                                this.onFromChange(obj)
                                            }
                                        />
                                    </div>
                                    <div className="col">
                                        <Select
                                            placeholder="No. of Pax"
                                            className="form-control form-control-select"
                                            classNamePrefix="form-control"
                                            value={packsOptions.find(obj => obj.value === noOfPacks)}
                                            options={packsOptions}
                                            onChange={obj =>
                                                this.onPacksChange(obj)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <button
                                            type="submit"
                                            className="btn btn-warning"
                                        >
                                            Book now
                                        </button>
                                    </div>
                                    <div className="col text-right">
                                        <div>
                                        {`estimated charge - \$${calculatedVal}`}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        Need to customize? &nbsp;
                                        <a className="" href="/airport-transfers">
                                            Inquire Now
                                        </a>
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

export default AirportPickup;
