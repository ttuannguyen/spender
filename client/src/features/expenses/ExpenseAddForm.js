import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense } from './ExpensesSlice';

const ExpenseAddForm = () => {

    // const { addSecretSpot } = useContext(UserContext);
    const [errorsList, setErrorsList] = useState([]);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        merchant:'',
        date:'',   
        amount:'',
        user_id:'',
        category_id:''
    });

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormData({
            merchant:'',
            date:'',   
            amount:'',
            user_id:'',
            category_id:''
        })

        fetch('/expenses',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(json => {
            if (json) {
                dispatch(addExpense(json))
            } else {
                const errorItems = json.errors.map(e => <li key={e.id}>{e}</li>)
                setErrorsList(errorItems)
            }
        })
    }

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
                <label>User Id</label>
                <input type="text" name='user_id' value={formData.user_id} onChange={handleChange} /><br/>
                <label>Category Id</label>
                <input type="text" name='category_id' value={formData.category_id} onChange={handleChange} /><br/>
                <button type="submit">Add!</button>
            </form>
            {errorsList}
        </div>
  )
}

export default ExpenseAddForm