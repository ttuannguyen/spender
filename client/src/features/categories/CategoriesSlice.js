import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "./CategoriesApi";

const initialState = {
    entities: [],
    errors: null,
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

export const addCategory = createAsyncThunk(
    'categories/addCategory', 
    async (formData) => {
        const fetchAddCategory = () => {
            return fetch('/categories',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => data)
        }
        const response = await fetchAddCategory()
        return response
})

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

export const editExpense = createAsyncThunk(
    'expenses/editExpense',
    async ({params, formData}) => {
        const fetchEditExpense = () => {
            return fetch(`/expenses/${params.id}`,{
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
    'expenses/deleteExpense',
    async (params) => {
        const fetchDeletetExpense = () => {
            return fetch(`/expenses/${params.id}`,{
                method:'DELETE',
                headers:{'Content-Type': 'application/json'},
            })
            .then(res => res.json())
            .then(data => data)
        }
        // fetchDeletetExpense()
        const response = await fetchDeletetExpense()
        return response
    }
)


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // addCategory(state, action) {
        //     state.entities.push(action.payload)
        //     //action.payload refers to the new category that is being pushed into the state arr
        // }
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
        .addCase(addCategory.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                state.entities.push(action.payload)
            }
        })
        .addCase(addNewExpenseToCategory.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(addNewExpenseToCategory.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                const categoryFound = state.entities.find(c => c.id ===  parseInt(action.payload.category_id))
                categoryFound.user_expenses.push(action.payload)
                state.status = 'fulfilled'
            }
        })
        .addCase(editExpense.fulfilled, (state, action) => {
            const categoryFound = state.entities.find(c => c.id ===  parseInt(action.payload.category_id))
            const newExpenses = categoryFound.user_expenses.map(e => e.id ===  parseInt(action.payload.id) ? action.payload : e)
            categoryFound.user_expenses = newExpenses
            state.status = 'fulfilled'
        })
        .addCase(deleteExpense.fulfilled, (state, action) => {
            const categoryFound = state.entities.find(c => c.id ===  parseInt(action.payload.category_id))
            const newExpenses = categoryFound.user_expenses.filter(e => e.id !== action.payload.id)
            categoryFound.user_expenses = newExpenses
            state.status = 'fulfilled'
        })
    }
})


export default categoriesSlice.reducer
// export const { addCategory } = categoriesSlice.actions
