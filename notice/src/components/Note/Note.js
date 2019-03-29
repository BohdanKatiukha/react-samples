import React, {Component} from 'react'

export default class Note extends Component{

    randomColor = () => {
        var rgb = []
        for (var i = 0; i < 3; i++) {
            let r = Math.floor(Math.random() * 256)
            rgb.push(r)
        }
        return rgb
    }

    render(){
        console.log(this.randomColor());
        
        const color = {
            backgroundColor: `rgb(${this.randomColor()})`
            // backgroundColor: '#aaa'
        }
        return(
            <div className='note' style={color}>
                <span className="delete-note" onClick={this.props.onDelete}>x</span>
                {this.props.note.text}  
            </div>
        )
    }
}