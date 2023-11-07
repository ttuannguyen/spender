import React from 'react'
import { Carousel } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <Carousel data-bs-theme="dark" className='my-4'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://magazine.vitality.co.uk/wp-content/uploads/2021/06/vitality_june21_Heres_why_you_suddenly_feel_so_guilty_about_spending_money_and_youre_not_alone-HERO-01.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Set Budgets To Manage Your Spending</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://strategyonline.ca/wp/wp-content/uploads/2020/05/onlineshoppingillustrated-623x350.png?720580"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Keep Track Of Your Expenses</h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default LandingPage