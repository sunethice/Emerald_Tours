import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import TransferActions from "./TransferActions";
import { addTransfer } from "../../actions/TransferAction";
// import API from "../../utils/API";

class TransferRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            withAction: 1 //0: Create, 1: Edit
        };
    }

    OnEditClick() {
        const { withAction } = this.state;
        this.props.sliderfunc(
            TransferActions,
            this.props.transferItem,
            withAction,
            true
        );
    }

    OnDeleteClick() {
        const { withAction } = this.state;
    }

    render() {
        return (
            <tr>
                <td>{this.props.transferItem.id}</td>
                <td>{this.props.transferItem.from}</td>
                <td>{this.props.transferItem.to}</td>
                <td>{this.props.transferItem.drivetime}</td>
                <td>{this.props.transferItem.charge}</td>
                <td>{this.props.transferItem.created_at}</td>
                <td>{this.props.transferItem.updated_at}</td>
                <td>
                    <button
                        className="btn btn-info"
                        onClick={() => {
                            this.setState({
                                withAction: 1
                            });
                            this.OnEditClick();
                        }}
                    >
                        Edit
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.OnDeleteClick()}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    const { TransferReducer } = state;
    const { transfers } = TransferReducer;
    return { transfers };
};

const mapDispatchToProps = dispatch => ({
    addTransfer: (pFrom, pTo, pDriveTime) =>
        dispatch(addTransfer(pFrom, pTo, pDriveTime))
});
export default connect(mapStateToProps, mapDispatchToProps)(TransferRow);
