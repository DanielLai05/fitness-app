import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { userDetails } from '../data'

export default function WorkoutCard() {
  const { workouts } = userDetails
  return (
    <>
      <Row>
        {workouts.map((workout) => (
          <Col xss={3} className='my-2 mx-1'>
            <Card style={{ width: '250px' }}>
              <Card.Body>
                <Card.Title>{workout.exercise}</Card.Title>
                <Card.Subtitle className='mb-1'>Warm-up {workout.warmUpSet} x {workout.warmUpReps} reps</Card.Subtitle>
                <Card.Subtitle className='mb-1'>Warm-up {workout.workingSet} x {workout.workingSet} reps</Card.Subtitle>
                <Card.Text>{workout.note}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
