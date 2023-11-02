import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteNote, resetNoteActionStatus } from '../user/UserSlice';

const NoteDeleteButton = ({note}) => {
    // const { user, toggle, setToggle } = useContext(UserContext);

    const noteActionStatus = useSelector(state => state.user.noteActionStatus);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(noteActionStatus === 'fulfilled') {
            dispatch(resetNoteActionStatus())
        }
    }, [noteActionStatus])

    const handleClick = () => {
        dispatch(deleteNote(note))
        dispatch(resetNoteActionStatus())
        // navigate('/notes')
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default NoteDeleteButton