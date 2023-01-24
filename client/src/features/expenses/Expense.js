import React from 'react'

const Expense = ({expense}) => {
  return (
    <div>
      <p>{expense.merchant}</p>
      <p>{expense.date}</p>
      <p>{expense.amount}</p>
    </div>
  )
}

export default Expense