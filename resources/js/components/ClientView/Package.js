import React,{ Component } from "react";
import { connect } from 'react-redux';
import { listPackages } from '../actions/PackageAction';
import '../../css/Package.css';

class Package extends Component {

    componentDidMount(){
        this.props.fetchData();
    }

    render()
        {
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
                                  lacus pellentesque ut facilisis, lacus iaculis
                                  turpis interdum pede, sapien quis amet vitae,
                                  erat parturient, turpis congue sit. Hac nulla
                                  phasellus ornare. Volutpat risus ipsum nulla
                                  ducimus erat. Scelerisque eu imperdiet wisi
                                  wisi, sit libero sed ipsum sodales phasellus,
                                  odio vel ac non ac, sodales viverra, metus
                                  volutpat quis rutrum diam ac integer. Posuere
                                  nullam eu vestibulum non nonummy. Metus purus
                                  ac malesuada vitae ut qui, sed rhoncus
                                  nonummy, massa ac urna risus, faucibus aliquam
                                  malesuada fusce gravida urna.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 ">
                                <nav className="col-md-12 d-flex justify-content-center mb-5">
                                    <div className="nav btn-group" id="nav-tab" role="tablist">
                                        <a className="btn btn-outline-secondary active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Sri Lanka</a>
                                        <a className="btn btn-outline-secondary" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Maldives</a>
                                    </div>
                                </nav>
                                <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <div className="row">
                                            {(typeof this.props.packages !== 'undefined')?this.renderPackages():""}
                                            {((typeof this.props.packages !== 'undefined') && this.props.packages.length>3)?
                                                <div className="col-12 d-flex justify-content-center">
                                                    <button className="btn btn-more px-3 text-black text-nowrap nav-link">View More</button>
                                                </div>:""}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        B et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
              </div>
          );
        }

        showImagesModal(packageID){
            console.log(`showImagesModal - ${packageID}`);
        }

        renderPackages(){
            return this.props.packages.slice(0,3).map((item) => (
                <div className="col-md-4" key={item.package_id}>
                    <div className="travel-place">
                        <div className="work-image">
                            <img
                                src={process.env.MIX_PUBLIC_IMAGE_URL + 'tour-package1.jpg'}
                                className="img-fluid person"
                                alt="destination"
                            />
                            <div className="overlay">
                                <div className="overlay_shape">
                                    <button className="over-btn" id={item.package_id + '_imgBtn'} onClick={() => this.showImagesModal(item.package_id)}>
                                        10 photos
                                    </button>
                                    <a href="tourpackage.html" className="view-all">
                                        View All Places
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="travel-text">
                            <h3>{ item.name }</h3>
                            <p>
                                for {item.no_of_days}Days <span>|</span> $ { item.no_of_nights }
                            </p>
                        </div>
                    </div>
                </div>
            ));
        }
}

const mapStateToProps = (state) => {
    const { PackageReducer } = state;
    const { packages } = PackageReducer;
    return { packages };
};

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(listPackages())
});

export default connect(mapStateToProps, mapDispatchToProps )(Package);
