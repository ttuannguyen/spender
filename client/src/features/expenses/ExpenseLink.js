import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseLink = ({expense}) => {
  return (
    <div>
        <Link className='expense-link' to={`/expenses/${expense.id}`}>
            <h4>{expense.merchant}</h4>
        </Link>
    </div>
  )
}

export default ExpenseLink