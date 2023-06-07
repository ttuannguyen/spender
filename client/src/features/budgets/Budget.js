import React from 'react';
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'; 
import ExpenseLink from '../expenses/ExpenseLink';

const Budget = () => {

    const params = useParams();
    const budgets = useSelector(state => state.budgets.entities);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const budget = budgets.find(b => b.id === parseInt(params.id));

    const expenseAmounts = budget.expenses.map(e => e.amount);
    const expensesTotal = expenseAmounts.reduce((a, b) => a + b, 0);
    const balance = budget.amount - expensesTotal;

    const expensesList = budget.expenses.map(expense => <ExpenseLink key={expense.id} expense={expense} budget_id={params.id} />)

    return (
        <div>
            <h4>{budget.name}</h4>
            <h5>Budget Total: {budget.amount}</h5>
            <h6>Balance: {balance}</h6>
            {expensesList}
            <Link to={`/budgets/${budget.id}/expenses/new`}>
                    <button className="btn btn-primary">Add An Expense</button>
            </Link>
        </div>
    )
}

export default Budget