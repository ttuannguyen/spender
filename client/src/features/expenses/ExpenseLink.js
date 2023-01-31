import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseLink = ({expense}) => {
  return (
    <div>
        <Link to={`/expenses/${expense.id}`} className='expense-link' style={{ textDecoration: 'none'}} >
            <h4>{expense.merchant} | {expense.date} | {expense.amount} </h4>
        </Link>
    </div>
  )
}

export default ExpenseLink