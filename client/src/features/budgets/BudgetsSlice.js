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
    }

})

export default budgetsSlice.reducer