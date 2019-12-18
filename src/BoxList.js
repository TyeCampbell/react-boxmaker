import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';


class BoxList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <NewBoxForm/>
            </div>
        )
    }
}

export default BoxList;





