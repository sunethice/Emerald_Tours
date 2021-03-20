import React, { Component } from "react";
import { connect } from "react-redux";
import { listPackages } from "../actions/PackageAction";
import "../../css/Package.css";
// import "../../utils/axiosConfig";

class Package extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0 //0: SriLanka, 1: Maldives
        };
    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div id="package_wrap">
                <div id="tabs">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title h2">
                                    Tour Packages
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, curabitur nec
                                    lacus pellentesque ut facilisis, lacus
                                    iaculis turpis interdum pede, sapien quis
                                    amet vitae, erat parturient, turpis congue
                                    sit. Hac nulla phasellus ornare. Volutpat
                                    risus ipsum nulla ducimus erat. Scelerisque
                                    eu imperdiet wisi wisi, sit libero sed ipsum
                                    sodales phasellus, odio vel ac non ac,
                                    sodales viverra, metus volutpat quis rutrum
                                    diam ac integer. Posuere nullam eu
                                    vestibulum non nonummy. Metus purus ac
                                    malesuada vitae ut qui, sed rhoncus nonummy,
                                    massa ac urna risus, faucibus aliquam
                                    malesuada fusce gravida urna.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 ">
                                <nav className="col-md-12 d-flex justify-content-center mb-5">
                                    <div
                                        className="nav btn-group"
                                        id="nav-tab"
                                        role="tablist"
                                    >
                                        <a
                                            className="btn btn-outline-secondary active"
                                            id="nav-home-tab"
                                            data-toggle="tab"
                                            href="#nav-home"
                                            role="tab"
                                            aria-controls="nav-home"
                                            aria-selected="true"
                                            onClick={() => {
                                                this.setSelectedTab(0);
                                            }}
                                        >
                                            Sri Lanka
                                        </a>
                                        <a
                                            className="btn btn-outline-secondary"
                                            id="nav-profile-tab"
                                            data-toggle="tab"
                                            href="#nav-profile"
                                            role="tab"
                                            aria-controls="nav-profile"
                                            aria-selected="false"
                                            onClick={() => {
                                                this.setSelectedTab(1);
                                            }}
                                        >
                                            Maldives
                                        </a>
                                    </div>
                                </nav>
                                <div
                                    className="tab-content py-3 px-3 px-sm-0"
                                    id="nav-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="nav-home"
                                        role="tabpanel"
                                        aria-labelledby="nav-home-tab"
                                    >
                                        <div className="row">
                                            {typeof this.props.packages !==
                                            "undefined"
                                                ? this.renderPackages()
                                                : ""}
                                            {typeof this.props.packages !==
                                                "undefined" &&
                                            this.props.packages.length > 3 ? (
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
                                    <div
                                        className="tab-pane fade"
                                        id="nav-profile"
                                        role="tabpanel"
                                        aria-labelledby="nav-profile-tab"
                                    >
                                        <div className="row">
                                            {typeof this.props.packages !==
                                            "undefined"
                                                ? this.renderPackages()
                                                : ""}
                                            {typeof this.props.packages !==
                                                "undefined" &&
                                            this.props.packages.length > 3 ? (
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    setSelectedTab(tabIndex) {
        this.setState({ selectedTab: tabIndex });
    }

    showImagesModal(packageID) {
        console.log(`showImagesModal - ${packageID}`);
    }

    renderPackages() {
        let filteredPackages = this.props.packages.filter(item => {
            return item.destination == this.state.selectedTab;
        });
        // filteredPackages.slice(0, 3).map(item => (
        return filteredPackages.map(item => (
            <div className="col-md-4" key={item.package_id}>
                <div className="travel-place">
                    <div className="work-image">
                        <img
                            src={
                                process.env.MIX_PUBLIC_IMAGE_URL +
                                "tour-package1.jpg"
                            }
                            className="img-fluid person"
                            alt="destination"
                        />
                        <div className="overlay">
                            <div className="overlay_shape">
                                <a
                                    className="over-btn"
                                    href={"/package/" + item.package_id}
                                >
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="travel-text">
                        <h3>{item.name}</h3>
                        <p>
                            {item.no_of_days} Days <span>|</span>{" "}
                            {item.no_of_nights} Nights
                        </p>
                    </div>
                </div>
            </div>
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
