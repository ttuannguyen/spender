// import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMe } from './UserApi';

const initialState = {
    data: {
        id: null, 
        username: '',
        categories: [],
        expenses: []
    },
    status: 'idle'
}

export const fetchUserAsync = createAsyncThunk(
    'user/fetchMe',
    async () => {
        const response = await fetchMe()
        return response
    }
)

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
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchUserAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUserAsync.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'fulfilled'
        })
        .addCase(fetchUserAsync.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})


export default userSlice.reducer
export const { addExpense, editExpense, deleteExpense } = userSlice.actions