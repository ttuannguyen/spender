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
            // using createSlice lets us mutate state!
            state.data.push(action.payload)
        },
        editExpense(state, action) {
            const newArr = state.data.map(e => e.id === action.payload.id ? action.payload : e)
            state.data = newArr
        },
        deleteExpense(state, action) {
            const newArr = state.data.filter(e => e.id !== action.payload.id)
            console.log(newArr)
            state.data = newArr
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
export const {addExpense, editExpense, deleteExpense} = expensesSlice.actions