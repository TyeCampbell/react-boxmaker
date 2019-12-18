import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = { length: '', width: '', };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        //createBox
        this.setState({length:'', width:''});
    }

    handleChange(evt) {
        this.setState({
            length: evt.target.value,
        })
    }

    render(){
        return(
            <div>
                <h1>📦 Create-A-Box 📦</h1>
                <form onSubmit={this.handleSubmit}> 
                     <label htmlFor='length'>Length: </label>
                     <input value={this.state.length} onChange={this.handleChange}/>
                     <label htmlFor='width'>Width: </label>
                     <input/>
                     <button>Create Box</button>
                </form>
            <h1>{this.state.length}</h1>
            </div>
        )
    }
}

export default NewBoxForm;