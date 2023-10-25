import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '../user/UserSlice';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  
  // Current Issue: Not navigating to /home right away after a successful login
  
  // Issue: Error messages keep persisting because errors are saved in global state
  // Solution 1: make a state var for login-related error messages
  // Solution 2: send command to user slice to reset errors - unsuccessful so far
  // Solution 3: make the post fetch and display errors in this component as all we need is the presence of the user to login; we don't necessarily need to save errors in global state

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [errorMessages, setErrorMessages] = useState([]);
  // const loggedIn = useSelector(state => state.user.loggedIn)
  const user = useSelector(state => state.user.entities);
  const errors = useSelector(state => state.user.errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const userObj = {
    username,
    password, 
  }

  useEffect(() => {
    if (user.id && !user.errors) {
      navigate('/home')
    } 
  }, [user, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(userObj))
  }

  // fetch('/login',{
  //   method:'POST',
  //   headers:{'Content-Type': 'application/json'},
  //   body:JSON.stringify(userObj)
  // })
  // .then(res => res.json())
  // .then(user => {
  //     if(user.errors) {
  //       errorMessages(user.errors)
  //       setUsername('')
  //       setPassword('')
  //   } else {
  //       login(user)
  //       navigate('/')
  //   }
  // })


  return (
    
    <div id='login' className='my-3'> 
      {/* <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <button type="submit">Login</button>
      </form> */}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>


      {/* 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form> */}

      {/* {errorMessages?.map(error => <p key={error}>{error}</p>)} */}
      {errors?.map(error => <p key={error}>{error}</p>)}
    </div>
  ) 
}

export default Login