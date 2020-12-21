import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../css/AdminTransfer.css";

class TransferAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transfer_from: "",
            transfer_to: "",
            transfer_time: "",
            transfer_cost: 0
        };
    }

    render() {
        let {
            transfer_from,
            transfer_to,
            transfer_time,
            transfer_cost
        } = this.state;

        return (
            <>
                <div>
                    <div>
                        <form>
                            <div className="form-row mb-3">
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        value={transfer_from}
                                        className="form-control"
                                        placeholder="From"
                                        onChange={event =>
                                            this.setState({
                                                transfer_from:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                                <div className="col-md-2 opt-col">
                                    <div
                                        className="plusBtn"
                                        onClick={() => this.addAFromField()}
                                    >
                                        <FontAwesomeIcon
                                            className="plusIcon"
                                            icon={faPlus}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        value={transfer_to}
                                        className="form-control"
                                        placeholder="To"
                                        onChange={event =>
                                            this.setState({
                                                transfer_to: event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        value={transfer_time}
                                        className="form-control"
                                        placeholder="From"
                                        onChange={event =>
                                            this.setState({
                                                transfer_time:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                                <div className="col-md-2 opt-col"></div>
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        value={transfer_cost}
                                        className="form-control"
                                        placeholder="To"
                                        onChange={event =>
                                            this.setState({
                                                transfer_cost:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default TransferAdd;
