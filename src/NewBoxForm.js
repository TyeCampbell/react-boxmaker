import React, { Component } from 'react';

class NewBoxForm extends Component {

    constructor(props){
        super(props);
        this.state = { height: '', width: '', color: '',};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if (this.state.height === ''){
            alert("Please fill out a height create a box")
        } else if (this.state.width === '') {
            alert("Please fill out a width to create a box.")
        } else if (this.state.color === '') {
            alert("Please fill out a color to create a box.")
        } else {    
            //createBox
            this.props.createNewBox(this.state.height, this.state.width, this.state.color);
    
            this.setState({height:'', width:'', color: ''});
        }
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
                     <label htmlFor='height'>Height: </label>
                     <input value={this.state.height} name='height' onChange={this.handleChange}/>
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