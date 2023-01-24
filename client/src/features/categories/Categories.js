import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesAsync } from './CategoriesSlice';
import Category from './Category';

const Categories = () => {
  
  const categories = useSelector(state => state.categories.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const categoriesList = categories.map(category => <Category category={category} />)

  return (
    <div>
      {categoriesList}
    </div>
  )
}

export default Categories