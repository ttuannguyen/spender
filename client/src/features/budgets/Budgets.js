import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BudgetCard from "./BudgetCard";

const Budgets = () => {

    const loggedIn = useSelector(state => state.user.loggedIn)
    // const budgets = useSelector(state => state.budgets.entities)
    const budgets = ['Rent & Utilities', 'Groceries', 'Entertainment', 'Essentials', 'Transportation', 'Subscriptions', 'Other']

    if (loggedIn) {

        const budgetsList = budgets.map(budget => <h4>{budget}</h4>)
        // const budgetButtons = budgets.map(budget => <BudgetCard key={budget.id} budget={budget}/>)

        return (
            <div>
                <h3>Here are the available budgets</h3>
                {budgetsList}
                {/* {budgetButtons} */}
                <Link to={'/budgets/new'}>
                    <button className="btn btn-primary">Add A Budget</button>
                </Link>
            </div>
        )   
    }
}

export default Budgets