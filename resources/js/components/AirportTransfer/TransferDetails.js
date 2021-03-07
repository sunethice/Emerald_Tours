import React, { Component } from "react";
import notifyService from "../services/notifyService";

class TrasferDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transferData: []
        };
    }

    componentDidMount() {
        axios
            .get("/api/gettransferlist")
            .then(res => {
                if (res.status == 200) {
                    this.setState({ transferData: res.data });
                } else {
                    notifyService.notify(
                        res.data.message,
                        notifyService.Notifications.Failure
                    );
                }
            })
            .catch(error => {
                notifyService.notify(
                    error,
                    notifyService.Notifications.Failure
                );
            });
    }

    render() {
        const { transferData } = this.state;
        return (
            <div id="package_wrap">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title h2">
                                Transfer details
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-xs-12 ">
                            <div className="py-3 px-3 px-sm-0">
                                <div className="row">
                                    <div className="table-responsive">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr className="table-secondary">
                                                    <td>Pickup location</td>
                                                    <td>Drop off location</td>
                                                    <td>Drive time</td>
                                                    <td>Charge</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transferData &&
                                                transferData != 0 ? (
                                                    transferData.map(item => (
                                                        <tr key={item.id}>
                                                            <td>{item.from}</td>
                                                            <td>{item.to}</td>
                                                            <td>
                                                                {item.drivetime}
                                                            </td>
                                                            <td>
                                                                {item.charge}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td
                                                            className="text-center"
                                                            colSpan="9"
                                                        >
                                                            No data found
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrasferDetails;
