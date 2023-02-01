import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from '../user/UserSlice';


const NoteAddForm = ({expense}) => {

    const dispatch = useDispatch();
    
    const [errorsList, setErrorsList] = useState([]);
    const user = useSelector(state => state.user.data)

    // const categoriesOptions = categories.map(c => <option value={c.id}>{c.name}</option>)

    // console.log(categories)
    const [formData, setFormData] = useState({
        content:'',
        expense_id: expense.id
    });

    // console.log(formData)

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        // to reset form
        setFormData({
            content:'',
            expense_id:''
        })

        fetch(`/users/${user.id}/notes`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(json => {
            if (json) {
                // dispatch(addNote(json))
                // dispatch(setToggle())
            } else {
                const errorItems = json.errors.map(e => <li key={e.id}>{e}</li>)
                setErrorsList(errorItems)
            }
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
                {errorsList}
            </div>
    )
}

export default NoteAddForm