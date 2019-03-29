import React, {Component} from 'react';
import {render} from 'react-dom';
import NoteRead from './components/NoteRead/NoteRead'
import NoteList from './components/NoteList/NoteList'
import SearchNote from './components/SearchNote/SearchNote'

class Notice extends Component {
    state = {
        notes: []
    }

    componentDidMount(){
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes) {
            this.setState({notes: localNotes})
        }
    }

    // componentDidUpdate(prevProps,prevState){
    //     if(prevState.notes !== this.state.notes){
    //         this._updateLocalStorage()
    //     }
    // }

    handleNoteAdd = (newNote) => {
        var newNotes = this.state.notes.slice()
        newNotes.unshift(newNote)
        this.setState({notes: newNotes},this._updateLocalStorage)
    }

    _updateLocalStorage = () => {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes)
    }

    handleDeleteNote = (note) =>{
        var noteId = note.id
        const newNote = this.state.notes.filter((note)=> note.id !== noteId)
        this.setState({ 
            notes: newNote
        },this._updateLocalStorage)
    }

    handleSearchNote = (text) =>{
       
        console.log(text)
         
        var newNotes = JSON.parse(localStorage.getItem('notes'))
        newNotes = newNotes.filter((note) => note.text.toLowerCase().indexOf(text.toLowerCase())!== -1)

        this.setState({
            notes: newNotes
        })

    }


    render(){
        return(
            <div className='notes-app'>
                <h2 className='app-header'>Note App</h2>
                <SearchNote  handleSearchNotes = {this.handleSearchNote} />
                <NoteRead  clearSearch={this.clearSearch} onNoteAdd={this.handleNoteAdd}/>
                <NoteList notes = {this.state.notes.slice()} onDelete = {this.handleDeleteNote}/>
            </div>
        )
    }
}

render(<Notice />, document.getElementById('mount-point'));


