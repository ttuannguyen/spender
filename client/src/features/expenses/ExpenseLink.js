import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { fetchExpensesAsync } from './ExpensesSlice';

const ExpenseLink = ({category_id ,expense}) => {

  return (

      <Link to={`/categories/${category_id}/expenses/${expense.id}`} className='expense-link' style={{ textDecoration: 'none'}} >
          <h4>{expense.merchant} | {expense.date} | ${expense.amount} </h4>
      </Link>

  )
}

export default ExpenseLink