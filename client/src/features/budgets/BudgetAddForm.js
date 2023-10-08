import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBudget } from './BudgetsSlice';

const BudgetAddForm = () => {

    const dispatch = useDispatch()
    // const budgets = useSelector(state => state.budgets.entities)
    const budgets = ['Rent & Utilities', 'Groceries', 'Entertainment', 'Essentials', 'Transportation', 'Subscriptions', 'Other']
    const errors = useSelector(state => state.budgets.errors)
    const loggedIn = useSelector(state => state.user.loggedIn)

    // console.log(errors)

    const budgetsOptions = budgets.map(b => <option key={b}>{b}</option>)

    const [formData, setFormData] = useState({
        name:'',
        amount:''
    });
    console.log(formData)

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
            name:'',
            amount:''
        })

        // ISSUE: Async is going to skip to this step and navigate to /budgets
        // Solution: If the new category exists and there are no errors, navigate
        // How to test if the new category has been created? explore .length
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
                    <div className='dropdown'> 
                        <label>Budget:</label>
                        {/* TO DO: Reset dropdown after submit */}
                        <select name='name' onChange={handleChange}>
                            <option value="none" id="none" selected disabled hidden> -- select an option -- </option>
                            {budgetsOptions}
                        </select>
                        {/* {dropdown()} */}
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} /><br/>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" className="form-control" id="amount" name="amount" value={formData.amount} onChange={handleChange} /><br/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
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