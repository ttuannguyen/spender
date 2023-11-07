import './assets/css/App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
// import Counter from './features/counter/Counter';
import Budgets from './features/budgets/Budgets';
import Expenses from './features/expenses/Expenses';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import ExpenseAddForm from './features/expenses/ExpenseAddForm';
import ExpenseEditForm from './features/expenses/ExpenseEditForm';
import ExpenseDetails from './features/expenses/ExpenseDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAsync } from './features/categories/CategoriesSlice';
import { fetchBudgetsAsync } from './features/budgets/BudgetsSlice';
import { fetchUserAsync } from './features/user/UserSlice';
import { fetchExpensesAsync } from './features/expenses/ExpensesSlice';
import Notes from './features/notes/Notes';
import BudgetAddForm from './features/budgets/BudgetAddForm';
import NoteAddForm from './features/notes/NoteAddForm';
import BudgetsOfUser from './features/budgets/BudgetsOfUser';
import Budget from './features/budgets/Budget';
import SearchBar from './components/SearchBar';
import ExpenseAddForm2 from './features/expenses/ExpenseAddForm2';
import BudgetEditForm from './features/budgets/BudgetEditForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import LandingPage from './components/LandingPage';
import Note from './features/notes/Note';

const App = () => {

  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();

  // const toggle = useSelector(state => state.expenses.toggle);
  // console.log(toggle)

  
  useEffect(() => {
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

  return (
    <div className="App">
      <Router >
        <Header />
        <main>
          <Container>
            <Routes>
              {/* <Route path='/categories/:id' element={<CategoryDetails />} /> */}
              {/* <Route exact path='/categories/new' element={ <CategoryAddForm /> } /> */}
              <Route path='/budgets/:id' element={<Budget />} />
              <Route exact path='/budgets/new' element={ <BudgetAddForm /> } />
              <Route path='/budgets/:id/edit' element={<BudgetEditForm />} />
              <Route exact path='/budgets' element={ <Budgets /> } />
              <Route exact path='/my_budgets' element={<BudgetsOfUser />} />
              <Route exact path='/expenses/new' element={ <ExpenseAddForm /> } />
              <Route path='/budgets/:budget_id/expenses/new' element={<ExpenseAddForm2 />} />
              <Route path='/budgets/:budget_id/expenses/:id/edit' element={<ExpenseEditForm />} />
              <Route path='/budgets/:budget_id/expenses/:id' element={<ExpenseDetails />} />
              {/* The route above is designed so we have the category_id and id (of expense) in order to work with data in state and extract the expense we want. We don't actually need a corresponding route in the backend. */}
              <Route exact path="/expenses" element={ <Expenses /> } />
              {/* <Route exact path='/notes/new' element={ <NoteAddForm /> } /> */}
              {/* <Route path='/notes/:id' element={<Note />} /> */}
              <Route exact path='/notes/new' element={<NoteAddForm />} />
              <Route exact path="/notes" element={<Notes />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/home' element={<Home /> } />
              <Route exact path='/search' element={<SearchBar /> } />
              <Route exact path='/' element={<LandingPage /> } />
              {/* <Route exact path='/counter' element={<Counter /> } /> */}
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
