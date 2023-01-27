import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        status: 'idle'
    },
    reducers: {
        setLoggedInState: state => {state.loggedIn = true},
        setLoggedOutState: state => {state.loggedIn = false}
    },

})


export default authSlice.reducer
export const {setLoggedInState, setLoggedOutState} = authSlice.actions