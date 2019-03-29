import React, {Component} from 'react';


export default class ToDoItem extends Component{

    state = {
        check: ''
    }

    handleClick = () => {
        
        this.refs.input.checked = this.props.item.complete
        this.props.handleComplete(this.props.item)
    }

    componentDidMount(){
        this.refs.input.checked = !this.props.item.complete
    }

    handleDelete = () => {
            this.props.handleDelete(this.props.item)
        }
        
    render(){
        return(
            <div>
                <input ref='input' type='checkbox' onClick={this.handleClick}  />
                <div>{this.props.item.text}</div>
                <div onClick = {this.handleDelete}>X</div>
               
            </div>
        )
    }
}