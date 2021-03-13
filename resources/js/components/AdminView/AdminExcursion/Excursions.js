import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import ExcursionActions from "./ExcursionActions";
import ExcursionRow from "./ExcursionRow";
import { listExcursions } from "../../actions/ExcursionAction";

class Excursions extends Component {
    componentDidMount() {
        try {
            this.props.fetchExcursions();
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
        if (this.props.excursions !== nextState.excursions) {
            return true;
        }
        return false;
    }

    OnCreateClick() {
        const { data, withAction } = this.state;
        this.props.sliderfunc(ExcursionActions, data, withAction, true);
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
                                    <td>Excursion ID</td>
                                    <td>Excursion Name</td>
                                    {/* <td>Destination</td> */}
                                    <td>Description</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.excursions &&
                                this.props.excursions.length != 0 ? (
                                    this.props.excursions.map(item => (
                                        <ExcursionRow
                                            key={item.excursion_id}
                                            excursionItem={item}
                                            sliderfunc={this.props.sliderfunc}
                                        ></ExcursionRow>
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
    const { ExcursionReducer } = state;
    const { excursions } = ExcursionReducer;
    return { excursions };
};

const mapDispatchToProps = dispatch => ({
    fetchExcursions: () => dispatch(listExcursions())
});
export default connect(mapStateToProps, mapDispatchToProps)(Excursions);
