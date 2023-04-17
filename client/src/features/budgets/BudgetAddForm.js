import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBudget } from './BudgetsSlice';

const BudgetAddForm = () => {

    const dispatch = useDispatch()
    const budgets = useSelector(state => state.budgets.entities)
    const errors = useSelector(state => state.budgets.errors)
    const loggedIn = useSelector(state => state.user.loggedIn)

    // console.log(errors)

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
        dispatch(addBudget(formData))
        
        setFormData({
            ...formData, 
            name:''
        })

        // ISSUE: Async is going to skip to this step and navigate to /budgets
        // Solution: If the new category exists and there are no errors, navigate
        // How to test if the new category has been created? length
        // For now we can remove redirect
        // if (!errors) {
        //     navigate('/categories')
        // }

    }

    if (loggedIn) {
        return (
            <div id='category-add'>
                <h4>Add a Budget</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} /><br/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add!</button>
                    {/* {errors?.map(error => <p key={error}>{error}</p>)} */}
                </form>
                {/* {errors?.map(error => <p key={error}>{error}</p>)} */}
                {/* {errorList?.map(error => <p key={error}>{error}</p>)} */}
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>) 
    }
}

export default BudgetAddForm