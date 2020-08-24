import React, { Component } from 'react';
import bespoke_img from '../../img/bespoke.jpg';

class Bespoke extends Component{

    render(){
        return (
            <div>
                <div className="mt-5 w-100 text-white" style={{backgroundColor: '#252525'}}>
                    <div className="row no-gutters">
                        <div className="col-12 col-sm-6">
                            <img src={bespoke_img} href="" alt="bespoke" style={{maxWidth: '100%'}}/>
                        </div>
                        <div className="col-12 col-sm-6 p-5">
                            <div className="h3 text-center">Bespoke Tours</div>
                            <p className="text-center">Lorem ipsum dolor sit amet, curabitur nec lacus pellentesque ut facilisis.</p>
                            <form>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="col">
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <input type="tel" className="form-control" placeholder="Telephone"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Country"/>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <textarea id="messageTxt" className="form-control" rows="3" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="form-row mb-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-warning">Inquire Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bespoke;