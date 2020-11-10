import React, { Component } from 'react';
import usr1_img from '../../img/user1_img.jpg';

import '../../css/testimonials.css';

class Testimonials extends Component{

    render() {

        return (
          <>
            <div className="container mt-5 w-100 p-5">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                      <div className="col-12 text-dark">
                          <div className="h2 section-title text-center">What travellers say about us</div>
                          <p className="text-center pt-2">Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis,
                              lacus iaculis turpis interdum pede, sapien quis amet vitae, erat parturient,
                              turpis congue sit. Hac nulla phasellus ornare. Volutpat risus ipsum nulla ducimus erat.
                          </p>
                      </div>
                  </div>
                  <div className="card mb-3 mt-5 testimonial-card-rounded" style={{ maxWidth: '540px' }}>
                    <div className="row no-gutters">
                      <div className="col testimonial-img-wrapper">
                        <img className="testimonial-img" width="100%" height="250" src={usr1_img}/>
                      </div>
                      <div className="col testimonial-content-wrapper">
                        <div className="card-body testimonial-card-body">
                          <p className="card-text p-3">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                          <p className="card-text px-3">
                            <span className="testimonial-user">Sarah Jone</span>
                            <small className="testimonial-user-desig">Last updated 3 mins ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="card mb-3 mt-3 testimonial-card-rounded" style={{ maxWidth: '540px' }}>
                    <div className="row no-gutters">
                      <div className="col testimonial-img-wrapper">
                        <img className="testimonial-img" width="100%" height="250" src={usr1_img}/>
                      </div>
                      <div className="col testimonial-content-wrapper">
                        <div className="card-body testimonial-card-body">
                          <p className="card-text p-3">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                          <p className="card-text px-3">
                            <span className="testimonial-user">Sarah Jone</span>
                            <small className="testimonial-user-desig">Last updated 3 mins ago</small>                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3 mt-5 testimonial-card-rounded" style={{ maxWidth: '540px' }}>
                    <div className="row no-gutters">
                      <div className="col testimonial-img-wrapper">
                        <img className="testimonial-img" width="100%" height="250" src={usr1_img}/>
                      </div>
                      <div className="col testimonial-content-wrapper">
                        <div className="card-body testimonial-card-body">
                          <p className="card-text p-3">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                          <p className="card-text px-3">
                            <span className="testimonial-user">Sarah Jone</span>
                            <small className="testimonial-user-desig">Last updated 3 mins ago</small>                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }
}

export default Testimonials;
