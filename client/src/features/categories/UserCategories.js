import React from 'react';
import { useSelector } from "react-redux";
// import Category from '../categories/Category';
import CategoryLink from './CategoryLink';

const UserCategories = () => {
  
  const categories = useSelector(state => state.categories.entities)
  const loggedIn = useSelector(state => state.user.loggedIn)
  // console.log(categories)
  
  // const user = useSelector(state => state.user.data)


  if (loggedIn) {
    // const categoriesList = user.categories.map(category => <CategoryLink key={category.id} category={category} />)

    const filteredCategories = categories.filter(category => category.user_expenses.length !==0)
    // console.log(filteredCategories)

    const categoriesList = filteredCategories.map(category => <CategoryLink key={category.id} category={category} />)

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