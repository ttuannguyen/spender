import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'idle' // or pending is common
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {state.value += 1}, // what we're trying to do
        decrement: state => {state.value -=1},
        reset: state => {state.value = 0},
        incrementByAmount: (state, action)  => {state.value += action.payload}
    }
    // we will revisit this
})
// Question: do we care about return values or do we care about updating state


export default counterSlice.reducer
// .reducer will package and populate the 
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions


