import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/PackageAdmin.css";
import Select from "react-select";
import Switch from "react-switch";
import { addPackage, editPackage } from "../../actions/PackageAction";

class TransferAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            package_id: this.props.data ? this.props.data.package_id : null,
            package_name: this.props.data ? this.props.data.name : "",
            package_description: this.props.data
                ? this.props.data.description
                : "",
            package_no_of_days: this.props.data
                ? this.props.data.no_of_days
                : "",
            package_no_of_nights: this.props.data
                ? this.props.data.no_of_nights
                : "",
            package_destination: this.props.data
                ? this.props.data.destination.toString()
                : "",
            package_featured: this.props.data
                ? this.props.data.featured == 1
                    ? true
                    : false
                : false,
            action: this.props.action
        };
    }

    formReset() {
        this.setState({
            package_id: null,
            package_name: "",
            package_description: "",
            package_no_of_days: "",
            package_no_of_nights: "",
            package_destination: "",
            package_featured: false
        });
    }

    onAddPackageClick() {
        const {
            package_name,
            package_description,
            package_no_of_days,
            package_no_of_nights,
            package_destination,
            package_featured
        } = this.state;

        try {
            this.props.addPackage(
                package_name,
                package_description,
                package_no_of_days,
                package_no_of_nights,
                package_destination,
                package_featured
            );
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    onEditPackageClick() {
        const {
            package_id,
            package_name,
            package_description,
            package_no_of_days,
            package_no_of_nights,
            package_destination,
            package_featured
        } = this.state;
        try {
            this.props.editPackage(
                package_id,
                package_name,
                package_destination,
                package_description,
                package_no_of_days,
                package_no_of_nights,
                package_featured
            );
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    onFeaturedChange(checked) {
        this.setState({ package_featured: checked });
    }

    onDestChange(pObj) {
        this.setState({ package_destination: pObj.value });
    }

    render() {
        const {
            package_name,
            package_description,
            package_no_of_days,
            package_no_of_nights,
            package_destination,
            package_featured,
            action
        } = this.state;
        const destOptions = [
            { value: "0", label: "Sri Lanka" },
            { value: "1", label: "Maldives" }
        ];
        // const bb = destOptions.find(obj => {
        //     return obj.value == "0";
        // });
        // console.log(bb);
        // console.log(
        //     `package_destination(${package_destination.toString()}) = ${}`
        // );
        const btnClass =
            action == 0
                ? "btn btn-warning"
                : action == 1
                ? "btn btn-info"
                : "btn btn-danger";
        const btnText =
            action == 0
                ? "Save Package"
                : action == 1
                ? "Edit Package"
                : "Delete Package";
        return (
            <>
                <div>
                    <div>
                        <form>
                            <div className="form-row mb-3">
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        value={package_name}
                                        className="form-control"
                                        placeholder="Package name"
                                        onChange={event =>
                                            this.setState({
                                                package_name: event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-12">
                                    <Select
                                        placeholder="Destination"
                                        className="form-control form-control-select-2"
                                        classNamePrefix="form-control"
                                        value={destOptions.find(
                                            obj =>
                                                obj.value ===
                                                package_destination.toString()
                                        )}
                                        options={destOptions}
                                        onChange={obj => this.onDestChange(obj)}
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-12">
                                    <textarea
                                        type="text"
                                        value={package_description}
                                        className="form-control"
                                        placeholder="Description"
                                        rows="8"
                                        onChange={event =>
                                            this.setState({
                                                package_description:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="number"
                                        value={package_no_of_days}
                                        className="form-control"
                                        placeholder="No of Days"
                                        onChange={event =>
                                            this.setState({
                                                package_no_of_days:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="number"
                                        value={package_no_of_nights}
                                        className="form-control"
                                        placeholder="No of Nights"
                                        onChange={event =>
                                            this.setState({
                                                package_no_of_nights:
                                                    event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-6">
                                    <label className="form-control">
                                        Featured
                                    </label>
                                </div>
                                <div className="col-md-6 pt-2">
                                    <Switch
                                        onColor="#ffba00"
                                        height={21}
                                        width={48}
                                        onChange={checked =>
                                            this.onFeaturedChange(checked)
                                        }
                                        checked={
                                            package_featured == 0 ? false : true
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
                                                ? this.onAddPackageClick(event)
                                                : this.onEditPackageClick(
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
    addPackage: (
        name,
        description,
        no_of_days,
        no_of_nights,
        destination,
        featured
    ) =>
        dispatch(
            addPackage(
                name,
                description,
                no_of_days,
                no_of_nights,
                destination,
                featured
            )
        ),
    editPackage: (
        id,
        name,
        destination,
        description,
        no_of_days,
        no_of_nights,
        featured
    ) =>
        dispatch(
            editPackage(
                id,
                name,
                destination,
                description,
                no_of_days,
                no_of_nights,
                featured
            )
        )
});
export default connect(null, mapDispatchToProps)(TransferAction);
