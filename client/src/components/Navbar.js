import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setLoggedOutState } from '../features/auth/AuthSlice';

const Navbar = () => {

  const loggedIn = useSelector(state => state.auth.loggedIn)
  // console.log(loggedIn)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    }) 
    .then(() => {
      navigate('/')
      dispatch(setLoggedOutState())
    })
  }

  if (loggedIn) {
    return (
      <div>
        <NavLink className='navlink' to='/home'>
          <button className='nav-btn'>Home</button>
        </NavLink>
        <NavLink className='navlink' to='/categories'>
          <button className='nav-btn'>Categories</button>
        </NavLink>
        <NavLink className='navlink' to='/expenses'>
          <button className='nav-btn'>Expenses</button>
        </NavLink>
        <NavLink className='navlink' to='/expenses/new'>
          <button className='nav-btn'>Add Expense</button>
        </NavLink>
        <NavLink className='navlink' to='/my_spends'>
          <button className='nav-btn'>My Spends</button>
        </NavLink>
        <button className='nav-btn' onClick={logoutUser}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <NavLink className='navlink' to='/login'>
          <button className='nav-btn'>Login</button>
        </NavLink>
        <NavLink className='navlink' to='/signup'>
          <button className='nav-btn'>Signup</button>
        </NavLink>
      </div>
    )
  }
}

export default Navbar