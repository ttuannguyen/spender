import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const NoteDeleteButton = ({note}) => {
    // const { user, toggle, setToggle } = useContext(UserContext);

    // const user = useSelector(state => state.user.data)
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(note)
        // dispatch(deleteNote(params))
        // navigate('/notes')
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default NoteDeleteButton