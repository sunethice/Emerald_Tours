import React, { Component } from 'react';
import '../../css/Gallery.css';

class Gallery extends Component{

    render(){
        return (
            <div id="gallery_wrap">
                <div className="container-fluid mt-5 w-100 p-5 text-white" style={{backgroundColor: '#252525'}}>
                    <div className="container ">
                        <div className="row">
                            <div className="col-12">
                                <div className="h2 section-title text-white text-center">Gallery</div>
                                <p>Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis,
                                    lacus iaculis turpis interdum pede, sapien quis amet vitae, erat parturient,
                                    turpis congue sit. Hac nulla phasellus ornare. Volutpat risus ipsum nulla ducimus erat.
                                    Scelerisque eu imperdiet wisi wisi, sit libero sed ipsum sodales phasellus,
                                    odio vel ac non ac, sodales viverra, metus volutpat quis rutrum diam ac integer.
                                    Posuere nullam eu vestibulum non nonummy. Metus purus ac malesuada vitae ut qui,
                                    sed rhoncus nonummy, massa ac urna risus, faucibus aliquam malesuada fusce gravida urna.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="gallery" id="gallery">
                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid galleryPicTypeOne" src={process.env.MIX_PUBLIC_URL + `/images/SL_img004.jpg`} alt='Card_image'/>
                                </div>
                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid galleryPicTypeTwo" src={process.env.MIX_PUBLIC_URL + `/images/SL_img004.jpg`} alt="Card_image"/>
                                </div>
                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid galleryPicTypeTwo" src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg" alt="Card_image"/>
                                </div>
                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid galleryPicTypeOne" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card_image"/>
                                </div>
                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid galleryPicTypeOne" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card_image"/>
                                </div>
                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid galleryPicTypeTwo" src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg" alt="Card_image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
