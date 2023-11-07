import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addNewNoteToExpense } from '../expenses/ExpensesSlice';
import { addNote, resetNoteActionStatus } from '../user/UserSlice';
import { useNavigate } from 'react-router-dom';


const NoteAddForm = () => {

    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.user.loggedIn);
    // const errors = useSelector(state => state.user.noteErrors);
    const errors = useSelector(state => state.user.errors);
    const user = useSelector(state => state.user.entities);
    const noteActionStatus = useSelector(state => state.user.noteActionStatus);
    const navigate = useNavigate()

    // console.log(user.notes.length)

    useEffect(() => {
        if(noteActionStatus === 'fulfilled') {
            navigate('/notes')
            // dispatch(resetNoteActionStatus())
        }
    }, [noteActionStatus, navigate])
    
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

    if (loggedIn) {
        return (
            <div id="note-add-form">
                <h4>Let's reflect on your spending!</h4>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='content'>Note:</label>
                        <textarea type="text" className='form-control' id='content' name='content' value={formData.content} onChange={handleChange} /><br/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add!</button>
                </form>
                {errors?.map(error => <p key={error}>{error}</p>)}
            </div>
    )
    } else {
        return (<h4>Please login or create an Account</h4>) 
    }
    
}

export default NoteAddForm