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

    const budgets = useSelector(state => state.budgets.entities);
    const budget = budgets.find(b => b.id === parseInt(params.budget_id));
    // note: we can extract the category_id from the params
    console.log(budget)

    const expense = budget.expenses.find(e => e.id === parseInt(params.id));


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
                <h3>Merchant: {expense.merchant}</h3>
                <h4>Date: {expense.date}</h4>
                <h5>Amount: ${expense.amount}</h5>
                <Link to={`/budgets/${params.budget_id}/expenses/${params.id}/edit`}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
                <ExpenseDeleteButton />
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>) 
    }

}

export default ExpenseDetails