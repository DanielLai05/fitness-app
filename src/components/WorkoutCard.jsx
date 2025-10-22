import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext'
import { useNavigate } from 'react-router-dom';

export default function WorkoutCard() {
  const { userDetails } = useContext(WorkoutContext);
  const { workouts } = userDetails;
  const navigate = useNavigate();
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
                <Card.Text>{workout.notes}</Card.Text>
                <Button
                  variant='danger'
                  onClick={() => navigate(`workout/${workout.id}`)}
                ><i className='bi bi-pencil-square'></i></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
