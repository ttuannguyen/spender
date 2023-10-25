import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { signup } from '../user/UserSlice';
import { Button, Form } from 'react-bootstrap';

const Signup = () => {  
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    // const [errorMessages, setErrorMessages] = useState([]);
    const user = useSelector(state => state.user.entities);
    const errors = useSelector(state => state.user.errors);
    // const errors = useSelector(state => state.user.signupErrors);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(user)
    // console.log(errors)

    const userObj = {
        username,
        password,
        password_confirmation: passwordConfirmation
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signup(userObj))
        
        // if (errors) {
        //     // setErrorMessages(errors)
        //     setUsername('')
        //     setPassword('')
        //     setPasswordConfirmation('')
        // } else {
        //     navigate('/home')
        // }
    }

    if (user.id && !errors) { 
      navigate('/home')
    }


    return (
        <div id='signup' className='my-3'> 

        {/* <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <label>Password Confirmation</label>
        <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>
        <button type="submit">Sign up!</button>
      </form> */}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" id='passwordConfirmation' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Enter password confirmation" />
          </Form.Group>

          <Button variant="primary" type="submit">
              Submit
          </Button>
        </Form>


        {/* <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type="text" className='form-control' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
          </div>
          <div className='form-group'>
            <label htmlFor='passwordConfirmation'>Password Confirmation</label>
            <input type='password' className='form-control' id='passwordConfirmation' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>
          </div>
          <button className='btn btn-primary' type="submit">Sign up!</button>
        </form> */}

        {/* {errorMessages?.map(error => <p key={error}>{error}</p>)} */}
        
        {errors?.map(error => <p key={error}>{error}</p>)}

    </div>
    )
}

export default Signup