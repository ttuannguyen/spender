import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from '../user/UserSlice';
import { setToggle } from '../auth/ToggleSlice';
import { fetchCategoriesAsync } from '../categories/CategoriesSlice';

const ExpenseDeleteButton = ({expense}) => {
    // const { user, toggle, setToggle } = useContext(UserContext);

    // ISSUE: The page breaks after the delete action
    const user = useSelector(state => state.user.data)
    // const params = useParams();
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleClick = () => {
        
        dispatch(deleteExpense(id))
        dispatch(fetchCategoriesAsync())
        navigate('/my_spends')
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default ExpenseDeleteButton