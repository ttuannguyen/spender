import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { fetchExpensesAsync } from './ExpensesSlice';

const ExpenseLink = ({budget_id ,expense}) => {

  return (

      <Link to={`/budgets/${budget_id}/expenses/${expense.id}`} className='expense-link' style={{ textDecoration: 'none'}} >
          <p> 💸 Merchant: {expense.merchant} | Date: {expense.date} | Amount:${expense.amount} </p>
      </Link>

  )
}

export default ExpenseLink