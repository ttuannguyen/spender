import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NoteDeleteButton = ({note, expense}) => {
    // const { user, toggle, setToggle } = useContext(UserContext);

    // const user = useSelector(state => state.user.data)
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`/expenses/${expense.id}/notes/${note.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
        })
        // navigate(`/categories/${params.id}`)
        // dispatch(setToggle())
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default NoteDeleteButton