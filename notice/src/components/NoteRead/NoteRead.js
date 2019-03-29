import React, {Component} from 'react'
import './style.css'

export default class NoteRead extends Component{
    state = {
        addNote: '',
        active: false
    }
    render(){
        return(
            <div className='note-editor'>
                <textarea className='textarea' placeholder='Write new note...' ref='textarea'  onChange={this.handlerChange} ></textarea>
                <button className='add-button' onClick={this.handlerAdd}>Add</button>
            </div>
        )
    }

   

    handlerChange = () => this.setState({addNote: this.refs.textarea.value})

    handlerAdd = () =>{
        const value = this.refs.textarea.value
        var newNote = {
            text: value,
            color: '',
            id: Date.now()
        }

        this.props.onNoteAdd(newNote)

        this.refs.textarea.value = ''
        this.setState({
            addNote: value
        })
    }
    
}