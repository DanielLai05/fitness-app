import React from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'

export default function GoalCard() {
  return (
    <Container fluid className='m-2'>
      <Row className='bg-warning text-dark p-3 m-2 rounded-4 align-items-center'>
        <Col md={4}>Goal: Run 5KM</Col>
        <Col md={4}>Latest Record: 4km</Col>
        <Col md={4} className='d-flex justify-content-end'>
          <Button variant='success' className='me-1'>Update</Button>
          <Button variant='danger'>
            <i class="bi bi-trash3"></i>
          </Button>
        </Col>
      </Row>
    </Container>


  )
}
