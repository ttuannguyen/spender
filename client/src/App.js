import './App.css';
import Home from './components/Home';
import Categories from './components/Categories';
import ExpenseForm from './components/ExpenseForm';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Categories />
      <ExpenseForm />
    </div>
  );
}

export default App;
