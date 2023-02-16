import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { redirect, useNavigate } from 'react-router-dom';
import { signup } from '../user/UserSlice';

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

    console.log(user)
    console.log(errors)

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