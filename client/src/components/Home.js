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
          {/* <h4>Usage Instructions</h4>
          <h5>Keep all of your important expenses in one place with Spender!</h5>
          <p>Go to Budgets to view a list of available budgets. Select a budget to add to your budgets list. </p>
          <p>To create a new expense under a budget, navigate to Add Expense and fill out the add form.</p>
          <p>Use "My Notes" to journal your spending habits.</p> */}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }

}

export default Home