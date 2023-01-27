import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAsync } from './UserSlice'; 

const User = () => {
  
  const user = useSelector(state => state.user.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, [dispatch])

  console.log(user)


  return (
    <div>User</div>
  )
}

export default User