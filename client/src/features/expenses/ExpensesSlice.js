import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchExpenses } from './ExpensesApi';

const initialState = {
    data: [],
    status: 'idle'
}

export const fetchExpensesAsync = createAsyncThunk(
    'expenses/fetchExpenses',
    async () => {
        const response = await fetchExpenses()
        return response
    }
)

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState, 
    reducers: {
        addExpense(state, action) {
            state.data.push(action.payload)
        }
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(fetchExpensesAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchExpensesAsync.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'fulfilled'
        })
        .addCase(fetchExpensesAsync.rejected, (state) => {
            state.status = 'rejected'
        })
    }
})



export default expensesSlice.reducer
export const {addExpense} = expensesSlice.actions