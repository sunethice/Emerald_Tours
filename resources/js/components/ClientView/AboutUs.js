import React, { Component } from 'react';
import aboutus from '../../img/aboutus.jpg';

// import cookie from "react-cookies";
//use this tutorial to translate functionality https://dev.to/robghchen/how-to-use-google-translate-api-27l9
// import { googleTranslate } from "../../utils/googleTranslate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../../css/AboutUs.css';

class AboutUs extends Component{

    render(){
        return (
            <div className="container bg-white mt-5 p-4">
                <div className="row">
                    <div className="col-sm-12 col-lg-5">
                        <div className="h2 section-title text-center">About Us</div>
                        <p className="text-justify">
                            Emerald Tours PVT LTD is a travel agency founded out of passion for travel, our team has years of
                            experience in organizing stays in Sri Lanka and the Maldives.<br/><br/>
                            Our motto is tailor-made holidays - each time we prepare an offer tailored to the needs of guests,
                            regarding the number of people, accommodation, and favorite form of spending free time.
                            We can plan crazy climbs, visiting monuments or sweet laziness on the beaches.
                            We talk to each client about their preferences and needs, each offer is basically created together with
                            the guests.<br/><br/>
                            We also adhere to the principle that every guest should feel as comfortable with us as possible, we
                            provide full service for each trip, from airport pickup, through transfers, cars, drivers, hotel reservations,
                            optional trips, reservations and purchase of tickets for planned additional attractions, etc.<br/><br/>
                            It is important to us that thanks to us our guests can experience an unforgettable holiday of life, free
                            from stress and worries. We are sincerely in love with both our destinations and it is our greatest joy to
                            make our clients love these places as much as we do, to have an opportunity to expierience local
                            culture, nature, local people&#39;s warmth, taste the wonderful flavors and the atmosphere of true
                            relaxation.
                        </p>
                    </div>
                    <div className="col-lg-4 h-100">
                        <img className="d-sm-none d-md-block w-100 h-100" src={aboutus} alt=""/>
                    </div>
                    <div className="col-sm-12 col-lg-3 pt-4 pt-md-0">
                        <span className="h2">why book with us?</span>
                        <ul className="aboutus-ul pt-3 list-unstyled">
                            <li className="text-left px-5 px-md-0 pb-2">
                                <FontAwesomeIcon icon={faCheck} />&nbsp;Tailor Made Tours
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <FontAwesomeIcon icon={faCheck} />&nbsp;Over 50 years of Industry Experience
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <FontAwesomeIcon icon={faCheck} />&nbsp;South Asia’s First Carbon Neutral Fleet
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <FontAwesomeIcon icon={faCheck} />&nbsp;Public Liability Insurance of 3 Million
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <FontAwesomeIcon icon={faCheck} />&nbsp;Book your Transfers &amp; Excursions Online
                            </li>
                            <li className="text-left px-5 px-md-0 pb-2">
                                <FontAwesomeIcon icon={faCheck} />&nbsp;Value for Money
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        );
    }
}

export default AboutUs;
