import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext'

export default function WorkoutCard() {
  const { userDetails, setUserDetails } = useContext(WorkoutContext);
  const { workouts } = userDetails;
  return (
    <>
      <Row>
        {workouts.map((workout, index) => (
          <Col xss={3} className='my-2' key={index}>
            <Card style={{ width: '300px' }}>
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>
                <Card.Subtitle className='mb-1'>Weight: {workout.weight} kg</Card.Subtitle>
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
