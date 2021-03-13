import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/ExcursionAdmin.css";
import Select from "react-select";
import Switch from "react-switch";
import { addExcursion, editExcursion } from "../../actions/ExcursionAction";

class ExcursionAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excursion_id: this.props.data ? this.props.data.excursion_id : null,
            excursion_name: this.props.data ? this.props.data.name : "",
            excursion_description: this.props.data
                ? this.props.data.description
                : "",
            // excursion_destination: this.props.data
            //     ? this.props.data.destination.toString()
            //     : "",
            action: this.props.action
        };
    }

    formReset() {
        this.setState({
            excursion_id: null,
            excursion_name: "",
            excursion_description: ""
            // excursion_destination: "",
        });
    }

    onAddExcursionClick() {
        const {
            excursion_name,
            excursion_description
            // excursion_destination,
        } = this.state;

        try {
            this.props.addExcursion(
                excursion_name,
                excursion_description
                // excursion_destination,
            );
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    onEditExcursionClick() {
        const {
            excursion_id,
            excursion_name,
            excursion_description
            // excursion_destination,
        } = this.state;
        try {
            this.props.editExcursion(
                excursion_id,
                excursion_name,
                excursion_description
                // excursion_destination,
            );
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    onDestChange(pObj) {
        this.setState({ excursion_destination: pObj.value });
    }

    render() {
        const {
            excursion_name,
            excursion_description,
            // excursion_destination,
            action
        } = this.state;
        const destOptions = [
            { value: "0", label: "Sri Lanka" },
            { value: "1", label: "Maldives" }
        ];
        const btnClass =
            action == 0
                ? "btn btn-warning"
                : action == 1
                ? "btn btn-info"
                : "btn btn-danger";
        const btnText =
            action == 0
                ? "Save Excursion"
                : action == 1
                ? "Edit Excursion"
                : "Delete Excursion";
        return (
            <>
                <div>
                    <div>
                        <form>
                            <div className="form-row mb-3">
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        value={excursion_name}
                                        className="form-control"
                                        placeholder="Excursion name"
                                        onChange={event =>
                                            this.setState({
                                                excursion_name:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            {/* <div className="form-row mb-3">
                                <div className="col-md-12">
                                    <Select
                                        placeholder="Destination"
                                        className="form-control form-control-select-2"
                                        classNamePrefix="form-control"
                                        value={destOptions.find(
                                            obj =>
                                                obj.value ===
                                                excursion_destination.toString()
                                        )}
                                        options={destOptions}
                                        onChange={obj => this.onDestChange(obj)}
                                    />
                                </div>
                            </div> */}
                            <div className="form-row mb-3">
                                <div className="col-md-12">
                                    <textarea
                                        type="text"
                                        value={excursion_description}
                                        className="form-control"
                                        placeholder="Description"
                                        rows="8"
                                        onChange={event =>
                                            this.setState({
                                                excursion_description:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col">
                                    <button
                                        type="button"
                                        className={btnClass}
                                        onClick={event => {
                                            action == 0
                                                ? this.onAddExcursionClick(
                                                      event
                                                  )
                                                : this.onEditExcursionClick(
                                                      event
                                                  );
                                        }}
                                    >
                                        {btnText}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addExcursion: (
        name,
        description
        // destination,
    ) =>
        dispatch(
            addExcursion(
                name,
                description
                // destination,
            )
        ),
    editExcursion: (
        id,
        name,
        description
        // destination,
    ) =>
        dispatch(
            editExcursion(
                id,
                name,
                description
                // destination,
            )
        )
});
export default connect(null, mapDispatchToProps)(ExcursionAction);
