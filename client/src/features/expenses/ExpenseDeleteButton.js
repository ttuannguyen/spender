import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import { deleteExpense } from '../user/UserSlice';
import { deleteExpense } from '../budgets/BudgetsSlice';


const ExpenseDeleteButton = ({expense}) => {
    // const { user, toggle, setToggle } = useContext(UserContext);
    // const params = useParams();
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(params.category_id)
    // console.log(params.id)


    const handleClick = () => {
        
        dispatch(deleteExpense(params))
        // dispatch(deleteExpense(params))
        
        // Issue: Related category still rendered even when all of its expenses are deleted
        // Solution: fetch categories after the deletion
        // dispatch(fetchCategoriesAsync())

        // Issue: The page breaks after the delete action
        // Solution: Navigate away to My Spends
        navigate(`/budgets/${params.budget_id}`)
    }
    
    return (
        <button className="btn btn-danger" onClick={handleClick}>Delete</button>
    )
}

export default ExpenseDeleteButton