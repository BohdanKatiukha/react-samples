import React, {Component} from 'react';
import Note from '../Note/Note'
import Masonry from 'masonry-layout';

export default class NoteList extends Component{
       

    
    componentDidMount(){
        var grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }
    
    componentDidUpdate(prevProps){
        if(this.props.notes.length !== prevProps.notes.length ){
            this.msnry.reloadItems()
            this.msnry.layout()
        }
    }

    render(){

        const notels = this.props.notes.map((note) =>{
            return (
                <div key= {note.id} >
                    <Note note = {note} onDelete = {this.props.onDelete.bind(null, note)} />
                </div>
            )
        })

        return(
            <div className='notes-grid' ref='grid'>
                {notels}
            </div>
        )
    }
}