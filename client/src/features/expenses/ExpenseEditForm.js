import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { editExpense, resetExpenseActionStatus } from '../budgets/BudgetsSlice';

const ExpenseEditForm = () => {

    const loggedIn = useSelector(state => state.user.loggedIn);
    const errors = useSelector(state => state.budgets.errors);    
    const budgets = useSelector(state => state.budgets.entities);
    // const budgets2 = useSelector(state => state.budgets);
    // console.log(budgets2)
    const expenseActionStatus = useSelector(state => state.budgets.expenseActionStatus)
    const navigate = useNavigate();

    useEffect(() => {
        if(expenseActionStatus === 'fulfilled') {
            navigate(`/budgets/${params.budget_id}`)
            dispatch(resetExpenseActionStatus())
        }
    }, [expenseActionStatus, navigate])


    const dispatch = useDispatch();
    // const params = useParams(); 
    const params = useParams();

    const budget = budgets.find(b => b.id === parseInt(params.budget_id));
    const expense = budget.expenses.find(e => e.id === parseInt(params.id));


    const [formData, setFormData] = useState({
        merchant: expense.merchant,
        date: expense.date,   
        amount: expense.amount,
        budget_id: params.budget_id
    });
    // console.log(formData)

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editExpense({params, formData}))
    }

    if (loggedIn) {
        return (
            <div className='expense-edit-form'>
                <h4>Expense Edit Form ⬇️</h4><br/>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor='merchant'>Merchant</label>
                        <input type="text"  className="form-control" name='merchant' value={formData.merchant} onChange={handleChange} /><br/>
                    </div>
                    <div className="form-group">
                        <label className="form-group">Date</label>
                        <input type="text" className="form-control" name='date' value={formData.date} onChange={handleChange} /><br/>    
                    </div>
                    <div className="form-group">
                        <label className="form-group">Amount</label>
                        <input type="text" className="form-control" name='amount' value={formData.amount} onChange={handleChange} /><br/>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
                {errors?.map(error => <p key={error}>{error}</p>)}
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>)
    }
}

export default ExpenseEditForm