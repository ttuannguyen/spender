import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Notes = () => {

    const user = useSelector(state => state.user.entities)
    // console.log(user.notes)
    const loggedIn = useSelector(state => state.user.loggedIn)

    if (loggedIn) {
        const notesList = user.notes.map(note => <li key={note}>{note.content}</li>)
        return (
            <div>
                <div className='notebook'>
                    <h3>Keep track of your spending habits...</h3>
                {notesList}
                </div>
                <div className='add-note'>
                    <Link to={'/notes/new'}>  
                        <button className="btn btn-primary">Add a Note</button>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
    
}

export default Notes