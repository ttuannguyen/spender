import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchExpensesAsync } from './ExpensesSlice';
import { fetchUserAsync } from '../user/UserSlice';
import { useParams } from 'react-router-dom';
import ExpenseEditForm from './ExpenseEditForm';
import ExpenseDeleteButton from './ExpenseDeleteButton';

const ExpenseDetails = () => {

    const params = useParams();
    const dispatch = useDispatch()


    // useEffect(() => {
    //     // dispatch(fetchCategoriesAsync());
    //     dispatch(fetchUserAsync());
    //   }, [dispatch])

    const userData = useSelector(state => state.user.data);
    const [expense, setExpense] = useState({});
    
    
    if (!expense.id && userData.id) {
        const expenseFound = userData.expenses.find(e => e.id === parseInt(params.id))
        setExpense(expenseFound)
    }

    // const expenseFound = userData.expenses.find(e => e.id === parseInt(params.id))
    // setExpense(expenseFound)

    // console.log(userData)
    // console.log(expense)


    return (
        <div>
            <p>Merchant: {expense.merchant}</p>
            <p>Date: {expense.date}</p>
            <p>Amount: {expense.amount}</p>
            <ExpenseEditForm />
            <ExpenseDeleteButton />
        </div>
    )
}

export default ExpenseDetails