import React, {Component} from 'react';

export default class Contact extends Component{
    state ={
        isOpen: true
    }

    render(){
        

        const {contact} = this.props
        console.log(contact)
        const inf = this.state.isOpen && <div><div>contact.email</div>  <div>contact.adr</div></div>
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.isOpen? 'Close': 'Open'}</button>
                <div>{contact.name}</div>
                <div>{contact.phoneNumber}</div>
                <div>{contact.image}</div>
                { inf }
                
            </div>
            
        )
    }

    handleClick = () =>{
        return this.setState({
            isOpen: !this.state.isOpen
        })
    }
}