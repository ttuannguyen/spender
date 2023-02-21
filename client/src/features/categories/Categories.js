import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import Category from './Category';

const Categories = () => {
  
  const categories = useSelector(state => state.categories.entities)
  const loggedIn = useSelector(state => state.user.loggedIn)
  // const [categoriesFound, setCategoriesFound] = useState([])
  // const [formToggle, setFormToggle] = useState(false); 
  // const afterAddCategory = () => setFormToggle(false) 

  // if (categories.length !== 0) {
  //   setCategoriesFound(categories)
  // }
  // console.log(categories)
  // console.log(categoriesFound)


  if (loggedIn) {

    const categoriesList = categories.map(category => <h5 key={category.id} category={category}>{category.name}</h5>)
    
    return (
      <>
        <div className='categories'>
          <h4>Here are the available categories!</h4>
          {categoriesList}
          {/* {formToggle ? <CategoryAddForm afterAddCategory={afterAddCategory} /> : <button onClick={() => setFormToggle(true)}>Add a Category!</button>} */}
          {/* {formToggle ? <CategoryAddForm afterAddSpot={afterAddSpot}/> : <button onClick={() => setFormToggle(true)}>Add a Spot!</button>} */}
          {/* <CategoryAddForm /> */}
          <Link to={'/categories/new'}>
            <button className="btn btn-primary">Add a Category</button>
          </Link>
        </div>
      </>
    )
  } else {
    return (<h4>Please login or create an Account</h4>) 
  }
}

export default Categories