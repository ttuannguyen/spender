import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = ({category}) => {
  return (
    <div>
        <Link className='category-link' to={`/categories/${category.id}`}>
            <h4>{category.name}</h4>
        </Link>
    </div>
  )
}

export default CategoryLink