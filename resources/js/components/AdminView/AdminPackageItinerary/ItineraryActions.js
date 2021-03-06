import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/PackageAdmin.css";
import Select from "react-select";
import { addItinerary, editItinerary } from "../../actions/ItineraryAction";
import { listPackageIDs } from "../../actions/PackageAction";

class ItineraryAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itinerary_id: this.props.data ? this.props.data.itinerary_id : null,
            package_id: this.props.data ? this.props.data.package_id : null,
            // package_name: this.props.data ? this.props.data.name : "",
            description: this.props.data ? this.props.data.description : "",
            features: this.props.data ? this.props.data.features : "",
            itinerary_package: this.props.data ? this.props.data.package : {},
            action: this.props.action
        };
    }

    componentDidMount() {
        // try {
        //     this.props.listPackageIDs();
        // } catch (error) {
        //     console.log(`😱 Axios request failed: ${error}`);
        // }
    }

    formReset() {
        this.setState({
            itinerary_id: null,
            package_id: null,
            // package_name: "",
            description: "",
            features: ""
        });
    }

    onAddItineraryClick() {
        const { package_id, description, features } = this.state;
        try {
            this.props.addItinerary(description, features, package_id);
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    onEditItineraryClick() {
        const { itinerary_id, package_id, description, features } = this.state;
        try {
            this.props.editItinerary(
                itinerary_id,
                description,
                features,
                package_id
            );
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
        }
    }

    // onFeaturedChange(checked) {
    //     this.setState({ package_featured: checked });
    // }

    onPackageChange(pObj) {
        this.setState({ package_id: pObj.value });
    }

    render() {
        const {
            description,
            package_id,
            features,
            itinerary_package,
            action
        } = this.state;
        const btnClass =
            action == 0
                ? "btn btn-warning"
                : action == 1
                ? "btn btn-info"
                : "btn btn-danger";
        const btnText =
            action == 0
                ? "Save Itinerary"
                : action == 1
                ? "Edit Itinerary"
                : "Delete Itinerary";
        // const packageOptions = [];
        // if (this.props.packageMeta) {
        const packageOptions = this.props.packageMeta.map(metaItem => {
            return { value: metaItem.package_id, label: metaItem.name };
        });
        // }
        return (
            <>
                <div>
                    <div>
                        <form>
                            {this.props.packageMeta ? (
                                <div className="form-row mb-3">
                                    <div className="col-md-12">
                                        <Select
                                            placeholder="Package"
                                            className="form-control form-control-select-2"
                                            classNamePrefix="form-control"
                                            value={packageOptions.find(
                                                obj => obj.value === package_id
                                            )}
                                            options={packageOptions}
                                            onChange={obj =>
                                                this.onPackageChange(obj)
                                            }
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="form-row mb-3">
                                    <div className="col-md-12"></div>
                                </div>
                            )}
                            <div className="form-row mb-3">
                                <div className="col-md-12">
                                    <textarea
                                        type="text"
                                        value={description}
                                        className="form-control"
                                        placeholder="Itinerary Description"
                                        rows="8"
                                        onChange={event =>
                                            this.setState({
                                                description: event.target.value
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-12">
                                    <textarea
                                        type="text"
                                        value={features}
                                        className="form-control"
                                        placeholder="Itinerary Features"
                                        rows="8"
                                        onChange={event =>
                                            this.setState({
                                                features: event.target.value
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
                                                ? this.onAddItineraryClick(
                                                      event
                                                  )
                                                : this.onEditItineraryClick(
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
const mapStateToProps = state => {
    const { PackageReducer } = state;
    const { packageMeta } = PackageReducer;
    return { packageMeta };
};

const mapDispatchToProps = dispatch => ({
    addItinerary: (pDescription, pFeatures, pPackageID) =>
        dispatch(addItinerary(pDescription, pFeatures, pPackageID)),
    editItinerary: (pItineraryID, pDescription, pFeatures, pPackageID) =>
        dispatch(
            editItinerary(pItineraryID, pDescription, pFeatures, pPackageID)
        ),
    listPackageIDs: () => dispatch(listPackageIDs())
});
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryAction);
