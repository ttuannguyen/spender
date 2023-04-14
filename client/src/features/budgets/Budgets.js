import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Budgets = () => {

    const loggedIn = useSelector(state => state.user.loggedIn)
    const budgets = useSelector(state => state.budgets.entities)
    console.log(budgets)


    if (loggedIn) {

        const budgetsList = budgets.map(budget => <p key={budget.id} budget={budget}>{budget.name}</p>)
        return (
            <div>
                Here are all the budgets
                {budgetsList}
                <Link to={'/budgets/new'}>
                    <button className="btn btn-primary">Add a New Budget</button>
                </Link>
            </div>
        )   
    }
}

export default Budgets