import React, { Component } from "react";
import { connect } from "react-redux";
import { listInquiries } from "../actions/BespokeAction";

class Bespoke extends Component {
    componentDidMount() {
        this.props.fetchData();
        console.log("comp");
    }

    render() {
        console.log("this.props.inquiries");
        console.log(this.props.inquiries);
        return (
            <div id="package_wrap" className="pt-5 table-responsive">
                <table className="table table-sm">
                    <thead>
                        <tr className="table-secondary">
                            <td>Inquiry ID</td>
                            <td>Client Name</td>
                            <td>Client Email</td>
                            <td>Country</td>
                            <td>Phone</td>
                            <td>Message</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.inquiries ? (
                            this.renderInquiries()
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
        );
    }

    renderInquiries() {
        return this.props.inquiries.map(item => (
            <tr key={item.id}>
                <td>{item.clientname}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
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
    const { BespokeReducer } = state;
    const { inquiries } = BespokeReducer;
    return { inquiries };
};

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(listInquiries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Bespoke);
