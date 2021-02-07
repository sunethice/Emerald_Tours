import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import PackageActions from "./PackageActions";
import PackageRow from "./PackageRow";
import { listPackages } from "../../actions/PackageAction";

class Packages extends Component {
    componentDidMount() {
        try {
            this.props.fetchPackages();
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
        if (this.props.packages !== nextState.packages) {
            return true;
        }
        return false;
    }

    OnCreateClick() {
        const { data, withAction } = this.state;
        this.props.sliderfunc(PackageActions, data, withAction, true);
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
                    <div id="package_wrap" className="table-responsive">
                        <table className="table table-sm">
                            <thead>
                                <tr className="table-secondary">
                                    <td>Package ID</td>
                                    <td>Package Name</td>
                                    <td>Destination</td>
                                    <td>Description</td>
                                    <td>featured</td>
                                    <td>No Days</td>
                                    <td>No of Nights</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.packages &&
                                this.props.packages.length != 0 ? (
                                    this.props.packages.map(item => (
                                        <PackageRow
                                            key={item.package_id}
                                            packageItem={item}
                                            sliderfunc={this.props.sliderfunc}
                                        ></PackageRow>
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
    const { PackageReducer } = state;
    const { packages } = PackageReducer;
    return { packages };
};

const mapDispatchToProps = dispatch => ({
    fetchPackages: () => dispatch(listPackages())
});
export default connect(mapStateToProps, mapDispatchToProps)(Packages);
