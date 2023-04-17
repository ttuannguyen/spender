import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addNewExpenseToCategory } from '../categories/CategoriesSlice';
import { addNewExpenseToBudget } from '../budgets/BudgetsSlice';

const ExpenseAddForm = () => {
    
    const errors = useSelector(state => state.budgets.errors);    
    const dispatch = useDispatch();
    
    // const [errorsList, setErrorsList] = useState([]);
    const budgets = useSelector(state => state.budgets.entities)
    const status = useSelector(state => state.budgets.status)
    const expenses = useSelector(state => state.budgets.expenses)
    const loggedIn = useSelector(state => state.user.loggedIn)
    // const user = useSelector(state => state.user.entities)
    // const toggle = useSelector(state => state.expenses.toggle);
    // const [formFlag, setFormFlag] = useState(false)
    // const [count, setCount] = useState(null)
    
    console.log(status)
    console.log(expenses)

    // useEffect(() => {
    //     if (!errors) {
    //         setFormData({
    //             ...formData,
    //             merchant:'',
    //             date:'',   
    //             amount:'',
    //             category_id:'',
    //         })   
    //         // setFormData(true)
    //         navigate('/my_spends')
    //     } else {
    //         setFormFlag(true)
    //     }
    //   }, []);

    // useEffect(() => {
    //     if (!formFlag && !!errors) {
    //         setFormData({
    //             ...formData,
    //             merchant:'',
    //             date:'',   
    //             amount:'',
    //             category_id:'',
    //         })   
    //         // setFormData(true)
    //         navigate('/my_spends')
    //     } else {
    //         setFormFlag(true)
    //     }
    //   }, [formFlag, expenses, navigate]);
      
      //&& errors.length === 0
    
    // useEffect(() => {
    //     setCount(expenses.length)
    // }, [])

    // useEffect(() => {
    //     if (expenses.length !== count) {
    //         setFormData({
    //             ...formData,
    //             merchant:'',
    //             date:'',   
    //             amount:'',
    //             category_id:'',
    //         })   
    //         // setFormData(true)
    //         navigate('/my_spends')
    //     }
    //   }, [expenses]);

    // const categoriesOptions = categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)
    const budgetsOptions = budgets.map(b => <option value={b.id} key={b.id}>{b.name}</option>)

    const [formData, setFormData] = useState({
        merchant:'',
        date:'',   
        amount:'',
        budget_id:'',
    });
    // console.log(formData)

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
        //     navigate('/my_spends')
        // }

    }

    // # of expenses ; if the # changes, navigate 

    // function reset() {
    //     const text = document.getElementById("none").defaultValue;
    // }

    // const dropdown = () => {
    //     return (
    //         <select name='category_id' onChange={handleChange}>
    //             <option value="none" id="none" selected="selected"> -- select an option -- </option>
    //             {categoriesOptions}`
    //         </select>
    //     )
    // }

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
       
                    <div class='dropdown'> 
                        <label>Budget:</label>
                        {/* TO DO: Reset dropdown after submit */}
                        <select name='budget_id' onChange={handleChange}>
                            <option value="none" id="none" selected disabled hidden> -- select an option -- </option>
                            {budgetsOptions}
                        </select>
                        {/* {dropdown()} */}
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

export default ExpenseAddForm