import React from 'react';
import Showcase from './components/ClientView/Showcase';
import Header from './components/ClientView/Header';
import Footer from './components/ClientView/Footer';
import Aboutus from './components/ClientView/AboutUs';
import Package from './components/ClientView/Package';
import Gallery from './components/ClientView/Gallery';
import Bespoke from './components/ClientView/Bespoke';
import Excursions from './components/ClientView/Excursions';
import OurTeam from './components/ClientView/OurTeam';
import Testimonials from './components/ClientView/Testimonials';

import './css/App.css';

function Customer() {
  return (
    <div className="App">
        <Header></Header>
        <Showcase></Showcase>
        <Aboutus></Aboutus>
        <Gallery></Gallery>
        <Package></Package>
        <Bespoke></Bespoke>
        <Excursions></Excursions>
        <Testimonials></Testimonials>
        <OurTeam></OurTeam>
        <Footer></Footer>
    </div>
  );
}

export default Customer;
