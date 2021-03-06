import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import ItineraryActions from "./ItineraryActions";
import { addItinerary } from "../../actions/ItineraryAction";

class ItineraryRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            withAction: 1 //0: Create, 1: Edit
        };
    }

    OnEditClick() {
        const { withAction } = this.state;
        this.props.sliderfunc(
            ItineraryActions,
            this.props.itineraryItem,
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
                <td>{this.props.itineraryItem.itinerary_id}</td>
                <td>{`${this.props.itineraryItem.package.name}(${this.props.itineraryItem.package_id})`}</td>
                <td>{this.props.itineraryItem.description}</td>
                <td>{this.props.itineraryItem.features}</td>
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
    const { ItineraryReducer } = state;
    const { itineraries } = ItineraryReducer;
    return { itineraries };
};

const mapDispatchToProps = dispatch => ({
    addItinerary: (pDescription, pFeatures, pPackageID) =>
        dispatch(addItinerary(pDescription, pFeatures, pPackageID))
});
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryRow);
