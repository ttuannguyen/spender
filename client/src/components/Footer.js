import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container variant='primary'>
      <Row>
        <Col className='text-center py-3'>Copyright © 2023 Spender</Col>
      </Row>
    </Container>
  )
}

export default Footer