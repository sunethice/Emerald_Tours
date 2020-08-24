import React, { Component } from  'react';
import logo from '../../img/logo1.png';
import navIcon from '../../img/hamburger.svg';
import {Navbar, Nav} from 'react-bootstrap';
// import ReactFlagsSelect from 'react-flags-select';
 
//import css module
// import 'react-flags-select/css/react-flags-select.css';

// import { connect } from 'react-redux';

class Header extends Component{
    // renderContent(){
    //     switch(this.props.auth){
    //         case null:
    //             return;
    //         case false:
    //             return (
    //                 <li><a href="/auth/google">Login With Google</a></li>
    //             );
    //         default:
    //             return [
    //                     <li key="1"><Payments></Payments></li>,
    //                     <li key="2"><a href="/api/logout">logout</a></li>
    //             ];

    //     }
    // }

    render() {
        return (
            <Navbar className="sticky-top" expand="lg" style={{backgroundColor: '#012d6b'}}>
                <Navbar.Collapse className="order-1 order-lg-0" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="px-3 text-white" href="#Packages">Home</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#Packages">Packages</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#Gallery">Gallery</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#Excursions">Excursions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand className="mx-lg-auto w-75" href="#home">
                    <img className="d-block mx-lg-auto" style={{ width:'30%' }} src={logo} href="#" alt="Emerald Tours"></img>
                </Navbar.Brand>
                <Navbar.Collapse className="order-3" id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/* <ReactFlagsSelect defaultCountry="US" showSelectedLabel={false}/> */}
                        <Nav.Link className="px-3 text-white" href="#Blog">Blog</Nav.Link>
                        <Nav.Link className="px-3 text-white text-nowrap" href="#Explore">Explore SriLanka</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#">SignIn</Nav.Link>
                        <Nav.Link className="btn inquire-btn px-3 text-black text-nowrap">Inquire Now</Nav.Link>
                        {/* <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic"> */}
                                
                            {/* </Dropdown.Toggle> */}

                            {/* <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                        {/* <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="dropdown09">
                                <Dropdown.Item href="#fr"><span className="flag-icon flag-icon-fr"> </span>  French</Dropdown.Item>
                                <Dropdown.Item href="#it"><span className="flag-icon flag-icon-it"> </span>  Italian</Dropdown.Item>
                                <Dropdown.Item href="#ru"><span className="flag-icon flag-icon-ru"> </span>  Russian</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <img src={navIcon} alt="nav icon"/>
                </Navbar.Toggle>
            </Navbar>


            // <nav className="navbar navbar-expand-lg py-3" style={{backgroundColor: '#012d6b'}}>
            //     <div className="navbar-collapse collapse w-100 order-1 order-lg-0 menu-content">
            //         <div className="navbar-nav text-white">
            //             <a href="#" className="nav-item nav-link px-3 text-white active">Packages</a>
            //             <a href="#" className="nav-item nav-link px-3 text-white active">Tours</a>
            //             <a href="#" className="nav-item nav-link px-3 text-white">Excursions</a>
            //             <a href="#" className="nav-item nav-link px-3 text-white">Blog</a>
            //         </div>
            //     </div>
            //     <a className="navbar-brand mx-lg-auto text-white" href="#">
            //         <img className="d-block mx-lg-auto" style={{ width:'30%' }} src={logo} href="#" alt="Emerald Tours"></img>
            //     </a>
            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".menu-content">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="navbar-collapse collapse w-100 order-3 menu-content">
            //         <div className="navbar-nav ml-auto menu-content">
            //             <a href="#" className="nav-item nav-link px-3 text-white text-nowrap">Explore SriLanka</a>
            //             <a href="#" className="nav-item nav-link px-3 text-white">SignIn</a>
            //             <a href="#" className="nav-item btn inquire-btn px-3 text-black text-nowrap">Inquire Now</a>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}

// const mapStateToProps = ({ auth }) => {
//     return { auth };
// };

export default Header;