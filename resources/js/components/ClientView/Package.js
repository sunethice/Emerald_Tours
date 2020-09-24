import React,{ Component, useState } from "react";
import { connect } from 'react-redux';
import { listPackages, displayAlert } from '../actions/PackageAction';
import pkg1 from '../../img/tour-package1.jpg';
import pkg2 from '../../img/tour-package1.jpg';

class Package extends Component {

    componentDidMount(){
        this.props.fetchData();
    }

    render()
        {
          return (
              <div>
                  <div className="container mt-5">
                      <div className="row">
                          <div className="col-12">
                              <div className="h3 text-center">
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
                          <div className="col-md-12 d-flex justify-content-center mb-5">
                              <div className="btn-group">
                                  <button
                                      type="button"
                                      className="btn btn-outline-secondary"
                                      data-rel="0"
                                      onClick={() => {this.props.onCreatePressed()}}
                                  >
                                      Sri Lanka
                                  </button>
                                  <button
                                      type="button"
                                      className="btn btn-outline-secondary"
                                      data-rel="1"
                                      onClick={() => {this.onPressed()}}
                                  >
                                      Maldives
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                        {
                            this.props.packages.map((item) => (
                                <div className="col-md-4" key={item.package_id}>
                                    <div className="travel-place">
                                        <div className="work-image">
                                            <img
                                                src={pkg1}
                                                className="img-fluid person"
                                                alt="destination"
                                            />
                                            <div className="overlay">
                                                <div className="overlay_shape">
                                                    <a href="#" className="over-btn">
                                                        10 photos
                                                    </a>
                                                    <a
                                                        href="tourpackage.html"
                                                        className="view-all"
                                                    >
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
                            ))
                        }
                      </div>
                  </div>
              </div>
          );
        }

        onPressed(){
            console.log("prop=>" + JSON.stringify(this.props.packages));
        }
}

const mapStateToProps = (state) => {
    const { PackageReducer } = state;
    const { packages } = PackageReducer;
    console.log("packages>"+ JSON.stringify(packages));
    return { packages };
};

const mapDispatchToProps = (dispatch) => ({
    fetchData: () => dispatch(listPackages()),
    onCreatePressed: () => dispatch(displayAlert())
});

// const mapDispatchToProps = (dispatch) => ({
//     onCreatePressed: () => dispatch(displayAlert())
// });

export default connect(mapStateToProps, mapDispatchToProps )(Package);
