import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewNoteToExpense } from '../expenses/ExpensesSlice';
import { setToggle } from '../auth/ToggleSlice';


const NoteAddForm = ({expense}) => {

    const dispatch = useDispatch();
    
    const [errorsList, setErrorsList] = useState([]);
    const user = useSelector(state => state.user.data)


    const [formData, setFormData] = useState({
        content:'',
        expense_id: expense.id
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    // ISSUE: The new note renders after 2 refreshes
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewNoteToExpense(formData))

        // to reset form
        setFormData({
            content:''        
        })

        // fetch(`/expenses/${expense.id}/notes`,{
        //     method:'POST',
        //     headers:{'Content-Type': 'application/json'},
        //     body:JSON.stringify(formData)
        // })
        // .then(res => res.json())
        // .then(json => {
        //     if (json) {
        //         console.log(json)
        //         dispatch(addNote(json))
        //     } else {
        //         const errorItems = json.errors.map(e => <li key={e.id}>{e}</li>)
        //         setErrorsList(errorItems)
        //     }
        // })
        // dispatch(setToggle())
    }



    return (
            <div>
                <h4>Add an Note</h4>
                <form onSubmit={handleSubmit}>
                    <label>Content</label>
                    <textarea type="text" name='content' value={formData.content} onChange={handleChange} /><br/>
                    <button type="submit">Add!</button>
                </form>
                {errorsList}
            </div>
    )
}

export default NoteAddForm