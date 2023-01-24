import React, { useState } from "react";
import { increment, decrement, reset, incrementByAmount, fetchRandomDogImageAsync } from './CounterSlice'
import { useSelector, useDispatch } from "react-redux";
import './Counter.css'

const Counter = () => {
    
    // thunk - Step 1: import fetchRandomDogImageAsync from CounterSlice
    
    // const [count, setCount] = useState(0)
    // We are accessing the global variables from state from CounterSlice
    const count = useSelector(state => state.counter.value)
    const status = useSelector(state => state.counter.status)
    const loggedIn = useSelector(state => state.login.loggedIn)

    // thunk - Step 2: declare new state for image
    const image = useSelector(state => state.counter.image)

    const dispatch = useDispatch()



    // The following are no longer needed as they now live in CounterSlice
    // const increment = () => setCount(currentCount => currentCount +1)
    // const decrement = () => setCount(currentCount => currentCount -1)
    // const incrementBy = (amount) => setCount(currentCount => currentCount + amount)

    
    // We dispatch the actions we defined in the reducers in CounterSlice
     // thunk - Step 3: dispatch the image

    if (loggedIn) {
        return (
            <div className={status === 'idle' ? 'green' : 'red'}> {/* when imported correctly we'll see green */}
                <h2>Counter Redux</h2>
                <p>Current Count: {count}</p>
                <img src={image || window.location.origin + '/logo192.png'} alt='a dog or react logo'/>
                <br />
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
                <button onClick={() => dispatch(fetchRandomDogImageAsync())}>Fetch Doggo</button>
            </div>
        )
    } else {
        return (<p></p>) 
    }
}

export default Counter;