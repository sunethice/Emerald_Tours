import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import TransferActions from "./TransferActions";
import TransferRow from "./TransferRow";
import { listTransfers } from "../../actions/TransferAction";

class Transfers extends Component {
    componentDidMount() {
        try {
            this.props.fetchTransfers();
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            withAction: 0, //0: Create, 1: Edit
            data: null
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.transfers !== nextState.transfers) {
            return true;
        }
        return false;
    }

    OnCreateClick() {
        const { data, withAction } = this.state;
        this.props.sliderfunc(TransferActions, data, withAction, true);
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <button
                            className="btn btn-warning mb-3 float-right"
                            onClick={() => {
                                this.setState({
                                    withAction: 0
                                });
                                this.OnCreateClick();
                            }}
                        >
                            Create New
                        </button>
                    </div>
                    <div className="transfersTblWrap">
                        <table className="table table-sm">
                            <thead>
                                <tr className="table-secondary">
                                    <th>ID</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>drivetime</th>
                                    <th>charge</th>
                                    <th>created_at</th>
                                    <th>updated_at</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.transfers ? (
                                    this.props.transfers.map(item => (
                                        <TransferRow
                                            key={item.id}
                                            transferItem={item}
                                            sliderfunc={this.props.sliderfunc}
                                        ></TransferRow>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="text-center" colSpan="9">
                                            No data found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = state => {
    const { TransferReducer } = state;
    const { transfers } = TransferReducer;
    return { transfers };
};

const mapDispatchToProps = dispatch => ({
    fetchTransfers: () => dispatch(listTransfers())
});
export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
