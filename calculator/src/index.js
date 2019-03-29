import React, {Component} from 'react'
import {render} from 'react-dom'

class Calculator extends Component{

    state = {
        res: ''

    }

    render(){

        return(
            <div>
                <input id='a'/>
                <input id='b'/>
                <input id='res' value={this.state.res}/>
                <br/>
                <button id='+' onClick={this.add}>+</button>
                <button id='-' onClick={this.sub}>-</button>
                <button id='*' onClick={this.mult}>*</button>
                <button id='/' onClick={this.div}>/</button>
                
            </div>
        )
    }

    add = () => this.setState({res: +document.getElementById('a').value + +document.getElementById('b').value })
    sub = () => this.setState({res: +document.getElementById('a').value - +document.getElementById('b').value })
    mult = () => this.setState({res: +document.getElementById('a').value * +document.getElementById('b').value })
    div = () => this.setState({res: +document.getElementById('a').value / +document.getElementById('b').value })
    
   
}

render(<Calculator/>, document.getElementById('root'))