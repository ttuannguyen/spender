import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        toggleState: false,
    },
    reducers: {
        setToggle: state => {state.toggleState = !state.toggleState},
    }
})


export default toggleSlice.reducer
export const {setToggle} = toggleSlice.actions