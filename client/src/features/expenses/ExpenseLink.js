import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchExpensesAsync } from './ExpensesSlice';

const ExpenseLink = ({expense}) => {

  // const dispatch = useDispatch();

  return (

      <Link to={`/expenses/${expense.id}`} className='expense-link' style={{ textDecoration: 'none'}} >
          <h4>{expense.merchant} | {expense.date} | {expense.amount} </h4>
      </Link>

    // <button >
    //     <Link onClick={() => dispatch(fetchExpensesAsync())} to={`/expenses/${expense.id}`} className='expense-link' style={{ textDecoration: 'none'}} >
    //         <h4>{expense.merchant} | {expense.date} | {expense.amount} </h4>
    //     </Link>
    // </button>
  )
}

export default ExpenseLink