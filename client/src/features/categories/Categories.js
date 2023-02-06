import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Category from './Category';
import CategoryAddForm from './CategoryAddForm';

const Categories = () => {
  
  const categories = useSelector(state => state.categories.entities)
  // const [categoriesFound, setCategoriesFound] = useState([])
  const loggedIn = useSelector(state => state.user.loggedIn)

  // if (categories.length !== 0) {
  //   setCategoriesFound(categories)
  // }
  // console.log(categories)
  // console.log(categoriesFound)


  if (loggedIn) {

    // ISSUE: First time load: Page breaks
    // const categoriesList = categoriesFound.map(category => <Category key={category.id} category={category} />)
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