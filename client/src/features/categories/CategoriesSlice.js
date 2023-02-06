import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "./CategoriesApi";

const initialState = {
    entities: [],
    status: 'idle'
}

// console.log(initialState.data)

export const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetchCategories()
        return response
    }
)

export const addNewExpenseToCategory = createAsyncThunk(
    'categories/addNewExpenseToCategory', 
    async (formData) => {
        const fetchAddNewExpenseToCategory = () => {
            return fetch('/expenses',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => data)
        }

        const response = await fetchAddNewExpenseToCategory()
        return response
        // async thunk is handled with extra reducer, create a builder that responds to this case 
})



export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory(state, action) {
            state.entities.push(action.payload)
            //action.payload refers to the new category that is being pushed into the state arr
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchCategoriesAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = 'fulfilled'
        })
        .addCase(fetchCategoriesAsync.rejected, (state) => {
            state.status = 'rejected'
        })
        .addCase(addNewExpenseToCategory.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(addNewExpenseToCategory.fulfilled, (state, action) => {
            const categoryFound = state.entities.find(c => c.id ===  parseInt(action.payload.category_id))
            categoryFound.expenses.push(action.payload)
            state.status = 'fulfilled'
        })
    }
})


export default categoriesSlice.reducer
export const { addCategory } = categoriesSlice.actions
