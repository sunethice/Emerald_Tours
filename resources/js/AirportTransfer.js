import React, { useState, useEffect } from "react";
import Header from "./components/ClientView/Header";
import Footer from "./components/ClientView/Footer";
import Showcase from "./components/ClientView/Showcase";
import TrasferDetails from "./components/AirportTransfer/TransferDetails";
import TransferInquiry from "./components/AirportTransfer/TransferInquiry";
import "./css/AirportTransfers.css";
import "./css/App.css";

function AirportTransfer() {
    // const [transferData, setData] = useState([]);

    // useEffect(() => {
    //     async function fetchMyAPI() {
    //         const result = await axios("/api/gettransferlist");
    //         if (result.status == 200) {
    //             setData(result.data);
    //         } else {
    //             notifyService.notify(
    //                 result.data.message,
    //                 notifyService.Notifications.Failure
    //             );
    //         }
    //     }

    //     fetchMyAPI();
    // }, []);

    // useEffect(async () => {
    //     const result = await axios("/api/gettransferlist");
    //     if (res.status == 200) {
    //         setData(result.data);
    //     } else {
    //         notifyService.notify(
    //             res.data.message,
    //             notifyService.Notifications.Failure
    //         );
    //     }

    //     // axios
    //     //     .get("/api/gettransferlist")
    //     //     .then(res => {
    //     //         if (res.status == 200) {
    //     //             setData(res.data);
    //     //         } else {
    //     //             notifyService.notify(
    //     //                 res.data.message,
    //     //                 notifyService.Notifications.Failure
    //     //             );
    //     //         }
    //     //     })
    //     //     .catch(function(err) {
    //     //         notifyService.notify(err, notifyService.Notifications.Failure);
    //     //     });
    // });

    return (
        <div className="App">
            <Header></Header>
            <Showcase></Showcase>
            <TransferInquiry></TransferInquiry>
            <TrasferDetails></TrasferDetails>
            <Footer></Footer>
        </div>
    );
}

export default AirportTransfer;
