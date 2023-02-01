import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import ExpenseLink from '../expenses/ExpenseLink';
import ExpenseAddForm2 from '../expenses/ExpenseAddForm2';

const CategoryDetails = () => {

    const params = useParams();
    const categories = useSelector(state => state.categories.data)

    const category = categories.find(c => c.id === parseInt(params.id))
    const expensesList = category.expenses.map(expense => <ExpenseLink key={expense.id} expense={expense} />)


    return (
        <div>
            <h3>{category.name}</h3>
            {expensesList}
            <ExpenseAddForm2 category={category}/>
        </div>
    )
}

export default CategoryDetails