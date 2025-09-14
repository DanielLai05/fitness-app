import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext'

export default function WorkoutCard() {
  const { userDetails } = useContext(WorkoutContext);
  const { workouts } = userDetails;
  return (
    <>
      <Row>
        {workouts.map((workout, index) => (
          <Col xss={3} className='my-2' key={index}>
            <Card bg='dark' text='light' border='danger border-3' style={{ width: '300px' }}>
              <Card.Header className='border-danger border-3'>{workout.name}</Card.Header>
              <Card.Body>
                <Card.Subtitle className='mb-1'>Weight: {workout.weight} kg</Card.Subtitle>
                <Card.Subtitle className='mb-1'>Warm-up sets {workout.warmUpSet} x {workout.warmUpReps} reps</Card.Subtitle>
                <Card.Subtitle className='mb-1'>Working sets {workout.workingSet} x {workout.workingSet} reps</Card.Subtitle>
                <Card.Text>{workout.note}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
