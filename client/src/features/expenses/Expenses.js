import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Expense from './Expense';
import { fetchExpensesAsync } from './ExpensesSlice';

const Expenses = () => {

  const expenses = useSelector(state => state.expenses.data)
  const loggedIn = useSelector(state => state.auth.loggedIn)
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(fetchExpensesAsync());
  }, [dispatch]);

  const expensesList = expenses.map(expense => <Expense expense={expense} />)

  if (loggedIn) {
    return (
      <div>
        {expensesList}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }

  
}

export default Expenses