// import React, { Component } from  'react';

// class Content extends Component{
//     render() {
//         return (
//             <div id="content">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <div className="container-fluid">
//                         <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <i className="fas fa-align-justify"></i>
//                         </button>

//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="nav navbar-nav ml-auto">
//                                 <li className="nav-item active">
//                                     <a className="nav-link" href="#">Page</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Page</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Page</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Page</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//                 <div id="dashboard_content">

//                 </div>
//             </div>
//         );
//     }
// }
// export default Content;


import React from "react";

const Content = ({ children, noNavbar, noFooter }) => (
  <div id="content">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-justify"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Page</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div id="dashboard_content">
        {children}
    </div>
</div>
);

export default Content;
