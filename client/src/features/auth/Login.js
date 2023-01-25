import React, { useState, useEffect } from 'react';
import { setLoggedInState } from './AuthSlice';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const loggedIn = useSelector(state => state.auth.loggedIn)
  // console.log(loggedIn)

  const dispatch = useDispatch()
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const userObj = {
        username,
        password
    }
  
    fetch('/login',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(user => {
        if (user) {
          // console.log(user.username)
          dispatch(setLoggedInState())
          navigate('/home')
        }
        else {
          setError(user.error)
          setUsername('')
          setPassword('')
        }
    })
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
    {/* <p>{error}</p> */}
    </div>
  )
}

export default Login