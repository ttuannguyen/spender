import React from 'react'
import { useSelector } from "react-redux";
import NoteAddForm from './NoteAddForm';


const Notes = () => {

    const user = useSelector(state => state.user.entities)
    // console.log(user.notes)
    const notesList = user.notes.map(note => <li key={note}>{note.content}</li>)

    return (
        <div>
            {notesList}
            <NoteAddForm />
        </div>
    )
}

export default Notes