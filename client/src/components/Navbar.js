import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { reset, setLoggedOutState, resetErrors } from '../features/user/UserSlice';
import { resetCategoryErrors } from '../features/categories/CategoriesSlice';
import { resetBudgetErrors } from '../features/budgets/BudgetsSlice';
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
      <>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Features</a>
              <a class="nav-item nav-link" href="#">Pricing</a>
              <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </nav>
                 */}
        <div className='navbar'>
          <NavLink className='navlink' to='/home'>
            <button className='nav-btn'>Home</button>
          </NavLink>
          <NavLink className='navlink' to='/budgets' >
            <button className='nav-btn'>Budgets</button>
          </NavLink>
          <NavLink className='navlink' to='/my_budgets'>
            <button className='nav-btn'>My Budgets</button>
          </NavLink>
          {/* <NavLink className='navlink' to='/categories' onClick={() => dispatch(resetCategoryErrors())}>
            <button className='nav-btn'>All Categories</button>
          </NavLink> */}
          {/* <NavLink className='navlink' to='/expenses/new' onClick={() => dispatch(resetCategoryErrors())}></NavLink> */}
          <NavLink className='navlink' to='/expenses/new'>
            <button className='nav-btn' onClick={() => dispatch(resetBudgetErrors())}>Add Expense</button>
          </NavLink>
          {/* <NavLink className='navlink' to='/my_spends'>
            <button className='nav-btn'>My Expenses By Category</button>
          </NavLink> */}
          <NavLink className='navlink' to='/notes'>
            <button className='nav-btn' onClick={() => dispatch(resetErrors())}>My Notes</button>
          </NavLink>
          <NavLink className='navlink' to='/search'>
            <button className='nav-btn'>Search</button>
          </NavLink>
          <button className='nav-btn' onClick={logoutUser}>Logout</button>
        </div>
      </>
      
      
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

  // if (loggedIn) {
  //   return (
  //     <div>
  //       <NavLink className='navlink' to='/home'>
  //         <button className='nav-btn'>Home</button>
  //       </NavLink>
  //       <NavLink className='navlink' to='/categories' onClick={() => dispatch(resetCategoryErrors())}>
  //         <button className='nav-btn'>All Categories</button>
  //       </NavLink>
  //       {/* <NavLink className='navlink' to='/expenses'>
  //         <button className='nav-btn'>Expenses</button>
  //       </NavLink> */}
  //       {/* <NavLink className='navlink' to='/expenses/new' onClick={() => dispatch(resetCategoryErrors())}></NavLink> */}
  //       <NavLink className='navlink' to='/expenses/new'>
  //         <button className='nav-btn' >Add Expense</button>
  //       </NavLink>
  //       <NavLink className='navlink' to='/my_spends'>
  //         <button className='nav-btn'>My Expenses By Category</button>
  //       </NavLink>
  //       <NavLink className='navlink' to='/notes'>
  //         <button className='nav-btn' onClick={() => dispatch(resetErrors())}>My Notes</button>
  //       </NavLink>
  //       <button className='nav-btn' onClick={logoutUser}>Logout</button>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <NavLink className='navlink' to='/login'>
  //         <button className='nav-btn' onClick={() => dispatch(resetErrors())}>Login</button>
  //       </NavLink>
  //       <NavLink className='navlink' to='/signup' onClick={() => dispatch(resetErrors())}>
  //         <button className='nav-btn'>Signup</button>
  //       </NavLink>
  //     </div>
  //   )
  // }
}

export default Navbar