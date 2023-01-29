import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "./CategoriesApi";

const initialState = {
    data: [],
    status: 'idle'
}

console.log(initialState.data)

export const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetchCategories()
        return response
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory(state, action) {
            state.data.push(action.payload)
            //action.payload refers to the new cat that is being pushed into the state arr
        }
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
export const {addCategory} = categoriesSlice.actions
