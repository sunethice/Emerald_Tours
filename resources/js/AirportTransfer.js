import React from 'react';
import Header from './components/ClientView/Header';
import Footer from './components/ClientView/Footer';
import './css/AirportTransfers.css';
import './css/App.css';

function AirportTransfer() {
  return (
    <div className="App">
        <Header></Header>
        <div>
            <div className="container mapContainer mt-5">
                <div className="row mapRow">
                    <div className="col-12 mapCol">

                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default AirportTransfer;



