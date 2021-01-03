import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import TransferRow from "./TransferRow";
import { addTransfer, editTransfer } from "../../actions/TransferAction";

class TransferAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transfer_id: this.props.data ? this.props.data.id : null,
            transfer_from: this.props.data ? this.props.data.from : "",
            transfer_to: this.props.data ? this.props.data.to : "",
            transfer_time: this.props.data ? this.props.data.drivetime : "",
            transfer_cost: this.props.data ? this.props.data.charge : "",
            action: this.props.action
        };
    }

    formReset() {
        this.setState({
            transfer_id: null,
            transfer_from: "",
            transfer_to: "",
            transfer_time: "",
            transfer_cost: ""
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
            this.props.addTransfer(
                transfer_from,
                transfer_to,
                transfer_time,
                transfer_cost
            );
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    onEditTransferClick() {
        const {
            transfer_id,
            transfer_from,
            transfer_to,
            transfer_time,
            transfer_cost
        } = this.state;
        try {
            this.props.editTransfer(
                transfer_id,
                transfer_from,
                transfer_to,
                transfer_time,
                transfer_cost
            );
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
                ? "btn btn-warning"
                : action == 1
                ? "btn btn-info"
                : "btn btn-danger";
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
                                <div className="col-md-6">
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
                                <div className="col-md-6">
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
                                <div className="col-md-6">
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
                                <div className="col-md-6">
                                    <input
                                        type="number"
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
                                            action == 0
                                                ? this.onAddTransferClick(event)
                                                : this.onEditTransferClick(
                                                      event
                                                  );
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

const mapDispatchToProps = dispatch => ({
    addTransfer: (pFrom, pTo, pDriveTime, pCharge) =>
        dispatch(addTransfer(pFrom, pTo, pDriveTime, pCharge)),
    editTransfer: (pId, pFrom, pTo, pDriveTime, pCharge) =>
        dispatch(editTransfer(pId, pFrom, pTo, pDriveTime, pCharge))
});
export default connect(null, mapDispatchToProps)(TransferAction);
