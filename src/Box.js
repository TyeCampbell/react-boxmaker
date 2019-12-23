import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
    
    render(){
        
        const boxStyling = {
            height: this.props.height + "em",
            width: this.props.width + "em",
            backgroundColor: this.props.color,
        }
        
        return(
            <div style={boxStyling} className='box' onClick={this.props.removeBox}></div>
        )
    }
}

export default Box; 