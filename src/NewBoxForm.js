import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = { length: '', width: '', color: '',};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        //createBox
        this.setState({length:'', width:''});
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    render(){
        return(
            <div>
                <h1>📦 Create-A-Box 📦</h1>
                <form onSubmit={this.handleSubmit}> 
                     <label htmlFor='length'>Length: </label>
                     <input value={this.state.length} name='length' onChange={this.handleChange}/>
                     <label htmlFor='width'>Width: </label>
                     <input value={this.state.width} name='width' onChange={this.handleChange}/>
                     <label htmlFor='color'>Color: </label>
                     <input value={this.state.color} name='color' onChange={this.handleChange}/>
                     <button>Create Box</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;