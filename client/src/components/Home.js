import React from 'react';
import { useSelector } from "react-redux";

const Home = () => {

  const loggedIn = useSelector(state => state.user.loggedIn)
  const user = useSelector(state => state.user.entities)
  // console.log(user)

  if (loggedIn) {
    return (
      <div className='home'>
          <h3>Welcome, {user.username}!</h3>
          <h4>Usage Instructions</h4>
          <h5>Keep all of your important expenses in one place with Spender!</h5>
          <p>Go to Categories to view a list of expense categories. If you need to add a new expense category, use the Category Add Form. </p>
          <p>To add a new expense, navigate to Add Expense and use the form to add a new expense. Be sure to select the category that the expense belongs to. </p>
          <p>To view a list of your expenses in that category, navigate to My Expenses by Category.</p>
          <p>Use "My Notes" to journal your spending habits.</p>
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }

}

export default Home