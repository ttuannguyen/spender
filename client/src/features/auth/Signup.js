import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { signup } from '../user/UserSlice';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const errors = useSelector(state => state.user.errors)
    const [errorsList, setErrorsList] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const userObj = {
        username,
        password,
        password_confirmation: passwordConfirmation
    }

    let errorsToDisplay = null
    if (errors) {
        errorsToDisplay = errors.map(error => <p key={error}>{error}</p>)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signup(userObj))
        if (!errors) {
            navigate('/home')
        }

        // fetch('/signup',{
        //     method:'POST',
        //     headers:{'Content-Type': 'application/json'},
        //     body:JSON.stringify(userObj)
        // })
        // .then(res => res.json())
        // .then(user => {
        //     if (user) {
        //         navigate('/home')
        //     }
        //     else {
        //         setUsername('')
        //         setPassword('')
        //         setPasswordConfirmation('')
        //         const errorItems = user.errors.map(e => <p key={e.id}>{e}</p>) 
        //         setErrorsList(errorItems) 
        //     }
        // })
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
        {errorsToDisplay}
      </ul>
    </div>
    )
}

export default Signup