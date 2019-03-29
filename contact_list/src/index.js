import React, {Component} from 'react';
import {render} from 'react-dom';
import ContactList from './ContactList/ContactList';



class App extends Component{
    CONTACTS = [
        {
            id: 1,
            name: 'Darth Vader',
            phoneNumber: '+250966666666',
            image: 'img/darth.gif',
            email: '1111',
            adr: "222"
        }, {
            id: 2,
            name: 'Princess Leia',
            phoneNumber: '+250966344466',
            image: 'img/leia.gif',
            email: '1111',
            adr: "222"
        }, {
            id: 3,
            name: 'Luke Skywalker',
            phoneNumber: '+250976654433',
            image: 'img/luke.gif',
            email: '1111',
            adr: "222"
        }, {
            id: 4,
            name: 'Chewbacca',
            phoneNumber: '+250456784935',
            image: 'img/chewbacca.gif',
            email: '1111',
            adr: "222"
        }
    ];

    state ={
        displayContacts: this.CONTACTS
    }

    

    render(){
       // console.log(this.state.displayContacts)
        return(
            <div>
                <input onChange={this.handleSearch}/>
                <ContactList contacts = {this.state.displayContacts}/>
            </div>
        )
    }

    handleSearch = (event) => {
        var searchQuery = event.target.value.toLowerCase();
        var displayContacts = this.CONTACTS.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayContacts: displayContacts
        });
    }
}

render(<App />, document.getElementById('root'));


