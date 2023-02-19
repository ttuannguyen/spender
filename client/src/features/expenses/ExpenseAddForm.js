import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewExpenseToCategory, resetErrors } from '../categories/CategoriesSlice';
import { useNavigate } from 'react-router-dom';


const ExpenseAddForm = () => {
    
    const errors = useSelector(state => state.categories.errors);    
    const dispatch = useDispatch();
    
    // const [errorsList, setErrorsList] = useState([]);
    const categories = useSelector(state => state.categories.entities)
    const status = useSelector(state => state.categories.status)
    const expenses = useSelector(state => state.categories.expenses)
    // const user = useSelector(state => state.user.entities)
    // const toggle = useSelector(state => state.expenses.toggle);
    const navigate = useNavigate();
    const [formFlag, setFormFlag] = useState(true)
    // const [count, setCount] = useState(null)
    

    console.log(status)
    console.log(expenses)

    useEffect(() => {
        if (!errors) {
            setFormData({
                ...formData,
                merchant:'',
                date:'',   
                amount:'',
                category_id:'',
            })   
            // setFormData(true)
            navigate('/my_spends')
        } else {
            setFormFlag(true)
        }
      }, []);

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

    const categoriesOptions = categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)

    const [formData, setFormData] = useState({
        merchant:'',
        date:'',   
        amount:'',
        category_id:'',
    });

    // dispatch(resetErrors()) // this causes too many re-renders

    const handleChange = (e) => {
        setFormData(formData => {
            return {...formData, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewExpenseToCategory(formData))

        
        // setFormFlag(false)
        // if (!errors) {
        //     navigate('/my_spends')
        // }

    }

    // # of expenses ; if the # changes, navigate 



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
            {errors?.map(error => <p key={error}>{error}</p>)}
        </div>
  )
}

export default ExpenseAddForm