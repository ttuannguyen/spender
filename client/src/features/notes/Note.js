import React from 'react'
import NoteDeleteButton from './NoteDeleteButton'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Note show page: WIP

const Note = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedIn = useSelector(state => state.user.loggedIn);

  const user = useSelector(state => state.user.entities)
  const note = user.notes.find(n => n.id ===parseInt(params.id))
  
  
  return (
    <div>
        {note.content}
        <NoteDeleteButton note={note}/>
    </div>
  )
}

export default Note