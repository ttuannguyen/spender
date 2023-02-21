import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { fetchExpensesAsync } from './ExpensesSlice';

const ExpenseLink = ({category_id ,expense}) => {

  return (

      <Link to={`/categories/${category_id}/expenses/${expense.id}`} className='expense-link' style={{ textDecoration: 'none'}} >
          <li>{expense.merchant} | {expense.date} | {expense.amount} </li>
      </Link>

  )
}

export default ExpenseLink