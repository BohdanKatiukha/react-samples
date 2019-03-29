import React, {Component} from 'react';
import {render} from 'react-dom';
import ToDoItem from './ToDoItem'

class ToDo extends Component{

    state = {
        toDoList: [],
        input: ''
    }

    componentDidMount(){
        var toDoList = JSON.parse(localStorage.getItem('toDoList'))
        if(toDoList) this.setState({toDoList: toDoList})
    }

    componentDidUpdate(preveProps, prevState){
        // if(prevState.toDoList !== this.state.toDoList){
        //     this._updateLocalStorage()
        // }
        console.log(this.state.toDoList)
    }

    _updateLocalStorage = () => {
        var toDoList = JSON.stringify(this.state.toDoList);
        localStorage.setItem('toDoList', toDoList)
    }

    handlerChange=() =>{
        this.setState({input: this.refs.input.value})
    }

    handlerAdd = () => {
        if (this.state.input){
            var newToDo = {
                text: this.refs.input.value,
                complete: true,
                id: Date.now()
            }
            var newToDoList = this.state.toDoList.slice()
            newToDoList.unshift(newToDo)
            
            this.setState({toDoList: newToDoList},this._updateLocalStorage)
            this.setState({input: ''})
           
        }
    }

    handlerFilterAll = () => {
        var toDoList = JSON.parse(localStorage.getItem('toDoList'))
        if(toDoList) this.setState({toDoList: toDoList})
    }

    handlerFilterComplete = () => {
        var newToDoList = JSON.parse(localStorage.getItem('toDoList'))
        this.setState({
            toDoList: newToDoList.filter((item)=>item.complete === false)
        })
    }

    handlerFilterNew = () =>{
        var newToDoList = JSON.parse(localStorage.getItem('toDoList'))
        this.setState({
            toDoList: newToDoList.filter((item)=>item.complete !== false)
        })
    }

    handleComplete = (item) => {
        var toDoList = this.state.toDoList.slice();
        toDoList.forEach((el)=>{
            if (el.id === item.id){
                el.complete = !item.complete
            }
        })
        this.setState({toDoList: toDoList},this._updateLocalStorage)
        console.log(this.state.toDoList)
    }

    handleDelete = (item) => {
        var newToDoList = JSON.parse(localStorage.getItem('toDoList'))
        newToDoList = newToDoList.filter((el)=>el.id !== item.id)
        this.setState({toDoList: newToDoList}, this._updateLocalStorage)
    }
    
    render(){
        const toDoList = this.state.toDoList.map((item) =>{
            return(
                <div className = 'to-do-item' key={item.id}>
                    <ToDoItem handleDelete = {this.handleDelete} handleComplete= {this.handleComplete}  item = {item}/>
                </div>
                
            )
        } )
           
        return(
            <div className = 'to-do'>
                <input className='input' ref='input' placeholder='Add...' value={this.state.input} onChange = {this.handlerChange}/>
                <button className='btnAdd' onClick={this.handlerAdd} >Add</button>
                {toDoList}
                <button className='btn' onClick={this.handlerFilterAll}>all</button>
                <button className='btn' onClick={this.handlerFilterComplete}>complete</button>
                <button className='btn' onClick={this.handlerFilterNew}>new</button>
            </div>
        )
    }
}

render(<ToDo />, document.getElementById('root'));

