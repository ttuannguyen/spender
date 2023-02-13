import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchExpenses } from './ExpensesApi';

const initialState = {
    entities: [],
    status: 'idle',
    toggle: false
}

export const fetchExpensesAsync = createAsyncThunk(
    'expenses/fetchExpenses',
    async () => {
        const response = await fetchExpenses()
        return response
    }
)

export const addNewNoteToExpense = createAsyncThunk(
    'categories/addNewNoteToExpense', 
    async (formData) => {
        const fetchAddNewNoteToExpense = () => {
            return fetch('/notes',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => data)
        }
        const response = await fetchAddNewNoteToExpense()
        return response
})

export const editExpense = createAsyncThunk(
    'expenses/editExpense',
    async ({id, formData}) => {
        const fetchEditExpense = () => {
            return fetch(`/expenses/${id}`,{
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
    async (id) => {
        const fetchDeletetExpense = () => {
            return fetch(`/expenses/${id}`,{
                method:'DELETE',
                headers:{'Content-Type': 'application/json'},
                // body:JSON.stringify(formData)
            })
            // .then(res => res.json())
            // .then(data => data)
        }
        fetchDeletetExpense()
        // const response = await fetchDeletetExpense()
        // return response
    }
)

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState, 
    reducers: {
        setToggle: state => {state.toggle = !state.toggle},
        // addExpense(state, action) {
        //     state.data.push(action.payload)
        // },
        // editExpense(state, action) {
        //     const newArr = state.data.map(e => e.id === action.payload.id ? action.payload : e)
        //     state.data = newArr
        // },
        // deleteExpense(state, action) {
        //     const newArr = state.data.filter(e => e.id !== action.payload.id)
        //     console.log(newArr)
        //     state.data = newArr
        // }
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(fetchExpensesAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchExpensesAsync.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = 'fulfilled'
            state.toggle = true
        })
        .addCase(fetchExpensesAsync.rejected, (state) => {
            state.status = 'rejected'
        })
        .addCase(editExpense.fulfilled, (state, action) => {
            const newExpenses = state.entities.map(e => e.id ===  parseInt(action.payload.id) ? action.payload : e)
            state.entities = newExpenses
            state.status = 'fulfilled'
        })   
        .addCase(addNewNoteToExpense.fulfilled, (state, action) => {
            const expenseFound = state.entities.find(e => e.id ===  parseInt(action.payload.expense_id))
            expenseFound.notes.push(action.payload)
            state.status = 'fulfilled'
        })
    }
})


export default expensesSlice.reducer
export const {setToggle} = expensesSlice.actions
// export const {addExpense, editExpense, deleteExpense} = expensesSlice.actions