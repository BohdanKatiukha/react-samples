import React, {Component} from 'react';
import Contact from '../Contact/Contact'

export default class ContactList extends Component{
    
    render(){
        
        const contactLs = this.props.contacts.map((contact) =>
            <li key={contact.id}>
                <Contact contact = {contact} /> 
            </li>
        )
        return <ul>{contactLs}</ul>
    }
}