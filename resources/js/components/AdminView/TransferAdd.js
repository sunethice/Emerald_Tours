import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../css/AdminTransfer.css";
import notifyService from "../services/notifyService";
// import API from "../../utils/API";

class TransferAdd extends Component {
    constructor(props) {
        super(props);
        console.log("this.props.action");
        console.log(this.props.action);
        this.state = {
            transfer_from: this.props.data ? this.props.data.from : "",
            transfer_to: this.props.data ? this.props.data.to : "",
            transfer_time: this.props.data ? this.props.data.drivetime : "",
            transfer_cost: this.props.data ? this.props.data.charge : 0,
            action: this.props.action
        };
    }

    formReset() {
        this.setState({
            transfer_from: "",
            transfer_to: "",
            transfer_time: "",
            transfer_cost: 0
        });
    }

    onAddTransferClick() {
        const {
            transfer_from,
            transfer_to,
            transfer_time,
            transfer_cost
        } = this.state;

        try {
            let isTransfered = axios
                .post("/api/addtransfer", {
                    from: transfer_from,
                    to: transfer_to,
                    drivetime: transfer_time
                })
                .then(response => {
                    if (response.status == 200) {
                        notifyService.notify(
                            response.data.message,
                            notifyService.Notifications.Success
                        );
                    } else {
                        notifyService.notify(
                            response.data.message,
                            notifyService.Notifications.Failure
                        );
                    }
                    this.formReset();
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    render() {
        const {
            transfer_from,
            transfer_to,
            transfer_time,
            transfer_cost,
            action
        } = this.state;

        const btnClass =
            action == 0
                ? "btn-warning"
                : action == 1
                ? "btn-info"
                : "btn-danger";
        const btnText =
            action == 0
                ? "Save Transfer"
                : action == 1
                ? "Edit Transfer"
                : "Delete Transfer";
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
                                        placeholder="time"
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
                                        placeholder="Cost"
                                        onChange={event =>
                                            this.setState({
                                                transfer_cost:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col">
                                    <button
                                        type="button"
                                        className={btnClass}
                                        onClick={event => {
                                            this.onAddTransferClick(event);
                                        }}
                                    >
                                        {btnText}
                                    </button>
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
