import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory } from './CategoriesSlice';

const CategoryAddForm = () => {

    // const { addSecretSpot } = useContext(UserContext);
    const dispatch = useDispatch()
    const [errorsList, setErrorsList] = useState([]);
    const [formData, setFormData] = useState({
        name:''
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormData({
            name:''
        })

        fetch('/categories',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                dispatch(addCategory(data))
            } else {
                const errorItems = data.errors.map(e => <li key={e.id}>{e}</li>)
                setErrorsList(errorItems)
            }
        })
    }

    return (
        <div>
        <h4>Add a Category</h4>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} /><br/>
            <button type="submit">Add!</button>
        </form>
        {errorsList}
    </div>
    )
}

export default CategoryAddForm