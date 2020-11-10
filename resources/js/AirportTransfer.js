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
import AirportPickup from './components/ClientView/AirportPickup';

import './css/App.css';

function AirportTransfer() {
  return (
    <div className="App">
        <Header></Header>
        <div>Airport Transfers</div>
        <Footer></Footer>
    </div>
  );
}

export default AirportTransfer;
