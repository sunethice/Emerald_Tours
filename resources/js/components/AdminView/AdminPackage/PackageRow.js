import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import PackageActions from "./PackageActions";
import { addPackage } from "../../actions/PackageAction";
import { destbyname, destbyindex, destindex } from "../../enums/destinations";
// import API from "../../utils/API";

class PackageRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            withAction: 1 //0: Create, 1: Edit
        };
    }

    OnEditClick() {
        const { withAction } = this.state;
        this.props.sliderfunc(
            PackageActions,
            this.props.packageItem,
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
                <td>{this.props.packageItem.package_id}</td>
                <td>{this.props.packageItem.name}</td>
                <td>
                    {
                        destbyname[
                            destbyindex[this.props.packageItem.destination]
                        ]
                    }
                </td>
                <td>{this.props.packageItem.description}</td>
                <td>{this.props.packageItem.featured}</td>
                <td>{this.props.packageItem.no_of_days}</td>
                <td>{this.props.packageItem.no_of_nights}</td>
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
    const { PackageReducer } = state;
    const { packages } = PackageReducer;
    return { packages };
};

const mapDispatchToProps = dispatch => ({
    addPackage: (pFrom, pTo, pDriveTime) =>
        dispatch(addPackage(pFrom, pTo, pDriveTime))
});
export default connect(mapStateToProps, mapDispatchToProps)(PackageRow);
