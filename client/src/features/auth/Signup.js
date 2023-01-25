import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLoggedInState } from './AuthSlice';
import { useSelector, useDispatch } from "react-redux";



const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errorsList, setErrorsList] = useState([]);

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const userObj = {
            username,
            password,
            password_confirmation: passwordConfirmation
        }

        fetch('/signup',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(userObj)
        })
        .then(res => res.json())
        .then(user => {
            if (user) {
                dispatch(setLoggedInState()) 
                navigate('/home')
            }
            else {
                setUsername('')
                setPassword('')
                setPasswordConfirmation('')
                const errorItems = user.errors.map(e => <p key={e.id}>{e}</p>) 
                setErrorsList(errorItems) 
            }
        })
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
          {errorsList}
      </ul>
    </div>
    )
}

export default Signup