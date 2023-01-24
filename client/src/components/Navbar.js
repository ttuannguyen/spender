import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    }) 
    .then(() => {
      // navigate('/')
      // logout() 
    })
  }

  return (
    <div>
      <NavLink className='navlink' to='/login'>
        <button className='nav-btn'>Login</button>
      </NavLink>
      <NavLink className='navlink' to='/logout'>
        <button className='nav-btn' onClick={logoutUser}>Logout</button>
      </NavLink>
      <NavLink className='navlink' to='/home'>
        <button className='nav-btn'>Home</button>
      </NavLink>
      <NavLink className='navlink' to='/categories'>
        <button className='nav-btn'>Categories</button>
      </NavLink>
      <NavLink className='navlink' to='/expenses'>
        <button className='nav-btn'>Expenses</button>
      </NavLink>
    </div>
  )
}

export default Navbar