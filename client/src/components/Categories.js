import React from 'react'

const Categories = ({categories}) => {

  console.log(categories)

  const categoriesList = categories.map(category => <li>{category.name}</li>)


  return (
    <div>
      {categoriesList}
    </div>
  )
}

export default Categories