import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "./CategoriesApi";


const initialState = {
    data: [],
    status: 'idle'
}

export const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetchCategories()
        return response
    }
)


// export const fetchCategoriesAsync = createAsyncThunk(
//     'categories/fetchCategories', () => {
//         return fetch('')
//     }

// )

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchCategoriesAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'fulfilled'
        })
        .addCase(fetchCategoriesAsync.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})

export default categoriesSlice.reducer
