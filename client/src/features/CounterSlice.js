import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRandomDogImage } from "./CounterApi";


const initialState = {
    value: 0,
    status: 'idle', // or pending is common
    image: null // initial state for the img being retrieved
}


// setting up the async thunk
export const fetchRandomDogImageAsync = createAsyncThunk(
    'counter/fetchRandomDogImage',
    async () => {
        const response = await fetchRandomDogImage()
        return response
        // the returned res automatically becomes the payload
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // We are defining what we actions we try to perform insider the reducers
    reducers: {
        increment: state => {state.value += 1}, 
        decrement: state => {state.value -=1},
        reset: state => {state.value = 0},
        incrementByAmount: (state, action)  => {state.value += action.payload}
    },

    // FETCHING
    // After adding fetch function above, we need to add extra reducers
    extraReducers: (builder) => {
        builder
        // reminder: the reducer always receives 2 things (state & action), which is passed into the anonymous function
        .addCase(fetchRandomDogImageAsync.pending, (state) => {
            state.status = 'loading'
            // no action bc we are still waiting so we can remove the action arg
        })
        .addCase(fetchRandomDogImageAsync.fulfilled, (state, action) => {
            state.image = action.payload
            state.status = 'fulfilled'
        })
        .addCase(fetchRandomDogImageAsync.rejected, (state) => {
            state.status = 'rejected'
        })
    }

})

console.log(counterSlice.actions.incrementByAmount(10)) // here awe can see the action creator and the payload is 10

// Question: do we care about return values or do we care about updating state


export default counterSlice.reducer
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions


