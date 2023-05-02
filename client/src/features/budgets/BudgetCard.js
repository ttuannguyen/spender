import React from 'react'
import { Link } from 'react-router-dom'

const BudgetCard = ({budget}) => {

    return (

        <div>
            <Link to={`/budgets/${budget.id}`} >
                <p>{budget.name}</p>
            </Link>
        </div>
        // <div>
        //     <button type='button' style={{ textDecoration: 'none'}}>
        //         <Link to={`/budgets/${budget.id}`} >
        //             <p>{budget.name}</p>
        //         </Link>
        //     </button>
        // </div>
    )
}

export default BudgetCard