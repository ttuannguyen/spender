import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login, resetErrors } from '../user/UserSlice';

const Login = () => {
  
  // Issue: Error messages keep persisting
  // Solution 1: make a state var for login-related error messages
  // Solution 2: send command to user slice to reset errors
  // Solution 3: make the post fetch and display errors in this component

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  // const errors = useSelector(state => state.user.errors);
  const errors = useSelector(state => state.user.loginErrors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userObj = {
    username,
    password, 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(userObj))
    if (errors) {
      setErrorMessages(errors)
      setUsername('')
      setPassword('')
    } else {
      navigate('/home')
    }
  }

  return (
    <div id='login'> 
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <button type="submit">Login</button>
      </form>
      {errorMessages?.map(error => <p key={error}>{error}</p>)}
      {/* {errors?.map(error => <p key={error}>{error}</p>)} */}
    </div>
  )
}

export default Login