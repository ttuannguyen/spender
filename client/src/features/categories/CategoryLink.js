import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchExpensesAsync } from '../expenses/ExpensesSlice';

const CategoryLink = ({category}) => {

  return (
    <div>
        <Link className='category-link' to={`/categories/${category.id}`} style={{ textDecoration: 'none'}} >
            <h4>{category.name}</h4>
        </Link>
    </div>
  )
  
  // Solution for rendering a new expense right away: fetchExpensesAsync when clicking on Category Link
  // const dispatch = useDispatch();
  // return (
  //   <div>
  //       <Link className='category-link' to={`/categories/${category.id}`} style={{ textDecoration: 'none'}} onClick={() => dispatch(fetchExpensesAsync())}>
  //           <h4>{category.name}</h4>
  //       </Link>
  //   </div>
  // )
}

export default CategoryLink