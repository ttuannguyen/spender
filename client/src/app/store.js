import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/CounterSlice';
import categoriesReducer from '../features/categories/CategoriesSlice';
import expensesReducer from '../features/expenses/ExpensesSlice';
import loginReducer from '../features/auth/LoginSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesReducer,
        expenses: expensesReducer,
        login: loginReducer
    }
})