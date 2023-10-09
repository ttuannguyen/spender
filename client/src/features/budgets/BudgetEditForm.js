import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editBudget } from './BudgetsSlice';

const BudgetEditForm = () => {

    const loggedIn = useSelector(state => state.user.loggedIn);
    const errors = useSelector(state => state.budgets.errors);    
    const budgets = useSelector(state => state.budgets.entities);
    
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate('');
    const params = useParams();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editBudget({params, amount}))
        navigate(`/budgets/${params.id}`)
    }

    return (
        <div className='budget-edit-form'>
            <h3>Budget Name</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='amount'>Amount</label>
                    <input type='text' className='form-control' id='amount' name='amount' value={amount} onChange={e => setAmount(e.target.value)} /><br/>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default BudgetEditForm