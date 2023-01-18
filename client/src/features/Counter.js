import React, { useState } from "react";
import { increment, decrement, reset, incrementByAmount } from './CounterSlice'
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    // const [count, setCount] = useState(0)

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    // const increment = () => setCount(currentCount => currentCount +1)
    // const decrement = () => setCount(currentCount => currentCount -1)
    // const incrementBy = (amount) => setCount(currentCount => currentCount + amount)

    return (
        <div>
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <br />
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
        </div>
    )
}

export default Counter;