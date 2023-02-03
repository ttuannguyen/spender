import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { fetchCategoriesAsync } from './CategoriesSlice';
// import Category from '../categories/Category';
import CategoryLink from './CategoryLink';

const UserCategories = () => {
  
  const user = useSelector(state => state.user.data)
  const loggedIn = useSelector(state => state.auth.loggedIn)

  // Current approach: Use the data from the '/categories' endpoint
  // const filteredCategories = categories.filter(category => category.user_expenses.length !==0)
  // console.log(filteredCategories)

  // const categoriesList = filteredCategories.map(category => <CategoryLink key={category.id} category={category} />)

  

  if (loggedIn) {
    const categoriesList = user.categories.map(category => <CategoryLink key={category.id} category={category} />)

    return (
      <div>
        {categoriesList}      
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>) 
  }

}

export default UserCategories