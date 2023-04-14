import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBudgets } from "./BudgetApi";

const initialState = {
    entities: [],
    status: 'idle'
}

const budgetsSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
        //
    }
})

export default budgetsSlice.reducer