import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { redirect, useNavigate } from 'react-router-dom';
import { signup } from '../user/UserSlice';

const Signup = () => {

    // Current Issue: Not navigating to /home right away after a successful signup
    
    // Issue: Error messages keep persisting because errors are saved in global state
    // Solution 1: make a state var for signup-related error messages
    // Issues: errors not rendered immediately, not navigated to /home right away 
    // Solution 2: send command to user slice to reset errors - unsuccessful so far
    // Solution 3: make the post fetch and display errors in this component as all we need is the presence of the user to login; we don't necessarily need to save errors in global state
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    // const [errorMessages, setErrorMessages] = useState([]);
    const errors = useSelector(state => state.user.errors);
    // const errors = useSelector(state => state.user.signupErrors);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userObj = {
        username,
        password,
        password_confirmation: passwordConfirmation
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signup(userObj))
        if (!errors) return redirect ('/home')
        // if (errors) {
        //     // setErrorMessages(errors)
        //     setUsername('')
        //     setPassword('')
        //     setPasswordConfirmation('')
        // } else {
        //     navigate('/home')
        // }
    }

    console.log(errors)

    return (
        <div id='signup'> 
        <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <label>Password Confirmation</label>
        <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>
        <button type="submit">Sign up!</button>
      </form>
      <ul>
        {/* {errorMessages?.map(error => <p key={error}>{error}</p>)} */}
        {errors?.map(error => <p key={error}>{error}</p>)}
      </ul>
    </div>
    )
}

export default Signup