import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


const CategoryDetails = () => {

    const categories = useSelector(state => state.categories.data)
    console.log(categories)



    return (
        <div>CategoryDetails</div>
    )
}

export default CategoryDetails