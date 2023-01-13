import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Categories from './components/Categories';
import ExpenseForm from './components/ExpenseForm';
import Navbar from './components/Navbar';
import Login from './components/Login';


const App = () => {

  return (
    <div className="App">
      <Router >
        <h1>Capstone Project</h1>
        <Routes>
          <Route exact path="/home" element={ <Home /> } />
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
