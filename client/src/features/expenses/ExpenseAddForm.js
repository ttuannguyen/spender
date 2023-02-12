import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense } from '../user/UserSlice';
import { addNewExpenseToCategory } from '../categories/CategoriesSlice';
import { fetchExpensesAsync } from './ExpensesSlice';
import { useNavigate } from 'react-router-dom';
import { setToggle } from './ExpensesSlice';


const ExpenseAddForm = () => {
    
    const dispatch = useDispatch();
    
    const [errorsList, setErrorsList] = useState([]);
    const categories = useSelector(state => state.categories.entities)
    const expenses = useSelector(state => state.categories.expenses)
    const user = useSelector(state => state.user.entities)
    const toggle = useSelector(state => state.expenses.toggle);
    const navigate = useNavigate();

    const categoriesOptions = categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)

    // console.log(categories)
    const [formData, setFormData] = useState({
        merchant:'',
        date:'',   
        amount:'',
        category_id:'',
    });
    // console.log(formData)

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewExpenseToCategory(formData))
        dispatch(setToggle())
        // dispatch(fetchExpensesAsync())
        navigate('/my_spends')

        // to reset form
        setFormData({
            merchant:'',
            date:'',   
            amount:'',
            category_id:'',
        })
        
    }

    console.log(toggle)

    return (
        <div>
            <h4>Add an Expense</h4>
            <form onSubmit={handleSubmit}>
                <label>Merchant</label>
                <input type="text" name='merchant' value={formData.merchant} onChange={handleChange} /><br/>
                <label>Date</label>
                <input type="text" name='date' value={formData.date} onChange={handleChange} /><br/>
                <label>Amount</label>
                <input type="text" name='amount' value={formData.amount} onChange={handleChange} /><br/>
                <label>Category:</label>
                {/* TO DO: Reset dropdown after submit */}
                <select name='category_id' onChange={handleChange}>
                    <option> -- select an option -- </option>
                    {categoriesOptions}
                </select>
                <button type="submit">Add!</button>
            </form>
            {errorsList}
        </div>
  )
}

export default ExpenseAddForm