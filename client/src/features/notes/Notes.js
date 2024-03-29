import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from 'react-bootstrap';
import NoteDeleteButton from './NoteDeleteButton';
import { resetBudgetActionStatus } from '../budgets/BudgetsSlice';
import { resetNoteActionStatus } from '../user/UserSlice';


const Notes = () => {

    const user = useSelector(state => state.user.entities)
    console.log(user.notes)
    const loggedIn = useSelector(state => state.user.loggedIn)
    const dispatch = useDispatch();

    const noteActionStatus = useSelector(state => state.user.noteActionStatus);
    console.log(noteActionStatus)

    useEffect(() => {
        if(noteActionStatus === 'fulfilled') {
            dispatch(resetNoteActionStatus())
        }
    }, [noteActionStatus])

    
    if (loggedIn) {
        const notesList = user.notes.map(note => {
        return (

            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={note.id}>
                {note.content}
                <NoteDeleteButton note={note}/>
            </ListGroup.Item>
            
            // Link to note show page
            // <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none'}}>
            //     <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={note.id}>
            //     {note.content}
            // </ListGroup.Item>
            // </Link>
        )
        })
        
        return (
            <div>
                <div className='notebook'>
                    <h3>Keep track of your spending habits...</h3>
                <ListGroup className='my-3'>
                    {notesList}
                </ListGroup>
                </div>
                <div className='add-note'>
                    <Link to={'/notes/new'}>  
                        <button className="btn btn-secondary">Add a Note</button>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
    
}

export default Notes