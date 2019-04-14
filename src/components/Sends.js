import React, { Component } from 'react';

class Sends extends Component {
    state = { input: '' }
    handleChange = (e) => {
        this.setState( {input: e.target.value});
    }
    handleSubmit = (e) =>{
        e.preventDafault();
        // todo
    }
    render() { 
        return ( 
            <form onSubmit ={this.handleSubmit}>
                <input value = {this.state.input} onChange = {this.handleChange} />
                <button type = "submit">setting</button>
            </form>
         );
    }
}
 
export default Sends;