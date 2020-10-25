import React, { Component } from "react";
import { connect } from "react-redux";
import { listPackages } from "../actions/PackageAction";

class Package extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div id="package_wrap" className="pt-5 table-responsive">
                <table className="table table-sm">
                    <thead>
                        <tr className="table-secondary">
                            <td>Package ID</td>
                            <td>Package Name</td>
                            <td>category(id)</td>
                            <td>featured</td>
                            <td>No Days</td>
                            <td>No of Nights</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.packages ? this.renderPackages() : ""}
                    </tbody>
                </table>
            </div>
        );
    }

    renderPackages() {
        // console.log(this.props.packages);
        return this.props.packages.map(item => (
            <tr key={item.package_id}>
                <td>{item.package_id}</td>
                <td>{item.name}</td>
                <td>{`${item.category_name}(${item.category_id})`}</td>
                <td>{item.featured}</td>
                <td>{item.no_of_days}</td>
                <td>{item.no_of_nights}</td>
                <td>
                    <button className="btn btn-info">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ));
    }
}

const mapStateToProps = state => {
    const { PackageReducer } = state;
    const { packages } = PackageReducer;
    return { packages };
};

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(listPackages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Package);
