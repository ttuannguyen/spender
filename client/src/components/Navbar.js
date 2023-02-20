import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { reset, setLoggedOutState, resetErrors } from '../features/user/UserSlice';
import { resetCategoryErrors } from '../features/categories/CategoriesSlice';
import { logout } from '../features/user/UserSlice';


const Navbar = () => {

  const loggedIn = useSelector(state => state.user.loggedIn)
  // console.log(loggedIn)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(resetErrors());
    dispatch(setLoggedOutState());
    
    navigate('/')
  }

  if (loggedIn) {
    return (
      <div>
        <NavLink className='navlink' to='/home'>
          <button className='nav-btn'>Home</button>
        </NavLink>
        <NavLink className='navlink' to='/categories' onClick={() => dispatch(resetCategoryErrors())}>
          <button className='nav-btn'>All Categories</button>
        </NavLink>
        {/* <NavLink className='navlink' to='/expenses'>
          <button className='nav-btn'>Expenses</button>
        </NavLink> */}
        {/* <NavLink className='navlink' to='/expenses/new' onClick={() => dispatch(resetCategoryErrors())}></NavLink> */}
        <NavLink className='navlink' to='/expenses/new'>
          <button className='nav-btn' >Add Expense</button>
        </NavLink>
        <NavLink className='navlink' to='/my_spends'>
          <button className='nav-btn'>My Expenses By Category</button>
        </NavLink>
        <NavLink className='navlink' to='/notes'>
          <button className='nav-btn' onClick={() => dispatch(resetErrors())}>My Notes</button>
        </NavLink>
        <button className='nav-btn' onClick={logoutUser}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <NavLink className='navlink' to='/login'>
          <button className='nav-btn' onClick={() => dispatch(resetErrors())}>Login</button>
        </NavLink>
        <NavLink className='navlink' to='/signup' onClick={() => dispatch(resetErrors())}>
          <button className='nav-btn'>Signup</button>
        </NavLink>
      </div>
    )
  }
}

export default Navbar