import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '../user/UserSlice';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.user.errors)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const userObj = {
    username,
    password, 
  }

  // ISSUE: Error message keeps persisting on page
  let errorsToDisplay = null
  if (errors) {
      errorsToDisplay = errors.map(error => <p key={error}>{error}</p>)
  }


  // const [errorsFound, setErrorsFound] = useState([]);
  // if (errors) {
  //   setErrorsFound(errors)
  // }
  // const errorsList = errorsFound.map(error => <p key={error}>{error}</p>)

  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(userObj))
    if (!errors) {
      navigate('/home')
    } 
  
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
      {errorsToDisplay}
    </div>
  )

}

export default Login