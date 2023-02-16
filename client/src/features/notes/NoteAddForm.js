import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addNewNoteToExpense } from '../expenses/ExpensesSlice';
import { addNote } from '../user/UserSlice';
import { setToggle } from '../auth/ToggleSlice';


const NoteAddForm = () => {

    const dispatch = useDispatch();
    
    // const user = useSelector(state => state.user.data)
    const [formData, setFormData] = useState({
        content:''
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    // ISSUE: The new note renders after 2 refreshes
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNote(formData))

        // to reset form
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
            </div>
    )
}

export default NoteAddForm