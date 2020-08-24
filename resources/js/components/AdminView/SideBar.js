import React, { Component } from 'react';
import {Button, Collapse} from 'react-bootstrap';

import './SideBar.css';
import TR01 from '../../img/TR01.jpg';

class SideBar extends Component{
    
    constructor(props, context) {
		super(props, context);

		this.state = {
			open: false,
		};
    }
    
    render(){
        const { open } = this.state;
        
        return (
            <nav id="sidebar">
                <div className="pt-5 pb-3">
                    <img className="sidebar-img rounded-circle d-flex mx-auto" src={TR01} href="#d"></img>    
                    <h3 className="text-center py-3">Seneth De Silva</h3>
                </div>

                <ul className="list-unstyled">
                    <li>
                        <a className="p-3" href="#sws">
                            <span className="fa fa-gift mr-3"></span>
                            Dashboard
                        </a>
                    </li>
                    <li className="">
                        <a className="dropdown-toggle menu-collapse p-3" onClick={() => this.setState({ open: !open })} aria-controls="pageSubmenu" aria-expanded={open}>Home</a>

                        <Collapse in={open}>
                            <ul id="pageSubmenu" className="list-unstyled">
                                <li>
                                    <a href="#dd">About us</a>
                                </li>
                                <li>
                                    <a href="#ww">Gallery</a>
                                </li>
                                <li>
                                    <a href="#ww">Packages</a>
                                </li>
                                <li>
                                    <a href="#ww">Our Team</a>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li>
                        <a className="p-3" href="#w">Portfolio</a>
                    </li>
                    <li>
                        <a className="p-3" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideBar;