import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Expense from './Expense';
import { fetchExpensesAsync } from './ExpensesSlice';

const Expenses = () => {

  const expenses = useSelector(state => state.expenses.data)
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(fetchExpensesAsync());
  }, [dispatch]);

  const expensesList = expenses.map(expense => <Expense expense={expense} />)

  return (
    <div>
      {expensesList}
    </div>
  )
}

export default Expenses