import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'; 
import ExpenseLink from '../expenses/ExpenseLink';
import { resetExpenseActionStatus } from './BudgetsSlice';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Budget = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const budgets = useSelector(state => state.budgets.entities);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const budget = budgets.find(b => b.id === parseInt(params.id));

    const expenseAmounts = budget.expenses.map(e => e.amount);
    const expensesTotal = expenseAmounts.reduce((a, b) => a + b, 0);
    const balance = budget.amount - expensesTotal;

    const expensesList = budget.expenses.map(expense => {
        return (
        <div>
            <Link to={`/budgets/${params.id}/expenses/${expense.id}`} style={{ textDecoration: 'none'}}>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    💸 Merchant: {expense.merchant} | Date: {expense.date} | Amount: ${expense.amount}
                    {/* <ExpenseLink key={expense.id} expense={expense} budget_id={params.id} /> */}
                </ListGroup.Item>
            </Link>    
            
        </div>)
    })

    return (
        <div>
            <h3>{budget.name}</h3>
            <h4>Budget Total: <Link to={`/budgets/${budget.id}/edit`}>${budget.amount}</Link></h4>
            <h5>Remaining Balance: ${balance}</h5>
            <ListGroup className='my-3'>
                {expensesList}
            </ListGroup>
            <Link to={`/budgets/${budget.id}/expenses/new`}>
                    <button className="btn btn-primary" >Add An Expense</button>
            </Link>
        </div>
    )
}

//onClick={() => dispatch(resetExpenseActionStatus())}

export default Budget