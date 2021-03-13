import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/AdminTransfer.css";
import ExcursionActions from "./ExcursionActions";
import { addExcursion } from "../../actions/ExcursionAction";
// import API from "../../utils/API";

class ExcursionRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            withAction: 1 //0: Create, 1: Edit
        };
    }

    OnEditClick() {
        const { withAction } = this.state;
        this.props.sliderfunc(
            ExcursionActions,
            this.props.excursionItem,
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
                <td>{this.props.excursionItem.excursion_id}</td>
                <td>{this.props.excursionItem.name}</td>
                <td>{this.props.excursionItem.description}</td>
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

export default ExcursionRow;
