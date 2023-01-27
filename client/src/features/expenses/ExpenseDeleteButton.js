import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from './ExpensesSlice';

const ExpenseDeleteButton = ({expense}) => {
    // const { user, toggle, setToggle } = useContext(UserContext);

    const dispatch = useDispatch();

    const handleClick = () => {
        fetch(`/expenses/${expense.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
        })
        dispatch(deleteExpense(expense))
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default ExpenseDeleteButton