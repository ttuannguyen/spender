import React from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUser } from './UserApi';

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
    'user/fetchUser',
    async () => {
        const response = await fetchUser()
        return response
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

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