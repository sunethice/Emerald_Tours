import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../css/Excursion.css';
class Excursions extends Component{

    render(){
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title h2">
                                Excursions
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, curabitur nec
                                lacus pellentesque ut facilisis, lacus iaculis
                                turpis interdum pede, sapien quis amet vitae,
                                erat parturient, turpis congue sit. Hac nulla
                                phasellus ornare. Volutpat risus ipsum nulla
                                ducimus erat. Scelerisque eu imperdiet wisi
                                wisi, sit libero sed ipsum sodales phasellus,
                                odio vel ac non ac, sodales viverra, metus
                                volutpat quis rutrum diam ac integer. Posuere
                                nullam eu vestibulum non nonummy. Metus purus
                                ac malesuada vitae ut qui, sed rhoncus
                                nonummy, massa ac urna risus, faucibus aliquam
                                malesuada fusce gravida urna.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-3 mt-3 excursion-card-rounded">
                                <div className="row no-gutters">
                                    <div className="col">
                                        <div className="card-header excursion-header">
                                            <img className="" width="100%" height="100%" src={process.env.MIX_PUBLIC_IMAGE_URL + 'colombo_excursion.jpg'}/>
                                        </div>
                                        <div className="card-footer excursion-footer">
                                            <p className="p-3 float-left excursion-name">Colombo city tour</p>
                                            <button className="btn btn-info float-right excursion-btn">Explore</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 mt-3 excursion-card-rounded">
                                <div className="row no-gutters">
                                    <div className="col">
                                        <div className="card-header excursion-header">
                                            <img className="" width="100%" height="100%" src={process.env.MIX_PUBLIC_IMAGE_URL + 'galle_excursion.jpg'}/>
                                        </div>
                                        <div className="card-footer excursion-footer">
                                            <p className="p-3 float-left excursion-name">Galle tour</p>
                                            <button className="btn btn-info float-right excursion-btn">Explore</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 mt-3 excursion-card-rounded">
                                <div className="row no-gutters">
                                    <div className="col">
                                        <div className="card-header excursion-header">
                                            <img className="" width="100%" height="100%" src={process.env.MIX_PUBLIC_IMAGE_URL + 'sigiriya_excursion.jpg'}/>
                                        </div>
                                        <div className="card-footer excursion-footer">
                                            <p className="p-3 float-left excursion-name">Sigiriya tour</p>
                                            <button className="btn btn-info float-right excursion-btn">Explore</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    async onButtonClick(){
        let res = await axios.get('/api/packages');
        let projects = res.data;
        // console.log(`res ${JSON.stringify(res)}`);
    }
}

export default Excursions;
