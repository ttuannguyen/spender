import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBudget, resetBudgetActionStatus } from './BudgetsSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const BudgetAddForm = () => {

    const dispatch = useDispatch()
    // const budgets = useSelector(state => state.budgets.entities)
    const budgets = ['Rent & Utilities', 'Groceries', 'Entertainment', 'Essentials', 'Transportation', 'Subscriptions', 'Other']
    const errors = useSelector(state => state.budgets.errors)
    const loggedIn = useSelector(state => state.user.loggedIn)
    const budgetActionStatus = useSelector(state => state.budgets.budgetActionStatus)
    const navigate = useNavigate()

    // console.log(errors)

    useEffect(() => {
        if(budgetActionStatus === 'fulfilled') {
            navigate('/my_budgets')
            dispatch(resetBudgetActionStatus())
        }
    }, [budgetActionStatus, navigate])
    
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

        // setFormData({
        //     ...formData, 
        //     name:'',
        //     amount:''
        // })
    }

    if (loggedIn) {
        return (
            <div id='category-add'>
                <h4>Add a Budget</h4>

                <Form onSubmit={handleSubmit}>
                    <Form.Label>Budget</Form.Label>
                    <Form.Select aria-label="Default select example" name='name' onChange={handleChange}>
                        <option value="none" selected disabled hidden>-- select a budget --</option>
                        {budgetsOptions}
                    </Form.Select>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control name="amount" value={formData.amount} onChange={handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                {/* <form onSubmit={handleSubmit}>
                    <div className='dropdown'> 
                        <label>Budget:</label>
                        TO DO: Reset dropdown after submit
                        <select name='name' onChange={handleChange}>
                            <option value="none" id="none" selected disabled hidden> -- select an option -- </option>
                            {budgetsOptions}
                        </select>
                        {dropdown()}
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} /><br/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" className="form-control" id="amount" name="amount" value={formData.amount} onChange={handleChange} /><br/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form> */}

                <div className='my-3'>{errors?.map(error => <p key={error}>{error}</p>)}</div>
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>) 
    }
}

export default BudgetAddForm