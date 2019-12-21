import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
    
    static defaultProps = {
        height: 100,
        width: 100,
        color: 'white',
    }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt){
       this.props.removeBox(this.props.id)
    }

    render(){
        
        const boxStyling = {
            height: this.props.height + "px",
            width: this.props.width + "px",
            backgroundColor: this.props.color,
        }
        
        return(
            <div style={boxStyling} onClick={this.handleClick}></div>
        )
    }
}

export default Box; 