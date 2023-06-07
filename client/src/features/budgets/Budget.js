import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import ExpenseLink from '../expenses/ExpenseLink';

const Budget = () => {

    const params = useParams();
    const budgets = useSelector(state => state.budgets.entities);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const budget = budgets.find(b => b.id === parseInt(params.id));

    const expenseAmounts = budget.expenses.map(e => e.amount)
    const expensesTotal = expenseAmounts.reduce((a, b) => a + b, 0)
    const balance = budget.amount - expensesTotal

    const expensesList = budget.expenses.map(expense => <ExpenseLink key={expense.id} expense={expense} budget_id={params.id} />)

    return (
        <div>
            <h4>{budget.name}</h4>
            <h5>Budget Total: {budget.amount}</h5>
            <h6>Balance: {balance}</h6>
            {expensesList}
        </div>
    )
}

export default Budget