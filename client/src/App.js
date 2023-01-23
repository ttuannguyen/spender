import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Counter from './features/Counter';
import Categories from './features/categories/Categories';
import Expenses from './features/expenses/Expenses';


const App = () => {

  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch('/categories')
  //   .then(res => res.json()) 
  //   .then(data => {
  //     setCategories(data)
  //   })
  // }, [])

  

  return (
    <div className="App">
      <Router >
        <h1>Capstone Project</h1>
        <Navbar />
        <Counter />
        <Routes>
          <Route exact path="/categories" element={ <Categories /> } />
          <Route exact path="/expenses" element={ <Expenses /> } />
          <Route exact path="/home" element={ <Home /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
