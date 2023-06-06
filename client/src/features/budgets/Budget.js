import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import ExpenseLink from '../expenses/ExpenseLink';

const Budget = () => {

    const params = useParams();
    const budgets = useSelector(state => state.budgets.entities);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const budget = budgets.find(b => b.id === parseInt(params.id));
    console.log(budgets)

    const expensesList = budget.user_expenses.map(expense => <ExpenseLink key={expense.id} expense={expense} budget_id={params.id} />)

    return (
        <div>
            <h4>{budget.name}</h4>
            <h5>{budget.amount}</h5>
            {expensesList}
        </div>
    )
}

export default Budget