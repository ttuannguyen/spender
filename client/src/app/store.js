import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import categoriesReducer from '../features/categories/CategoriesSlice';
import expensesReducer from '../features/expenses/ExpensesSlice';
import authReducer from '../features/auth/AuthSlice';
import userReducer from '../features/user/UserSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesReducer,
        expenses: expensesReducer,
        auth: authReducer,
        user: userReducer
    }
})