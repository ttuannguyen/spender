// import { connect } from 'react-redux'
import { combineReducers } from 'redux';
import sessionsReducer from './sessionsReducer';
import errorsReducer from './errorsReducer';
import expensesReducer from './expensesReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    errors: errorsReducer,
    sessions: sessionsReducer, 
    expenses: expensesReducer,
    categories: categoriesReducer
})