import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Notes = () => {

    const user = useSelector(state => state.user.entities)
    // console.log(user.notes)
    const notesList = user.notes.map(note => <li key={note}>{note.content}</li>)

    return (
        <div>
            <p>Keep track of your spending habits with notes!</p>
            {notesList}
            <Link to={'/notes/new'}>  
                <button>Add a Note</button>
            </Link>
        </div>
    )
}

export default Notes