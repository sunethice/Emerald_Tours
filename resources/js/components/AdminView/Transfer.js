import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/AdminTransfer.css";
import SlidePanelHOC from "../Common/SidePanel";
import TransferAdd from "./TransferAdd";

class Transfers extends Component {
    componentDidMount() {
        try {
            let isTransfered = axios
                .get("/api/gettransferlist")
                .then(response => {
                    if (response.status == 200) {
                        console.log(response);
                        this.setState({ transfers: response.data });
                    } else {
                        notifyService.notify(
                            response.data.message,
                            notifyService.Notifications.Failure
                        );
                    }
                    // console.log(response);
                })
                .catch(error => {
                    console.log(error.response);
                });
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            withAction: 0, //0: Create, 1: Edit, 2: Delete
            data: null,
            transfers: []
        };
    }

    render() {
        const { isPaneOpen, data, withAction, transfers } = this.state;
        const SlidePanel = SlidePanelHOC(TransferAdd, data, withAction);
        return (
            <>
                <div>
                    <div>
                        <button
                            className="btn btn-warning mb-3 float-right"
                            onClick={() =>
                                this.setState({
                                    isPaneOpen: true,
                                    withAction: 0
                                })
                            }
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
                                {transfers ? (
                                    transfers.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                            <td>{item.drivetime}</td>
                                            <td>{item.charge}</td>
                                            <td>{item.created_at}</td>
                                            <td>{item.updated_at}</td>
                                            <td>
                                                <button
                                                    className="btn btn-info"
                                                    onClick={() =>
                                                        this.setState({
                                                            isPaneOpen: true,
                                                            data: item,
                                                            withAction: 1
                                                        })
                                                    }
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        this.setState({
                                                            isPaneOpen: true,
                                                            data: item,
                                                            withAction: 2
                                                        })
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
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
                    <SlidePanel
                        openPanel={isPaneOpen}
                        pTitle="Add Transfer"
                        pSubTitle="add a new transfer to the list"
                    ></SlidePanel>
                </div>
            </>
        );
    }
}
const mapStateToProps = state => {
    this.props = state;
};

const mapDispatchToProps = dispatch => {};
export default connect(mapStateToProps, mapDispatchToProps)(Transfers);
