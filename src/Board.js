import React, {Component} from 'react';
import Note from './Note';
import { FaPlus } from 'react-icons/fa';

class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            notes : []
        }
        this.eachNote = this.eachNote.bind(this); 
        this.addNote = this.addNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.removeNote  = this.removeNote.bind(this);
        this.nextId = this.nextId.bind(this);
    }
    updateNote(newText,i){
        console.log('updating note at index',i,newText);
        this.setState(prevState=>({
            notes:prevState.notes.map(
                note=>(note.id!==i)? note: {...note,note:newText}
            )
        }))
    }

    addNote(text){
        this.setState(prevState=>({
            notes:[
                ...prevState.notes,
                {
                    id:this.nextId(),
                    note:text
                }
            ]
        }))
    }

    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    removeNote(id){
        this.setState(prevState =>({
            notes:prevState.notes.filter(note=>(note.id!==id))
        }))
        console.log("remove note")
    }

    eachNote(note,i){
        return(
            <Note key={i} index= {i}
            onChange={this.updateNote}
            onRemove={this.removeNote}>{note.note}</Note>
        )
    }
    render(){
        return(
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.addNote.bind(null,"New Note")}
                id="add"><FaPlus /></button>
            </div>
        )
    }
}

export default Board;