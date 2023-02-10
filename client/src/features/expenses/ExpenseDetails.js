import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import ExpenseDeleteButton from './ExpenseDeleteButton';
import NoteAddForm from '../notes/NoteAddForm';
import Note from '../notes/Note';
import { fetchExpensesAsync } from './ExpensesSlice';

const ExpenseDetails = () => {

    const params = useParams();
    const dispatch = useDispatch();
    // const [expense, setExpense] = useState({});
    // const [notes, setNotes] = useState([]);

    // METHOD 1: Render using expenses' data
    // Issue: State is not updated after new expense gets added



    const expenses = useSelector(state => state.expenses.entities);
    const expense = expenses.find(e => e.id === parseInt(params.id));
    // console.log(expenses)

    
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

    const notesList = expense.notes.map(n => <p>{n.content}</p>)

    if (!expense) {
        return <div>Loading ...</div>
    }

    return (
        <div>
            <p>Merchant: {expense.merchant}</p>
            <p>Date: {expense.date}</p>
            <p>Amount: {expense.amount}</p>
            <ExpenseDeleteButton />
            <Link to={`/expenses/${expense.id}/edit`}>
                <button>Edit</button>
            </Link>
            <h4>Notes</h4>
            {notesList}
            <NoteAddForm expense={expense} />
        </div>
    )
}

export default ExpenseDetails