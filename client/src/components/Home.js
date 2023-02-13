import React from 'react';
import { useSelector } from "react-redux";

const Home = () => {

  const loggedIn = useSelector(state => state.user.loggedIn)
  const user = useSelector(state => state.user.entities)
  // console.log(user)

  if (loggedIn) {
    return (
      <div>
          <h3>Welcome, {user.username}!</h3>
          <h4>Usage Instructions</h4>
          <p>Use the expense add form to add a new expense </p>
          <p>Go to Categories to view a list of expense categories and add a new category </p>
          <p>Go to an Expense Category to view a list of your expenses in that category</p>
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>)
  }

}

export default Home