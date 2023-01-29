import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Expense from '../expenses/Expense';
import { fetchCategoriesAsync } from './CategoriesSlice';
import ExpenseLink from '../expenses/ExpenseLink';

const CategoryDetails = () => {

    const params = useParams();
    const categories = useSelector(state => state.categories.data)
    const [category, setCategory] = useState([]);
    const [expenses, setExpenses] = useState([])
    const dispatch = useDispatch()

    // Method 1: fetchCategoriesAsync
    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    }, [dispatch])

    const c = categories.find(c => c.id === parseInt(params.id))
    const expensesList = c.user_expenses.map(expense => <ExpenseLink expense={expense} />)

    
    // Method 2: Setting category in question to state using the data fetched in User.js
    // Issue: TypeError: Cannot read properties of undefined
    // if (!category.id && categories.length !==0) {
    //     // if the category does not exist and the the categories data has been fetched, do the find
    //     const c = categories.find(c => c.id === parseInt(params.id))
    //     setCategory(c)
    // }
    // const expensesList = category.user_expenses.map(e => <p>{e.merchant}</p>)

    return (
        <div>
            <h3>{category.name}</h3>
            {expensesList}
        </div>
    )
}

export default CategoryDetails