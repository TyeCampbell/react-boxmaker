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
        
        const id = uuid()

        const newBox = <Box key={id} id={id} height={h} width={w} color={color} removeBox={this.removeBox}/>;

        this.setState(st => ({
            boxes: st.boxes.concat(newBox)
        }));

    }

    removeBox(id) {
        console.log(id);
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





