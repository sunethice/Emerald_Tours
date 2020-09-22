import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Excursions extends Component{

    render(){
        return (
            <>
                <button onClick={ this.onButtonClick }>hello Excursions</button>
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
