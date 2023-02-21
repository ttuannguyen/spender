import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import ExpenseLink from '../expenses/ExpenseLink';

const CategoryDetails = () => {

    const params = useParams();
    const categories = useSelector(state => state.categories.entities);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const category = categories.find(c => c.id === parseInt(params.id));
    
    const expensesList = category.user_expenses.map(expense => <ExpenseLink key={expense.id} expense={expense} category_id={params.id} />)

    if (loggedIn) {
        return (
            <div>
                <h4>{category.name} Expenses</h4>
                {expensesList}
            </div>
        )
    } else {
        return (<h4>Please login or create an Account</h4>) 
    }
}

export default CategoryDetails