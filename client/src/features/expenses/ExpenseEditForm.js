import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { editExpense } from '../user/UserSlice';

const ExpenseEditForm = () => {

    // TO DO: To make the changes reflect right away after submitting the update
    const [merchant, setMerchant] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    const loggedIn = useSelector(state => state.auth.loggedIn);
    const user = useSelector(state => state.user.data)

    const dispatch = useDispatch();
    const params = useParams(); 
    const navigate = useNavigate('');

    const [formData, setFormData] = useState({
        merchant: merchant,
        date: date,   
        amount: amount
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}/expenses/${params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            dispatch(editExpense(data))
            // navigate('/expenses')
        })
    }

    if (loggedIn) {
        return (
            <div className='visit-edit-div'>
                <form onSubmit={handleSubmit}>
                    Expense Edit Form ⬇️<br/>
                    <label>Merchant</label>
                    <input type="text" name='merchant' value={formData.merchant} onChange={handleChange} /><br/>
                    <label>Date</label>
                    <input type="text" name='date' value={formData.date} onChange={handleChange} /><br/>
                    <label>Amount</label>
                    <input type="text" name='amount' value={formData.amount} onChange={handleChange} /><br/>
                    <button type="submit">Edit</button>
                </form>
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
}

export default ExpenseEditForm