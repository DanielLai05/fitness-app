import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function AddWorkoutCard({ length }) {
  const navigate = useNavigate();

  function ColContent() {
    return (
      <Card bg='dark' text='light' border='secondary' className='h-100 p-0'>
        <Card.Body className='d-flex flex-column p-0'>
          <Button
            variant='dark'
            className='h-100 w-100 border-none'
            onClick={() => navigate('add')}
          >
            <i className="bi bi-plus-square fs-2"></i>
          </Button>
        </Card.Body>
      </Card>
    )
  }

  return (

    length % 4 === 0 ?
      (
        <Col lg={3} className='my-2' style={{ height: '210px' }}>
          <ColContent />
        </Col>
      )
      :
      (
        <Col lg={3} className='my-2'>
          <ColContent />
        </Col>
      )
  )
}
