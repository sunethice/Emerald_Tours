import React, { Component } from 'react';
class OurTeam extends Component{

    render(){
        return (
            <div>
                <div className="container-fluid mt-5 w-100 p-5 text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-dark">
                                <div className="h2 section-title text-center">Our Team</div>
                                <p className="text-center">Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis,
                                    lacus iaculis turpis interdum pede, sapien quis amet vitae, erat parturient,
                                    turpis congue sit. Hac nulla phasellus ornare. Volutpat risus ipsum nulla ducimus erat.
                                    Scelerisque eu imperdiet wisi wisi, sit libero sed ipsum sodales phasellus,
                                    odio vel ac non ac, sodales viverra, metus volutpat quis rutrum diam ac integer.
                                </p>
                            </div>
                        </div>
                        <div id="TeamImages" className="row">
                            <div className="col-12 col-lg-3">
                                <img className="img-fluid" src={process.env.MIX_PUBLIC_IMAGE_URL + 'TR01.jpg'} alt="Team representative"/>
                            </div>
                            <div className="col-12 col-lg-3">
                                <img className="img-fluid" src={process.env.MIX_PUBLIC_IMAGE_URL + 'TR02.jpg'} alt="Team representative"/>
                            </div>
                            <div className="col-12 col-lg-3">
                                <img className="img-fluid" src={process.env.MIX_PUBLIC_IMAGE_URL + 'TR01.jpg'} alt="Team representative"/>
                            </div>
                            <div className="col-12 col-lg-3">
                                <img className="img-fluid" src={process.env.MIX_PUBLIC_IMAGE_URL + 'TR02.jpg'} alt="Team representative"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeam;
