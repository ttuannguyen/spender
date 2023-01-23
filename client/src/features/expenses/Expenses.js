import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpensesAsync } from './ExpensesSlice';

const Expenses = () => {

  const expenses = useSelector(state => state.expenses.data)
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(fetchExpensesAsync());
  }, [dispatch]);

  const expensesList = expenses.map(expense => console.log(expense))

  return (
    <div>

    </div>
  )
}

export default Expenses