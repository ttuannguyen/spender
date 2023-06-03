import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {

  const loggedIn = useSelector(state => state.user.loggedIn)
  const budgets = useSelector(state => state.budgets.entities)

  const [searchQuery, setSearchQuery] = useState('');
  
  // const [searchQuery, setSearchQuery] = useState({
  //   text:''
  // });

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
  }

  const filteredListItems = budgets.filter(budget => budget.name.toLowerCase().includes(searchQuery.toLowerCase())) 

  const budgetsToDisplay = filteredListItems.map(b => <p>{b.name}</p>)

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery => {
          return {...searchQuery, [e.target.name]:e.target.value}
      });
  };

  if (loggedIn) {
    return (
      <div>
        <input onChange={handleSearch} type='text' placeholder="Search here..." /><br/>
        {budgetsToDisplay}
      </div>
      // <form onSubmit={handleSubmit}>
      //   <input type='search' placeholder="Search here..." className='form-control' id='text' name='text' value={searchInput.text} onChange={handleChange} /><br/>
      //   <button type="submit">Search</button>
      // </form>
    )  
  } else {
    return (<h4>Please login or create an account</h4>)
  }
  
}

export default SearchBar