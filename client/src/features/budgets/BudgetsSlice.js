import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBudgets } from "./BudgetApi";

const initialState = {
    entities: [],
    errors: null,
    status: 'idle'
}

export const fetchBudgetsAsync = createAsyncThunk(
    'budgets/fetchBudgets',
    async () => {
        const response = await fetchBudgets()
        return response
    }
)

export const addBudget = createAsyncThunk(
    'budgets/addBudget', 
    async (formData) => {
        const fetchAddBudget = () => {
            return fetch('/budgets',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => data)
        }
        const response = await fetchAddBudget()
        return response
})

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
        //
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchBudgetsAsync.pending, (state) => {
            state.errors = null // to clear out errors at page refresh
            state.status = 'loading'
        })
        .addCase(fetchBudgetsAsync.fulfilled, (state, action) => {
            state.entities = action.payload
            // state.errors = null // to clear out errors at page refresh
            state.status = 'fulfilled'
        })
        .addCase(fetchBudgetsAsync.rejected, (state) => {
            state.status = 'rejected'
        })
        .addCase(addBudget.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                state.entities.push(action.payload)
                state.errors = null
                state.status = 'fulfilled'
            }
        })
        // .addCase(addNewExpenseToCategory.pending, (state) => {
        //     state.status = 'loading'
        // })
        // .addCase(addNewExpenseToCategory.fulfilled, (state, action) => {
        //     if (action.payload.errors) {
        //         state.errors = action.payload.errors
        //     } else {
        //         const categoryFound = state.entities.find(c => c.id ===  parseInt(action.payload.category_id))
        //         categoryFound.user_expenses.push(action.payload)
        //         state.errors = null
        //         state.status = 'fulfilled'
        //     }
        // })
        // .addCase(editExpense.fulfilled, (state, action) => {
        //     if (action.payload.errors) {
        //         state.errors = action.payload.errors
        //     } else {
        //         const categoryFound = state.entities.find(c => c.id ===  parseInt(action.payload.category_id))
        //         const newExpenses = categoryFound.user_expenses.map(e => e.id ===  parseInt(action.payload.id) ? action.payload : e)
        //         categoryFound.user_expenses = newExpenses
        //         state.errors = null
        //         state.status = 'fulfilled'
        //     }
        // })
        // .addCase(deleteExpense.fulfilled, (state, action) => {
        //     const categoryFound = state.entities.find(c => c.id ===  parseInt(action.payload.category_id))
        //     const newExpenses = categoryFound.user_expenses.filter(e => e.id !== action.payload.id)
        //     categoryFound.user_expenses = newExpenses
        //     state.status = 'fulfilled'
        // })
    }

})

export default budgetsSlice.reducer