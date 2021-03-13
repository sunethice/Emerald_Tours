import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "../../css/Excursion.css";
import { listExcursions } from "../actions/ExcursionAction";

class Excursions extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    renderExcursions() {
        return this.props.excursions.map(item => (
            <div className="col-md-4" key={item.excursion_id}>
                <div className="card mb-3 mt-3 excursion-card-rounded">
                    <div className="row no-gutters">
                        <div className="col">
                            <div className="card-header excursion-header">
                                <img
                                    className=""
                                    width="100%"
                                    height="100%"
                                    src={
                                        process.env.MIX_PUBLIC_IMAGE_URL +
                                        item.primaryimg
                                    }
                                />
                            </div>
                            <div className="card-footer excursion-footer">
                                <p className="p-3 float-left excursion-name">
                                    {item.name}
                                </p>
                                <button className="btn btn-info float-right excursion-btn">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title h2">Excursions</div>
                            <p>
                                Lorem ipsum dolor sit amet, curabitur nec lacus
                                pellentesque ut facilisis, lacus iaculis turpis
                                interdum pede, sapien quis amet vitae, erat
                                parturient, turpis congue sit. Hac nulla
                                phasellus ornare. Volutpat risus ipsum nulla
                                ducimus erat. Scelerisque eu imperdiet wisi
                                wisi, sit libero sed ipsum sodales phasellus,
                                odio vel ac non ac, sodales viverra, metus
                                volutpat quis rutrum diam ac integer. Posuere
                                nullam eu vestibulum non nonummy. Metus purus ac
                                malesuada vitae ut qui, sed rhoncus nonummy,
                                massa ac urna risus, faucibus aliquam malesuada
                                fusce gravida urna.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {typeof this.props.excursions !== "undefined"
                            ? this.renderExcursions()
                            : ""}
                        {typeof this.props.excursions !== "undefined" &&
                        this.props.excursions.length > 3 ? (
                            <div className="col-12 d-flex justify-content-center">
                                <button className="btn btn-more px-3 text-black text-nowrap nav-link">
                                    View More
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
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
    fetchData: () => dispatch(listExcursions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Excursions);
