import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import ItineraryActions from "./ItineraryActions";
import ItineraryRow from "./ItineraryRow";
import { listItineraries } from "../../actions/ItineraryAction";
import { listPackageIDs } from "../../actions/PackageAction";

class Itinerary extends Component {
    componentDidMount() {
        try {
            this.props.fetchItineraries();
            this.props.listPackageIDs();
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
        if (this.props.itineraries !== nextState.itineraries) {
            return true;
        }
        return false;
    }

    OnCreateClick() {
        const { data, withAction } = this.state;
        this.props.sliderfunc(ItineraryActions, data, withAction, true);
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
                                    <td>Itinerary ID</td>
                                    <td>Package Name(Package ID)</td>
                                    <td>Itinerary Description</td>
                                    <td>Itinerary Features</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.itineraries &&
                                this.props.itineraries.length != 0 ? (
                                    this.props.itineraries.map(item => (
                                        <ItineraryRow
                                            key={item.itinerary_id}
                                            itineraryItem={item}
                                            sliderfunc={this.props.sliderfunc}
                                        ></ItineraryRow>
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
    const { ItineraryReducer } = state;
    const { itineraries } = ItineraryReducer;
    return { itineraries };
};

const mapDispatchToProps = dispatch => ({
    fetchItineraries: () => dispatch(listItineraries()),
    listPackageIDs: () => dispatch(listPackageIDs())
});
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
