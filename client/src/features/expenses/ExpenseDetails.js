import React from 'react';
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import ExpenseDeleteButton from './ExpenseDeleteButton';


const ExpenseDetails = () => {

    const params = useParams();
    const loggedIn = useSelector(state => state.user.loggedIn);
    // const dispatch = useDispatch();
    // const [expense, setExpense] = useState({});
    // const [notes, setNotes] = useState([]);
    
    // METHOD 1: Render using expenses' data
    // Issue: Expenses state is not updated after new expense gets added. Expenses state is a depended state.
    // Solution: Fetch expenses after a new expense has been added

    const categories = useSelector(state => state.categories.entities);
    const category = categories.find(e => e.id === parseInt(params.category_id));
    // note: we can extract the category_id from the params
    // console.log(category)

    const expense = category.user_expenses.find(e => e.id === parseInt(params.id));


    // const expenses = useSelector(state => state.expenses.entities);
    // const expense = expenses.find(e => e.id === parseInt(params.id));
    // console.log(expenses)

    // const notesList = expense.notes.map(note => <p>{note.content}</p>)
    
    // const findVisit = () => {
    //     const eFound = expenses.find(e => e.id === parseInt(params.id));
    //     if (!eFound) {
    //         dispatch(fetchExpensesAsync())
    //         const exp = expenses.find(e => e.id === parseInt(params.id))
    //         setExpense(exp)
    //     } else {
    //         setExpense(eFound)
    //     }
    // }
    // findVisit()
    
    // METHOD 2: Render using user's data
    // const user = useSelector(state => state.user.data);
    // const expense = user.expenses.find(e => e.id === parseInt(params.id))

    // METHOD 3: Render using categories' data - more complicated
    // Approach: iterate through each category, iterate through each expense in that category, look for the expense matching the id, return that expense
    // const categories = useSelector(state => state.categories.entities);
    // categories.map(category => {
    //     category.user_expenses.map(expense => console.log(expense))
    // })    

    // let notesList = null
    // if (expense) {
    //     notesList = expense.notes.map(n => <p>{n.content}</p>)
    // } else {
    //     return <div>Loading ...</div>
    // }

    // if (!expense) {
    //     return <div>Loading ...</div>
    // }

    if (loggedIn) {
        return (
            <div className='expense-show-page'>
                <p>Merchant: {expense.merchant}</p>
                <p>Date: {expense.date}</p>
                <p>Amount: ${expense.amount}</p>
                <ExpenseDeleteButton />
                <Link to={`/categories/${params.category_id}/expenses/${params.id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>) 
    }

}

export default ExpenseDetails