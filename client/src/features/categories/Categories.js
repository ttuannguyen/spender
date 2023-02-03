import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesAsync } from './CategoriesSlice';
import Category from './Category';
import CategoryAddForm from './CategoryAddForm';

const Categories = () => {
  
  const categories = useSelector(state => state.user.data.categories)
  console.log(categories)
  const loggedIn = useSelector(state => state.user.loggedIn)


  if (loggedIn) {

    // ISSUE: First time load: Backend error: NoMethodError (undefined method `expenses' for nil:NilClass)
    // where: category_serializer.rb:9:in `expenses'
    const categoriesList = categories.map(category => <Category key={category.id} category={category} />)
    
    return (
      <div>
        {categoriesList}
        <CategoryAddForm />
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>) 
  }
}

export default Categories