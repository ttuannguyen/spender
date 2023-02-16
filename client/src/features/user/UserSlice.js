// import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMe } from './UserApi';

const initialState = {
    entities: {},
    errors: null,
    status: 'idle',
    loggedIn: false
}

export const fetchUserAsync = createAsyncThunk(
    'user/fetchMe',
    async () => {
        const response = await fetchMe()
        return response
    }
)

// export const login = (userObj) => {
//     fetch('/login', {
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body:JSON.stringify(userObj) 
//     })
//     .then(res => res.json())
//     .then(data => data)
// }

export const login = createAsyncThunk('user/login', async (userObj) => {
    return fetch('/login', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(userObj) 
    })
    .then(res => res.json()) 
    // .then(data => data)
})


// export const login = createAsyncThunk('user/login', async (userObj) => {
//     return fetch('/login', {
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body:JSON.stringify(userObj) 
//     })
//     .then(res => res.json()) 
//     // .then(data => data)
// })

export const logout = createAsyncThunk('user/logout', async() => {
    return fetch('/logout', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json()) 
})
    


export const signup = createAsyncThunk('user/signup', async (userObj) => {
    return fetch('/signup', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(userObj) 
    })
    .then(res => res.json()) 
    // .then(userObj => userObj)
})

export const editExpense = createAsyncThunk(
    'user/editExpense',
    async ({id, formData}) => {
        const fetchEditExpense = () => {
            return fetch(`/expenses/${id}`,{
                method:'PATCH',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => data)
        }
        const response = await fetchEditExpense()
        return response
    }
)

export const deleteExpense = createAsyncThunk(
    'user/deleteExpense',
    async (id) => {
        const fetchDeletetExpense = () => {
            return fetch(`/expenses/${id}`,{
                method:'DELETE',
                headers:{'Content-Type': 'application/json'},
                // body:JSON.stringify(formData)
            })
            // .then(res => res.json())
            // .then(data => data)
        }
        fetchDeletetExpense()
        // const response = await fetchDeletetExpense()
        // return response
    }
)

export const addNote = createAsyncThunk(
    'user/addNote', 
    async (formData) => {
        const fetchAddNote = () => {
            return fetch('/notes',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => data)
        }
        const response = await fetchAddNote()
        return response
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // addExpense(state, action) {
        //     state.entities.expenses.push(action.payload)
        // },
        // addNote(state, action) {
        //     state.entities.notes.push(action.payload)
        // },
        // resetUser: state => {state.entities = {}},
        setLoggedOutState: state => {state.loggedIn = false},
        reset: state => {state.errors = null}
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchUserAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUserAsync.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = 'fulfilled'
            // state.errors = null // idea: bc this loads first in App.js, we can try to reset errors here
        })
        .addCase(fetchUserAsync.rejected, (state) => {
            state.status = 'rejected'
        })
        .addCase(login.pending, (state) => {
            state.status = 'loading'
            state.errors = null
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            if (action.payload.errors) {
                state.errors = action.payload.errors
                // state.loginErrors = action.payload.errors
            } else {
                state.loggedIn = true
                state.errors = null
                // state.loginErrors = null
                state.entities = action.payload
            }
        })
        .addCase(logout.fulfilled, (state) => {
            state.status = 'fulfilled'
            state.entities = {}
            state.errors = null
            state.loggedIn = false
        })
        .addCase(login.rejected, (state) => {
            state.status = 'rejected'
        })
        .addCase(signup.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            if (action.payload.errors) {
                state.errors = action.payload.errors
                // state.signupErrors = action.payload.errors
            } else {
                state.loggedIn = true
                state.errors = null
                // state.signupErrors = null
                state.entities = action.payload
            }
        })
        // CRUD Actions Using User Slice
        .addCase(editExpense.fulfilled, (state, action) => {
            const newExpenses = state.entities.expenses.map(e => e.id ===  parseInt(action.payload.id) ? action.payload : e)
            state.entities.expenses = newExpenses
            state.status = 'fulfilled'
        })   
        .addCase(addNote.fulfilled, (state, action) => {
            // const newExpenses = state.entities.expenses.map(e => e.id ===  parseInt(action.payload.id) ? action.payload : e)
            // state.entities.expenses = newExpenses
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                state.entities.notes.push(action.payload)
                state.status = 'fulfilled'
            }
        })   
    }
})


export default userSlice.reducer
export const { addExpense, setLoggedOutState, reset, resetUser } = userSlice.actions