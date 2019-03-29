import React, {Component} from 'react';
import {render} from 'react-dom';

class Timer extends Component{
    state = {
        seconds: 0
    }

    componentDidMount(){
        this.timer =  setInterval(()=>this.setState({seconds: this.tick()}),1000)
    }

    tick = () => this.state.seconds +1

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    handlerStop = ( ) =>{
        clearInterval(this.timer)
    }

    handlerReset = () =>{
        this.setState({seconds: 0})
    }

    handlerStart = () =>{
        this.timer =  setInterval(()=>this.setState({seconds: this.tick()}),1000)
    }

    render(){
        return(
            <div>
                <p>{this.state.seconds}</p>
                <button onClick={this.handlerStop}>stop</button>
                <button onClick={this.handlerReset}>reset</button>
                <button onClick={this.handlerStart}>start</button>
            </div>
        )
    }
}

render(<Timer />, document.getElementById('root'));


