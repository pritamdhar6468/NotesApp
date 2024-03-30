import NotesList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';
const App = () =>{
  const [notes,setNotes] = useState([
    {
      id:nanoid(),
      text:"this is my first note",
      date:'12/2/2024'
    },
    {
      id:nanoid(),
      text:"this is my second note",
      date:'12/2/2024'
    },  {
      id:nanoid(),
      text:"this is my third note",
      date:'12/2/2024'
    },
    {
      id:nanoid(),
      text:"this is my four note",
      date:'1/2/2024'
    },
    {
      id:nanoid(),
      text:"this is my five note",
      date:'2/2/2024'
    },
  ])


  const addNote = (text) =>{
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleString()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id)=>{
    const newNotes=notes.filter((note)=>note.id !== id);
    setNotes(newNotes);
  }
  return <div className="container">
    <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
  </div>
}

export default App