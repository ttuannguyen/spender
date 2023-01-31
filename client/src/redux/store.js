import {configureStore, combineReducers} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import categoriesReducer from '../features/categories/CategoriesSlice';
import expensesReducer from '../features/expenses/ExpensesSlice';
import authReducer from '../features/auth/AuthSlice';
import userReducer from '../features/user/UserSlice';
// added after installing redux-persist
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({ 
    counter: counterReducer,
    categories: categoriesReducer,
    expenses: expensesReducer,
    auth: authReducer,
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk] // might not need
})



// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         categories: categoriesReducer,
//         expenses: expensesReducer,
//         auth: authReducer,
//         user: userReducer
//     }
// })

export const persistor = persistStore(store)
