import React, { Component } from 'react';
import aboutus from '../../img/aboutus.jpg';

class AboutUs extends Component{

    render(){
        return (
            <div className="container bg-white mt-5 p-4">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <div className="h3">About Us</div>
                        <p className="text-justify">Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis, 
                            lacus iaculis turpis interdum pede, sapien quis amet vitae, erat parturient, 
                            turpis congue sit. Hac nulla phasellus ornare. Volutpat risus ipsum nulla ducimus erat. 
                            Scelerisque eu imperdiet wisi wisi, sit libero sed ipsum sodales phasellus, 
                            odio vel ac non ac, sodales viverra, metus volutpat quis rutrum diam ac integer. 
                            Posuere nullam eu vestibulum non nonummy. Metus purus ac malesuada vitae ut qui, 
                            sed rhoncus nonummy, massa ac urna risus, faucibus aliquam malesuada fusce gravida urna. 
                            Sit risus proin etiam congue, a aenean. Lacus massa suspendisse facilisis, molestie sociis 
                            ultricies morbi odio amet, in condimentum suspendisse mauris rhoncus, quisque ante non vel 
                            mauris in suscipit, imperdiet cursus. Quaerat amet minim, wisi lectus, pellentesque maecenas 
                            facilisis enim. Id expedita tellus imperdiet vitae, imperdiet molestie hac pulvinar tristique. 
                            Luctus sit lacus orci placerat maecenas. Mauris nonummy wisi urna dis dui aliquet, vitae vivamus 
                            felis etiam augue, et nunc nulla felis tortor, at dolor quos vestibulum augue, sed vel a turpis nulla orci nec.
                        </p>
                    </div>
                    <div className="col-lg-4 h-100">
                        <img className="d-sm-none d-md-block w-100 h-100" src={aboutus} alt=""/>
                    </div>
                    <div className="col-sm-12 col-lg-2 pt-4 pt-md-0">
                        <span className="h2">why book with us?</span>
                        <ul className="aboutus-ul pt-3 list-unstyled">
                            <li className="text-left px-5 px-md-0 pb-2">
                                <i className="fa fa-check"></i>&nbsp;Tailor Made Tours
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <i className="fa fa-check"></i>&nbsp;Over 50 years of Industry Experience
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <i className="fa fa-check"></i>&nbsp;South Asia’s First Carbon Neutral Fleet
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <i className="fa fa-check"></i>&nbsp;Public Liability Insurance of 3 Million
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <i className="fa fa-check"></i>&nbsp;Book your Transfers &amp; Excursions Online
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <i className="fa fa-check"></i>&nbsp;Value for Money
                            </li>			
                        </ul>
                    </div>
                </div>
            </div> 
        );
    }
}

export default AboutUs;