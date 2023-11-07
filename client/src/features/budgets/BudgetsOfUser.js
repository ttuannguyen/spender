import React from 'react';
import { useSelector } from "react-redux";
import BudgetLink from './BudgetLink';

const BudgetsOfUser = () => {

    const budgets = useSelector(state => state.budgets.entities)
    console.log(budgets)
    const loggedIn = useSelector(state => state.user.loggedIn)


    if(loggedIn) {

      // const filteredBudgets = budgets.filter(budget => budget.user_expenses.length !==0)
      // const budgetsList = filteredBudgets.map(budget => <BudgetLink key={budget.id} budget={budget}/>)
      const budgetsList = budgets.map(budget => <BudgetLink key={budget.id} budget={budget}/>)
      // console.log(filteredBudgets)

      return (
        <div>
          <h3>My Budgets</h3>
          {budgetsList}
        </div>
      )
    } else {
      return (<h4>Please login or create an Account</h4>) 
    }
}

export default BudgetsOfUser