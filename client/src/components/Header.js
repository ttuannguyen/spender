import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { reset, setLoggedOutState, resetErrors } from '../features/user/UserSlice';
import { resetCategoryErrors } from '../features/categories/CategoriesSlice';
import { resetBudgetErrors } from '../features/budgets/BudgetsSlice';
import { logout } from '../features/user/UserSlice';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {

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
        <header>
          <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand href="/">Spender</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <LinkContainer to='/home'>
                    <Nav.Link><i className="fa fa-house"></i> Home</Nav.Link>
                  </LinkContainer>
    
                  <LinkContainer to='/budgets'>
                    <Nav.Link type="submit"  onClick={() => dispatch(resetBudgetErrors())}><i className="fa-solid fa-map-location"></i>Budgets</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/my_budgets'>
                    <Nav.Link type="submit" onClick={() => dispatch(resetBudgetErrors())}><i className="fa-solid fa-map-location"></i>My Budgets</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/notes'>
                    <Nav.Link type="submit" onClick={() => dispatch(resetErrors())}><i className="fa-solid fa-map-location"></i>My Notes</Nav.Link>
                  </LinkContainer>
    
                  <LinkContainer to='/logout'>
                    <Nav.Link type="submit" onClick={logoutUser}><i className="fas fa-user"></i> Logout</Nav.Link>
                  </LinkContainer>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
  } else {
    return (
      <div>
        <Navbar bg='dark' variant='dark' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand href="/">Spender</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <LinkContainer to='/login'>
                    <Nav.Link type="submit" onClick={() => dispatch(resetErrors())}><i className="fa fa-house"></i> Login</Nav.Link>
                  </LinkContainer>
    
                  <LinkContainer to='/signup'>
                    <Nav.Link type="submit" onClick={() => dispatch(resetErrors())}><i className="fas fa-user"></i> Signup</Nav.Link>
                  </LinkContainer>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        {/* <nav class="navbar navbar-light bg-light">
          <NavLink className='navlink' to='/login'>
            <button class="btn btn-outline-success my-2 my-sm-0 m-2" type="submit" onClick={() => dispatch(resetErrors())}>Login</button>
          </NavLink>
          <NavLink className='navlink' to='/signup' onClick={() => dispatch(resetErrors())}>
            <button class="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Signup</button>
          </NavLink>
        </nav> */}

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

export default Header