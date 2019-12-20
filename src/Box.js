import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
    constructor(props){
        super(props);

    }

    render(){
        
        const boxStyling = {
            height: '100px',
            width: '100px',
            backgroundColor: 'blue',
        }
        
        return(
            <div style={boxStyling} className='box'></div>
        )
    }
}

export default Box; 