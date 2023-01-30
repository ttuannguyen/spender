import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchExpensesAsync } from './ExpensesSlice';
import { fetchUserAsync } from '../user/UserSlice';
import { useParams } from 'react-router-dom';
// import { fetchUserAsync } from '../user/UserSlice';

const ExpenseDetails = () => {

    const params = useParams();
    const userData = useSelector(state => state.user.data);
    const [expense, setExpense] = useState({});
    const dispatch = useDispatch()

    // Issue: When refreshed, values in state are gone
    // Quick fix: run the fetchUserAsync fetch request below
    useEffect(() => {
        dispatch(fetchUserAsync());
      }, [dispatch])
    
    
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
        </div>
    )
}

export default ExpenseDetails