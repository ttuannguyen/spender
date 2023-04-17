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

export const addNewExpenseToBudget = createAsyncThunk(
    'budgets/addNewExpenseToBudget', 
    async (formData) => {
        const fetchAddNewExpenseToBudgets = () => {
            return fetch('/expenses',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => data)
        }

        const response = await fetchAddNewExpenseToBudgets()
        return response
        // async thunk is handled with extra reducer, create a builder that responds to this case 
})


export const editExpense = createAsyncThunk(
    'expenses/editExpense',
    async ({params, formData}) => {
        console.log(params)
        console.log(formData)
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
        .addCase(addNewExpenseToBudget.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(addNewExpenseToBudget.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                const budgetFound = state.entities.find(b => b.id ===  parseInt(action.payload.budget_id))
                budgetFound.user_expenses.push(action.payload)
                state.errors = null
                state.status = 'fulfilled'
            }
        })
        .addCase(editExpense.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                const budgetFound = state.entities.find(b => b.id ===  parseInt(action.payload.budget_id))
                const newExpenses = budgetFound.user_expenses.map(e => e.id ===  parseInt(action.payload.id) ? action.payload : e)
                budgetFound.user_expenses = newExpenses
                state.errors = null
                state.status = 'fulfilled'
            }
        })
        .addCase(deleteExpense.fulfilled, (state, action) => {
            const budgetFound = state.entities.find(b => b.id ===  parseInt(action.payload.budget_id))
            const newExpenses = budgetFound.user_expenses.filter(e => e.id !== action.payload.id)
            budgetFound.user_expenses = newExpenses
            state.status = 'fulfilled'
        })
    }

})

export default budgetsSlice.reducer