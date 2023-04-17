import './assets/css/App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Counter from './features/counter/Counter';
import Categories from './features/categories/Categories';
import Budgets from './features/budgets/Budgets';
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
import { fetchBudgetsAsync } from './features/budgets/BudgetsSlice';
import { fetchUserAsync } from './features/user/UserSlice';
import { fetchExpensesAsync } from './features/expenses/ExpensesSlice';
import Notes from './features/notes/Notes';
import CategoryAddForm from './features/categories/CategoryAddForm';
import BudgetAddForm from './features/budgets/BudgetAddForm';
import NoteAddForm from './features/notes/NoteAddForm';
import BudgetsOfUser from './features/budgets/BudgetsOfUser';
import Budget from './features/budgets/Budget';

const App = () => {

  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();

  // const toggle = useSelector(state => state.expenses.toggle);
  // console.log(toggle)

  
  useEffect(() => {
    // console.log("in app")
    dispatch(fetchUserAsync());
  }, [dispatch]);

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchCategoriesAsync());
      dispatch(fetchBudgetsAsync());
      dispatch(fetchExpensesAsync());
    }
  }, [loggedIn, dispatch]);  
  // Note: expenses is a depended state

  // const categories = useSelector(state => state.categories.entities);
  // const expenses = useSelector(state => state.expenses.entities);
  // const user = useSelector(state => state.user.entities)
  // console.log(expenses)

  return (
    <div className="App">
      <Router >
        <h1>Spender 💸</h1>
        <Navbar />
        {/* <Counter /> */}
        <Routes>
          <Route path='/categories/:id' element={<CategoryDetails />} />
          <Route exact path='/categories/new' element={ <CategoryAddForm /> } />
          <Route exact path='/categories' element={ <Categories /> } />
          <Route exact path='/expenses/new' element={ <ExpenseAddForm /> } />
          <Route path='/budgets/:budget_id/expenses/:id/edit' element={<ExpenseEditForm />} />
          <Route path='/budgets/:budget_id/expenses/:id' element={<ExpenseDetails />} />
          {/* The route above is designed so we have the category_id and id (of expense) in order to work with data in state and extract the expense we want. We don't actually need a corresponding route in the backend. */}
          <Route path='/budgets/:id' element={<Budget />} />
          <Route exact path='/budgets/new' element={ <BudgetAddForm /> } />
          <Route exact path='/budgets' element={ <Budgets /> } />
          <Route exact path="/expenses" element={ <Expenses /> } />
          {/* <Route exact path='/notes/new' element={ <NoteAddForm /> } /> */}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/home' element={<Home /> } />
          <Route exact path='/my_budgets' element={<BudgetsOfUser />} />
          <Route exact path='/my_spends' element={<User />} />
          <Route exact path='/notes/new' element={<NoteAddForm />} />
          <Route exact path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
