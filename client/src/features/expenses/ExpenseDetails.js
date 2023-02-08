import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import ExpenseDeleteButton from './ExpenseDeleteButton';
import NoteAddForm from '../notes/NoteAddForm';
import Note from '../notes/Note';

const ExpenseDetails = () => {

    const params = useParams();
    const dispatch = useDispatch();

    // const [expense, setExpense] = useState({});
    // const [notes, setNotes] = useState([]);

    // Method 1: Using user's data
    const user = useSelector(state => state.user.data);
    const expense = user.expenses.find(e => e.id === parseInt(params.id))

    // Method 2: Using categories' data - very involved process
    // Approach: iterate through each category, iterate through each expense in that category, look for the expense matching the id, return that expense
    // const categories = useSelector(state => state.categories.entities);
    // categories.map(category => {
    //     category.user_expenses.map(expense => console.log(expense))
    // })    
    

    // if (!expense.id) {
    //     const expenseFound = user.expenses.find(e => e.id === parseInt(params.id))
    //     setExpense(expenseFound)
    // }
    // const notesList = notes.map(note => <Note key={note.id} note={note} expense={expense}/>)


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
            {/* {notesList} */}
            <NoteAddForm expense={expense} />
        </div>
    )
}

export default ExpenseDetails