import React from 'react'
import { Link } from 'react-router-dom'

const BudgetLink = ({budget}) => {
    
    return (
        <div>
            <Link className='budget-link' to={`/budgets/${budget.id}`} style={{ textDecoration: 'none'}} >
            <span className="card" style={{"display": "block"}}>
                <h4>{budget.name}</h4>
            </span>
            </Link>
        </div>
    )
}

export default BudgetLink