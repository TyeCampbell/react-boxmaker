import React, { Component } from 'react';

class NewBoxForm extends Component {
    
    static defaultProps = {
        height: 100,
        width: 100,
        color: 'white',
    }

    constructor(props){
        super(props);
        this.state = { height: '', width: '', color: '',};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        //createBox
        this.props.createNewBox(this.state.height, this.state.width, this.state.color);

        this.setState({height:'', width:''});
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