import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBudgets } from "./BudgetApi";

const initialState = {
    entities: [],
    errors: null,
    status: 'idle',
    budgetActionStatus: 'idle',
    expenseActionStatus: 'idle'
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

export const editBudget = createAsyncThunk(
    'budget/editBudget',
    async ({params, amount}) => {
        const fetchEditBudget = () => {
            return fetch(`/budgets/${params.id}`,{
                method:'PATCH',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({"amount": amount})
            })
            .then(res => res.json())
            .then(data => data)
        }
        const response = await fetchEditBudget()
        return response
    }
)


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
            return fetch(`/budgets/${params.budget_id}/expenses/${params.id}`,{
                method:'DELETE',
                headers:{'Content-Type': 'application/json'},
            })
            // return fetch(`/expenses/${params.id}`,{
            //     method:'DELETE',
            //     headers:{'Content-Type': 'application/json'},
            // })
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
        resetBudgetErrors(state) {
            state.errors = null
        },
        resetBudgetActionStatus(state) {
            state.budgetActionStatus = 'idle'
        },
        resetExpenseActionStatus(state) {
            state.expenseActionStatus = 'idle'
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchBudgetsAsync.pending, (state) => {
            state.errors = null // to clear out errors at page refresh
            state.status = 'loading'
            state.budgetActionStatus = 'idle'
            state.expenseActionStatus = 'idle'
        })
        .addCase(fetchBudgetsAsync.fulfilled, (state, action) => {
            state.entities = action.payload
            // state.errors = null // to clear out errors at page refresh
            state.status = 'fulfilled'
        })
        .addCase(fetchBudgetsAsync.rejected, (state) => {
            state.status = 'rejected'
        })
        .addCase(addBudget.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(addBudget.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                state.entities.push(action.payload)
                state.errors = null
                state.status = 'fulfilled'
                state.budgetActionStatus = 'fulfilled'
            }
        })
        .addCase(editBudget.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                const budgetFound = state.entities.find(b => b.id ===  parseInt(action.payload.id))
                budgetFound.amount = action.payload.amount
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
                budgetFound.expenses.push(action.payload)
                state.errors = null
                state.status = 'fulfilled'
                state.expenseActionStatus = 'fulfilled'
            }
        })
        .addCase(editExpense.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.errors = action.payload.errors
            } else {
                const budgetFound = state.entities.find(b => b.id ===  parseInt(action.payload.budget_id))
                const newExpenses = budgetFound.expenses.map(e => e.id ===  parseInt(action.payload.id) ? action.payload : e)
                budgetFound.expenses = newExpenses
                state.errors = null
                state.status = 'fulfilled'
                state.expenseActionStatus = 'fulfilled'
            }
        })
        .addCase(deleteExpense.fulfilled, (state, action) => {
            const budgetFound = state.entities.find(b => b.id ===  parseInt(action.payload.budget_id))
            const newExpenses = budgetFound.expenses.filter(e => e.id !== action.payload.id)
            budgetFound.expenses = newExpenses
            state.status = 'fulfilled'
        })
    }

})

export default budgetsSlice.reducer
export const { resetBudgetErrors, resetExpenseActionStatus, resetBudgetActionStatus } = budgetsSlice.actions