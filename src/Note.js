import React, { Component } from 'react';
import { FaPencilAlt, FaTrash, FaFileUpload  } from 'react-icons/fa';

class Note extends Component{

    constructor(props){
        super(props)
        this.state = {
            editing:false
        }
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }
    
    edit(){
        this.setState({
            editing:true
        })
    }
    remove(){
        alert("Removing note");
    }

    renderForm(){
        return(
            <div className="note">
                <form>
                    <textarea></textarea>
                    <button><FaFileUpload /></button>
                </form>
            </div>
        )
    }

    renderDisplay(){
        return(
            <div className ="note">
                <p>Learn React</p>
                <span>
                    <button id="edit" onClick={this.edit}><FaPencilAlt/></button>
                    <button id="remove" onClick={this.remove}><FaTrash/></button>
                </span>
            </div>
        )
    }
}

export default Note
