import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addNewNoteToExpense } from '../expenses/ExpensesSlice';
import { addNote } from '../user/UserSlice';
import { setToggle } from '../auth/ToggleSlice';


const NoteAddForm = () => {

    const dispatch = useDispatch();
    // const errors = useSelector(state => state.user.noteErrors);
    const errors = useSelector(state => state.user.errors);
    const user = useSelector(state => state.user.entities);

    console.log(user.notes.length)
    
    // const user = useSelector(state => state.user.data)
    const [formData, setFormData] = useState({
        content:''
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNote(formData))

        setFormData({
            ...formData, 
            content:''
        })
    }

    return (
            <div>
                <h4>Add an Note</h4>
                <form onSubmit={handleSubmit}>
                    <label>Content</label>
                    <textarea type="text" name='content' value={formData.content} onChange={handleChange} /><br/>
                    <button type="submit">Add!</button>
                </form>
                {errors?.map(error => <p key={error}>{error}</p>)}
            </div>
    )
}

export default NoteAddForm