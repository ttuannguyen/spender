import React from 'react'

const ExpenseDeleteButton = ({expense}) => {
    // const { user, toggle, setToggle } = useContext(UserContext);

    const handleClick = () => {
        // fetch(`/expense/${expense.id}`, {
        //     method: "DELETE",
        //     headers: {
        //       "Content-Type": "application/json",
        //     }
        // })
        // setToggle(!toggle)
        // console.log(expense.id)
    }
    
    return (
        <button onClick={handleClick}>Delete</button>
    )
}

export default ExpenseDeleteButton