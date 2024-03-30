import { useState } from "react"
const AddNote = ({handleAddNote}) => {
    const [noteText,setNoteText] =useState('')
    const caracterLimit = 200;

    const handleChange = (event) =>{
        if(caracterLimit-event.target.value.length >=0){
            setNoteText(event.target.value);
            console.log(handleChange);
        }
         
    }

    const handleClick = (event) =>{
        if(noteText.trim().length >0){
            handleAddNote(noteText);
            setNoteText('')
        }
    }
    return (
        <div className="note new">
            <textarea  cols="10" rows="8" placeholder="type to add a note"
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{caracterLimit-noteText.length} remaining</small>
                <button className="save" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}
export default AddNote