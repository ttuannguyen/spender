import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesAsync } from './CategoriesSlice';
import Category from './Category';

const Categories = () => {
  

  // TODO: To get the data from categories
  const categories = useSelector(state => state.categories.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const categoriesList = categories.map(category => <Category category={category} />)
  // const categoriesList = categories.map(category => <p>{category.name}</p>)


  return (
    <div>
      {categoriesList}
    </div>
  )
}

export default Categories