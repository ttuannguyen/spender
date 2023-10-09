import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { addNewExpenseToCategory } from '../categories/CategoriesSlice';
import { addNewExpenseToBudget, resetExpenseActionStatus } from '../budgets/BudgetsSlice';

const ExpenseAddForm2 = () => {
    
    const params = useParams();
    const errors = useSelector(state => state.budgets.errors);    
    const dispatch = useDispatch();
    
    // const [errorsList, setErrorsList] = useState([]);
    const budgets = useSelector(state => state.budgets.entities)
    const expenseActionStatus = useSelector(state => state.budgets.expenseActionStatus)
    const expenses = useSelector(state => state.budgets.expenses)
    const loggedIn = useSelector(state => state.user.loggedIn)
    const navigate = useNavigate();
    

    useEffect(() => {
        if(expenseActionStatus === 'fulfilled') {
            navigate(`/budgets/${params.budget_id}`)
            dispatch(resetExpenseActionStatus())
        }
    }, [expenseActionStatus, navigate])


    // const categoriesOptions = categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)
    const budgetsOptions = budgets.map(b => <option value={b.id} key={b.id}>{b.name}</option>)

    const [formData, setFormData] = useState({
        merchant:'',
        date:'',   
        amount:'',
        budget_id: params.budget_id
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewExpenseToBudget(formData))

        setFormData({
            ...formData,
            merchant:'',
            date:'',   
            amount:'',
            // category_id:'',
        })   

        // dropdown()
        
        // setFormFlag(true)
        // if (!errors) {
        //     navigate('/my_budgets')
        // }
    }


    if (loggedIn) {
        return (
            <div id='expense-add-form'>
                <h4>Add an Expense</h4>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='merchant'>Merchant</label>
                        <input type='text' className='form-control' id='merchant' name='merchant' value={formData.merchant} onChange={handleChange} /><br/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='date'>Date</label>
                        <input type='text' className='form-control' id='date' name='date' value={formData.date} onChange={handleChange} /><br/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='amount'>Amount</label>
                        <input type='text' className='form-control' id='amount' name='amount' value={formData.amount} onChange={handleChange} /><br/>
                    </div>
                    <button type="submit" class='btn btn-primary'>Add!</button>
                </form>
                {errors?.map(error => <p key={error}>{error}</p>)}
            </div>
      )
    } else {
        return (<h4>Please login or create an Account</h4>)    
    }
}

export default ExpenseAddForm2