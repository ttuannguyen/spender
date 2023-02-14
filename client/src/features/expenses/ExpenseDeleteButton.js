import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { deleteExpense } from '../user/UserSlice';
import { deleteExpense } from '../categories/CategoriesSlice';
import { setToggle } from '../auth/ToggleSlice';
import { fetchCategoriesAsync } from '../categories/CategoriesSlice';

const ExpenseDeleteButton = ({expense}) => {
    // const { user, toggle, setToggle } = useContext(UserContext);

    const user = useSelector(state => state.user.data)
    // const params = useParams();
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(params.category_id)
    // console.log(params.id)


    const handleClick = () => {
        
        dispatch(deleteExpense(params))
        
        // Issue: Related category still rendered even when all of its expenses are deleted
        // Solution: fetch categories after the deletion
        // dispatch(fetchCategoriesAsync())

        // Issue: The page breaks after the delete action
        // Solution: Navigate away to My Spends
        navigate(`/categories/${params.category_id}`)
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default ExpenseDeleteButton