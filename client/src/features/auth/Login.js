import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '../user/UserSlice';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // going to useSelector for this piece
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const userObj = {
    username,
    password,
    // error: null
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(userObj))
    navigate('/home')
  
  //   fetch('/login',{
  //     method:'POST',
  //     headers:{'Content-Type': 'application/json'},
  //     body:JSON.stringify(userObj)
  //   })
  //   .then(res => res.json())
  //   .then(user => {
  //       if (user) {
  //         // console.log(user.username)
  //         // the user was never put in state 
  //         // should dispatch login and handle it the user obj for it to sign in and put that to state
  //         dispatch(login(userObj))
  //         navigate('/home')
  //       }
  //       else {
  //         setError(user.error)
  //         setUsername('')
  //         setPassword('')
  //       }
  //   })
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