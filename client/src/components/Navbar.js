import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink className='navlink' to='/home'>
        <button className='nav-btn'>Home</button>
      </NavLink>
      <NavLink className='navlink' to='/categories'>
        <button className='nav-btn'>Categories</button>
      </NavLink>
    </div>
  )
}

export default Navbar