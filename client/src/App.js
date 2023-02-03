import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Counter from './features/counter/Counter';
import Categories from './features/categories/Categories';
import Expenses from './features/expenses/Expenses';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import ExpenseAddForm from './features/expenses/ExpenseAddForm';
import ExpenseEditForm from './features/expenses/ExpenseEditForm';
import User from './features/categories/UserCategories';
import CategoryDetails from './features/categories/CategoryDetails';
import ExpenseDetails from './features/expenses/ExpenseDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAsync } from './features/categories/CategoriesSlice';
import { fetchUserAsync } from './features/user/UserSlice';
import NoteAddForm from './features/notes/NoteAddForm';

const App = () => {

  const toggle = useSelector(state => state.toggle.toggleState)
  const dispatch = useDispatch();
  // console.log(toggle)

  useEffect(() => {
    dispatch(fetchUserAsync());
    // dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <div className="App">
      <Router >
        <h1>Spender 💸</h1>
        <Navbar />
        {/* <Counter /> */}
        <Routes>
          <Route path='/categories/:id' element={<CategoryDetails />}/>
          <Route exact path='/categories' element={ <Categories /> } />
          <Route exact path='/expenses/new' element={ <ExpenseAddForm /> } />
          <Route path='/expenses/:id/edit' element={<ExpenseEditForm />} />
          <Route path='/expenses/:id' element={<ExpenseDetails />}/>
          <Route exact path="/expenses" element={ <Expenses /> } />
          {/* <Route exact path='/notes/new' element={ <NoteAddForm /> } /> */}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path="/home" element={<Home /> } />
          <Route exact path="/my_spends" element={<User />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
