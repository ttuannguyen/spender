import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Budgets = () => {

    const loggedIn = useSelector(state => state.user.loggedIn)

    if (loggedIn) {
        return (
            <div>Budgets</div>
        )   
    }
}

export default Budgets