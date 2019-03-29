import React, {Component} from 'react';
import { render } from 'react-dom'

class HelloWorld extends  Component{

    state = {
        value: 'strange'
    }

    render(){
        return ( 
            <div>
                <input id="helloInput" onChange={this.handleChange}/> 
                {console.log(this.state.value)}
                <h1>Hello {this.state.value === '' ? 'strange' : this.state.value} </h1>
            </div>
        )
    }

    handleChange = () =>{
        console.log(document.getElementById('helloInput').value)
        var val = document.getElementById('helloInput').value
        return this.setState({value: val})

    }

    
}




render(<HelloWorld />, document.getElementById('root'));

