import React, { Component } from "react";
import { connect } from "react-redux";
import { listInquiries, MarkInquiry } from "../../actions/BespokeAction";
import BespokeActions from "./BespokeActions";
import "../../../css/AdminBespoke.css";

class Bespoke extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    onInquiryClick(inquiry) {
        // console.log(inquiry);
        let withAction = 0;
        this.props.sliderfunc(BespokeActions, inquiry, withAction, true);
    }

    onMarkChange(inquiryID) {
        this.props.MarkInquiry(inquiryID);
    }

    render() {
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
                            <td>Date</td>
                            <td>Mark as read / unread</td>
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
            <tr
                className={item.status == 1 ? "unread" : ""}
                key={item.id}
                onClick={() => {
                    this.onInquiryClick(item);
                }}
            >
                <td>{item.id}</td>
                <td>{item.clientname}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.phone}</td>
                <td className="limitMessage">{item.message}</td>
                <td>{new Date(item.created_at).toLocaleDateString()}</td>
                <td>
                    <button
                        className={
                            item.status == 1 ? "btn btn-danger" : "btn btn-info"
                        }
                        onClick={event => {
                            event.stopPropagation();
                            this.onMarkChange(item.id);
                        }}
                    >
                        {item.status == 1 ? "Mark as read" : "Mark as unread"}
                    </button>
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
    fetchData: () => dispatch(listInquiries()),
    MarkInquiry: id => dispatch(MarkInquiry(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bespoke);
