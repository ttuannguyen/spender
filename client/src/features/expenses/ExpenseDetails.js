import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import ExpenseDeleteButton from './ExpenseDeleteButton';
import NoteAddForm from '../notes/NoteAddForm';

const ExpenseDetails = () => {

    const params = useParams();
    const dispatch = useDispatch()


    // useEffect(() => {
    //     // dispatch(fetchCategoriesAsync());
    //     dispatch(fetchUserAsync());
    //   }, [dispatch])

    const userData = useSelector(state => state.user.data);
    const [expense, setExpense] = useState({});
    const [notes, setNotes] = useState([]);
    
    
    if (!expense.id && userData.id) {
        const expenseFound = userData.expenses.find(e => e.id === parseInt(params.id))
        setExpense(expenseFound)
        setNotes(expenseFound.notes)
    }

    const notesList = notes.map(n => <p>{n.content}</p>)


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