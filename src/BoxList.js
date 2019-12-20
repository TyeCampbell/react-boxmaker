import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';


class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [],
        }
    }

    createNewBox(h, w, color) {
        alert("New Box with a height of: " + h +". A width of: " + w + ". And color of: " + color + ".")
        // this.setState(st => ({
        //     boxes: st.boxes.concat(<Box/>)
        // }));

    }



    render() {
        return(
            <div>
                <NewBoxForm createNewBox={this.createNewBox}/>
                <Box/>
                {this.state.boxes}
            </div>
        )
    }
}

export default BoxList;





