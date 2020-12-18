import React, { Component } from 'react';
import logo from '../../img/logo1.png';
class Footer extends Component{

    render(){
        return (
            <div>
                <div className="pt-5 pb-5" style={{backgroundColor:'#012d6b'}}>
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-md-3 mt-sm-4 pb-3 pb-md-0">
                                <div className="row pb-3">
                                    <img className="d-block m-auto" style={{ width:'60%', height:'60%' }} src={logo} href="#" alt="Emerald Tours"></img>
                                </div>
                                <div className="row">
                                    <div className="col text-left">
                                        <i className="fas fa-home mr-3"></i>Address:
                                    </div>
                                    <div className="col text-left">
                                        <div className="">No.351/20, Weligampitiya,</div>
                                        <div className="text-nowrap">Ja-Ela 11350,</div>
                                        <div className="">Sri Lanka</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-left">
                                        <i className="fas fa-phone mr-3"></i>Phone:
                                    </div>
                                    <div className="col text-left">+94 (77) 700 4977</div>
                                </div>
                                <div className="row">
                                    <div className="col text-left">
                                        <i className="fas fa-envelope mr-3"></i>Email :
                                    </div>
                                    <div className="col text-left">info@emeraldtours.co</div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-sm-4 pb-3 pb-md-0 text-white">
                                <div className="row">
                                    <h5 className="mx-auto">Quick links</h5>
                                </div>
                                <hr className="mb-4 mt-0 d-flex justify-content-center d-inline-block" style={{width: '60px', backgroundColor:'#fff'}}></hr>
                                <div className="row">
                                    <div className="col text-center text-md-left ml-lg-5">
                                        <i className="fas fa-angle-right mr-3 d-none d-md-inline"></i>Home
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center text-md-left ml-lg-5">
                                        <i className="fas fa-angle-right mr-3 d-none d-md-inline"></i>Packages
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center text-md-left ml-lg-5">
                                        <i className="fas fa-angle-right mr-3 d-none d-md-inline"></i>Excursions
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center text-md-left ml-lg-5">
                                        <i className="fas fa-angle-right mr-3 d-none d-md-inline"></i>Our Gallery
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center text-md-left ml-lg-5">
                                        <i className="fas fa-angle-right mr-3 d-none d-md-inline"></i>Explore Sri Lanka
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3  mt-sm-4 px-3 pb-3 pb-md-0">
                                <div className="row">
                                    <h5 className="mx-auto">Instagram</h5>
                                </div>
                                <hr className="mb-4 mt-0 d-flex justify-content-center d-inline-block" style={{width: '60px', backgroundColor:'#fff'}}></hr>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-3 m-0 p-0">
                                        <img className="img-thumbnail border-0 p-1 bg-transparent" src={process.env.MIX_PUBLIC_IMAGE_URL + 'aboutus.jpg'} alt=""/>
                                    </div>
                                    <div className="col-3 m-0 p-0">
                                        <img className="img-thumbnail border-0 p-1 bg-transparent" src={process.env.MIX_PUBLIC_IMAGE_URL + 'aboutus.jpg'} alt=""/>
                                    </div>
                                    <div className="col-3 m-0 p-0">
                                        <img className="img-thumbnail border-0 p-1 bg-transparent" src={process.env.MIX_PUBLIC_IMAGE_URL + 'aboutus.jpg'} alt=""/>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-3 m-0 p-0">
                                        <img className="img-thumbnail border-0 p-1 bg-transparent" src={process.env.MIX_PUBLIC_IMAGE_URL + 'aboutus.jpg'} alt=""/>
                                    </div>
                                    <div className="col-3 m-0 p-0">
                                        <img className="img-thumbnail border-0 p-1 bg-transparent" src={process.env.MIX_PUBLIC_IMAGE_URL + 'aboutus.jpg'} alt=""/>
                                    </div>
                                    <div className="col-3 m-0 p-0">
                                        <img className="img-thumbnail border-0 p-1 bg-transparent" src={process.env.MIX_PUBLIC_IMAGE_URL + 'aboutus.jpg'} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3  mt-sm-4 pb-3 pb-md-0">
                                <div className="row">
                                    <h5 className="mx-auto">Connect with us</h5>
                                </div>
                                <hr className="mb-4 mt-0 d-flex justify-content-center d-inline-block" style={{width: '60px', backgroundColor:'#fff'}}></hr>
                                <div className="row">
                                    <form className="input-group px-3 px-md-0">
                                        <input type="text" className="form-control form-control-sm" placeholder="Your email"
                                            aria-label="Your email" aria-describedby="basic-addon2"></input>
                                        <div className="input-group-append">
                                            <button className="btn btn-sm btn-success">
                                                {/* <i className="fa fa-check"></i> */}
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="row my-3 p-auto">
                                    <div className="col d-flex justify-content-center">
                                        {/* Facebook */}
                                        <a className="fb-ic fa-lg mx-2" href="facebook.com">
                                            <i className="fab fa-facebook-f text-white"> </i>
                                        </a>
                                        {/* Twitter */}
                                        <a className="tw-ic fa-lg mx-2" href="facebook.com">
                                            <i className="fab fa-twitter text-white"> </i>
                                        </a>
                                        {/* Instagram */}
                                        <a className="ins-ic fa-lg mx-2" href="facebook.com">
                                            <i className="fab fa-instagram text-white"> </i>
                                        </a>
                                        {/* Pinterest */}
                                        <a className="pin-ic fa-lg mx-2" href="facebook.com">
                                            <i className="fab fa-pinterest text-white"> </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white text-center py-3 border-top border-secondary"  style={{backgroundColor:'#032048'}}>© 2020 Copyright:
                    <a href="https://Qbicle.com/"> Qbicle.com</a>
                </div>
            </div>
        );
    }
}

export default Footer;
