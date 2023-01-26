import React from 'react';
import { Link } from 'react-router-dom';

const Expense = ({expense}) => {
  return (
    <div>
      <p>{expense.merchant}</p>
      <p>{expense.date}</p>
      <p>{expense.amount}</p>
      <Link to={`/expenses/${expense.id}/edit`}>
          <button>Edit</button>
      </Link>
    </div>
  )
}

export default Expense