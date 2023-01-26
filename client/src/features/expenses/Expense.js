import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseDeleteButton from './ExpenseDeleteButton';

const Expense = ({expense}) => {
  return (
    <div>
      <p>{expense.merchant}</p>
      <p>{expense.date}</p>
      <p>{expense.amount}</p>
      <Link to={`/expenses/${expense.id}/edit`}>
          <button>Edit</button>
      </Link>
      <ExpenseDeleteButton expense={expense} />
    </div>
  )
}

export default Expense