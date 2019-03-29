import React, {Component} from 'react'

export default class SearchNote extends Component{

 
    render(){
        return(
            <div className='search-note'>
                <input ref = 'search' className='search' placeholder='search...'  onChange={this.handleSearchNote}/>
            </div>
        )
    }

    handleSearchNote = (event) => {  
        this.props.handleSearchNotes(event.target.value)
    }
} 