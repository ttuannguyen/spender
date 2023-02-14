import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/user/UserSlice';
import { setLoggedOutState } from '../features/user/UserSlice';

const Navbar = () => {

  const loggedIn = useSelector(state => state.user.loggedIn)
  // console.log(loggedIn)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    dispatch(setLoggedOutState());
    navigate('/')
  }

  if (loggedIn) {
    return (
      <div>
        <NavLink className='navlink' to='/home'>
          <button className='nav-btn'>Home</button>
        </NavLink>
        <NavLink className='navlink' to='/categories'>
          <button className='nav-btn'>All Categories</button>
        </NavLink>
        {/* <NavLink className='navlink' to='/expenses'>
          <button className='nav-btn'>Expenses</button>
        </NavLink> */}
        <NavLink className='navlink' to='/expenses/new'>
          <button className='nav-btn'>Add Expense</button>
        </NavLink>
        <NavLink className='navlink' to='/my_spends'>
          <button className='nav-btn'>My Spends</button>
        </NavLink>
        <NavLink className='navlink' to='/notes'>
          <button className='nav-btn'>My Notes</button>
        </NavLink>
        <button className='nav-btn' onClick={logoutUser}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <NavLink className='navlink' to='/login'>
          <button className='nav-btn' onClick={() => dispatch(reset())}>Login</button>
        </NavLink>
        <NavLink className='navlink' to='/signup' onClick={() => dispatch(reset())}>
          <button className='nav-btn'>Signup</button>
        </NavLink>
      </div>
    )
  }
}

export default Navbar