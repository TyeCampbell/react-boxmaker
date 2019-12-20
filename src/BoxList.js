import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4'
import Box from './Box';


class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [],
        }
        this.createNewBox = this.createNewBox.bind(this);
    }

    createNewBox(h, w, color) {
        
        alert("New Box with a height of: " + h +". A width of: " + w + ". And color of: " + color + ".")

        const newBox = <Box key={uuid()} height={h} width={w} color={color}/>;

        this.setState(st => ({
            boxes: st.boxes.concat(newBox)
        }));

    }



    render() {
        return(
            <div>
                <NewBoxForm createNewBox={this.createNewBox}/>
                {this.state.boxes}
            </div>
        )
    }
}

export default BoxList;





