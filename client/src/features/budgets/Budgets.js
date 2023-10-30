import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BudgetCard from "./BudgetCard";
import { Card, Col, Row } from "react-bootstrap";

const Budgets = () => {

    const loggedIn = useSelector(state => state.user.loggedIn)
    // const budgets = useSelector(state => state.budgets.entities)

    const budgets = [
        {name: 'Rent & Utilities', description: "This budget includes all expenses related to rent payments, mortgage payments, electricity, water, gas, internet bills, etc."},
        {name: 'Groceries', description: 'This budget includes all expenses related to recreational activities, such as movies, concerts, dining out, and other forms of entertainment.'},
        {name: 'Entertainment', description: 'This budget is for leisure and recreational activities and includes expenses related to movies, concerts, dining out, hobbies, and other forms of entertainment.'},
        {name: 'Essentials', description: 'This budget is designed to cover the basic necessities for daily usage.'},
        {name: 'Transportation', description: 'This budget is designed to track and manage expenses related to transportation, such as Uber, Lyft, taxi and public transportation costs.'},
        {name: 'Subscription', description: 'This budget includes expenses related to various subscriptions, such as streaming services, online memberships, and software subscriptions.'},
        {name: 'Other', description: 'This budget includes all other expenses'}
    ]

    if (loggedIn) {

        const budgetCards = budgets.map(budget => {
            
            
            return ( 
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Card style={{ width: '18rem' }} className="mb-2">
                    <Card.Body>
                        <Card.Title><strong>{budget.name}</strong></Card.Title>
                        <Card.Text>{budget.description}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            )
        })
        // const budgetButtons = budgets.map(budget => <BudgetCard key={budget.id} budget={budget}/>)

        return (
            <div className="py-3">
                <Row>
                    {budgetCards}
                </Row>
                {/* {budgetButtons} */}
                <Link to={'/budgets/new'}>
                    <button className="btn btn-primary">Set A Budget</button>
                </Link>
            </div>
        )   
    }
}

export default Budgets