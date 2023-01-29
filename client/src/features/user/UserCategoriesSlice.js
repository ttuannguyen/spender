import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserCategories } from './UserCategoriesApi';


const initialState = {
    data: [],
    status: 'idle'
}

export const fetchUserCategoriesAsync = createAsyncThunk(
    'user/fetchUserCategories',
    async () => {
        const response = await fetchUserCategories()
        return response
    }
)


const UserCategoriesSlice = () => {
  return (
    <div>UserCategoriesSlice</div>
  )
}

export default UserCategoriesSlice