import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
  
  const categories = useSelector(state => state.categories.entities)
  const loggedIn = useSelector(state => state.user.loggedIn)
  // const [categoriesFound, setCategoriesFound] = useState([])
  // const [formToggle, setFormToggle] = useState(false); 
  // const afterAddCategory = () => setFormToggle(false) 

  // console.log(categories)

  // if (categories.length !== 0) {
  //   setCategoriesFound(categories)
  // }
  // console.log(categories)
  // console.log(categoriesFound)


  if (loggedIn) {

    const categoriesList = categories.map(category => <Category key={category.id} category={category} />)
    
    return (
      <div>
        {categoriesList}
        <Link to={'/categories/new'}>
          <button>Add a Category</button>
        </Link>
        {/* {formToggle ? <CategoryAddForm afterAddCategory={afterAddCategory} /> : <button onClick={() => setFormToggle(true)}>Add a Category!</button>} */}
        {/* {formToggle ? <CategoryAddForm afterAddSpot={afterAddSpot}/> : <button onClick={() => setFormToggle(true)}>Add a Spot!</button>} */}
        {/* <CategoryAddForm /> */}
      </div>
    )
  } else {
    return (<h4>Please login or create an Account</h4>) 
  }
}

export default Categories