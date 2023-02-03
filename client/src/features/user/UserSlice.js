// import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMe } from './UserApi';

export const fetchUserAsync = createAsyncThunk(
    'user/fetchMe',
    async () => {
        const response = await fetchMe()
        return response
    }
)

export const login = createAsyncThunk('user/login', async (userObj) => {
    // we're able to get into userObj here
    return fetch('/login', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(userObj) // need to pass in the user object thing
    })
    .then(res => res.json()) 
    .then(userObj => userObj)
})

const initialState = {
    // for fetchUserAsync
    data: {
        id: null, 
        username: '',
        categories: [],
        expenses: []
    },
    // for fetchLoginAsync
    userObj: {
        id: null, 
        username: '',
        categories: [],
        expenses: []
    },
    status: 'idle',
    loggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // idea: how about we just handle adding new expense here 
        addExpense(state, action) {
            state.data.expenses.push(action.payload)
        },
        editExpense(state, action) {
            const newArr = state.data.expenses.map(e => e.id === action.payload.id ? action.payload : e)
            state.data.expenses = newArr
        },
        addNote(state, action) {
            state.data.notes.push(action.payload)
        },
        logUserIn(state, action) {
            state.loggedIn = true
        }
    },

    extraReducers: (builder) => {
        builder
        // .addCase(fetchUserAsync.pending, (state) => {
        //     state.status = 'loading'
        // })
        // .addCase(fetchUserAsync.fulfilled, (state, action) => {
        //     state.data = action.payload
        //     state.status = 'fulfilled'
        // })
        // .addCase(fetchUserAsync.rejected, (state) => {
        //     state.status = 'rejected'
        // })
        .addCase(login.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(login.fulfilled, (state, action) => {
            state.userObj = action.payload
            state.status = 'fulfilled'
            // setting loggedIn to true
            state.loggedIn = true
        })
        .addCase(login.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})


export default userSlice.reducer
export const { addExpense, editExpense, addNote } = userSlice.actions