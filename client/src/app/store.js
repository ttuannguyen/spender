import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/CounterSlice'
import categoriesReducer from '../features/categories/CategoriesSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesReducer
    }
})