import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
    
    static defaultProps = {
        height: 100,
        width: 100,
        color: 'white',
    }

    render(){
        
        const boxStyling = {
            height: this.props.height + "px",
            width: this.props.width + "px",
            backgroundColor: this.props.color,
        }
        
        return(
            <div style={boxStyling} className='box'></div>
        )
    }
}

export default Box; 