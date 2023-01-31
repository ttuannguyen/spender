import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesAsync } from '../categories/CategoriesSlice';
// import Category from '../categories/Category';
import CategoryLink from '../categories/CategoryLink';
import { fetchUserAsync } from './UserSlice'; 

const User = () => {
  
  const user = useSelector(state => state.user.data)
  const categories = useSelector(state => state.categories.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchUserAsync());
  }, [dispatch])

  // console.log(user)

  // Current approach: Use the data from the '/categories' endpoint
  const filteredCategories = categories.filter(category => category.user_expenses.length !==0)
  // console.log(filteredCategories)

  const categoriesList = filteredCategories.map(category => <CategoryLink key={category.id} category={category} />)

  return (
    <div>
      {categoriesList}      
    </div>
  )
}

export default User