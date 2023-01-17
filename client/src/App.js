import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Categories from './components/Categories';
import ExpenseForm from './components/ExpenseForm';
import Navbar from './components/Navbar';
import Login from './components/Login';


const App = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories')
    .then(res => res.json()) 
    .then(data => {
      setCategories(data)
    })
  }, [])

  console.log(categories)
  

  // console.log(categories)

  return (
    <div className="App">
      <Router >
        <h1>Capstone Project</h1>
        <Navbar />
        <Routes>
          <Route exact path="/categories" element={ <Categories categories={categories} /> } />
          <Route exact path="/home" element={ <Home /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
