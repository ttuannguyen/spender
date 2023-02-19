import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import ExpenseLink from '../expenses/ExpenseLink';

const CategoryDetails = () => {

    const [formToggle, setFormToggle] = useState(false); 
    const afterAddExpense = () => setFormToggle(false) 

    const params = useParams();
    const categories = useSelector(state => state.categories.entities)

    const category = categories.find(c => c.id === parseInt(params.id))
    const expensesList = category.user_expenses.map(expense => <ExpenseLink key={expense.id} expense={expense} category_id={params.id} />)


    return (
        <div>
            <h3>{category.name}</h3>
            {expensesList}
            {/* {formToggle ? <ExpenseAddForm2 category={category} afterAddExpense={afterAddExpense}/> : <button onClick={() => setFormToggle(true)}>Add an Expense</button>} */}
        </div>
    )
}

export default CategoryDetails