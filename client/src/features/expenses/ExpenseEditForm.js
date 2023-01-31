import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { editExpense } from './ExpensesSlice';


const ExpenseEditForm = () => {

    // const { user, updateVisit, loggedIn, toggle, setToggle } = useContext(UserContext);
    const params = useParams(); 
    const [merchant, setMerchant] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate('');
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const dispatch = useDispatch();
    
    // const [visitFound, setVisitFound] = useState({});
    // if (!visitFound.id && user.id) {
    //     const vf = user.visits.find(v => v.id === parseInt(params.id)); 
    //     setVisitFound(vf)
    // }

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
        fetch(`/expenses/${params.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            dispatch(editExpense(data))
            navigate('/expenses')
        })
    }

    if (loggedIn) {
        return (
            <div className='visit-edit-div'>
                <form onSubmit={handleSubmit}>
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