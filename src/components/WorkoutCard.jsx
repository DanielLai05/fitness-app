import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext'
import { useNavigate } from 'react-router-dom';

export default function WorkoutCard() {
  const { userDetails, setUserDetails } = useContext(WorkoutContext);
  const { workouts } = userDetails;
  const navigate = useNavigate();


  function completionToogle(id) {
    const newWorkouts = userDetails.workouts.map((workout) => {
      if (workout.id === id) {
        const newStatus = workout.completed ? false : true;
        return { ...workout, completed: newStatus }
      } else {
        return workout;
      }
    })
    setUserDetails({ ...userDetails, workouts: newWorkouts });
  }
  return (
    <>
      <Row>
        {workouts.map((workout, index) => {
          const completionColor = workout.completed ? 'success' : 'danger';
          return (
            <Col md={3} className='my-2' key={index}>
              <Card bg='dark' text='light' border={`${completionColor} border-3`}>
                <Card.Header className={`border-${completionColor} border-3`}>{workout.name}</Card.Header>
                <Card.Body>
                  <Card.Subtitle className='mb-1'>Weight: {workout.weight} kg</Card.Subtitle>
                  <Card.Subtitle className='mb-1'>Warm-up sets {workout.warmUpSet} x {workout.warmUpReps} reps</Card.Subtitle>
                  <Card.Subtitle className='mb-1'>Working sets {workout.workingSet} x {workout.workingSet} reps</Card.Subtitle>
                  <Card.Text>{workout.notes}</Card.Text>
                  <Button
                    variant={completionColor}
                    className='me-2'
                    onClick={() => completionToogle(workout.id)}
                  >
                    {
                      workout.completed ?
                        <i className="bi bi-patch-check-fill"></i> :
                        <i className="bi bi-patch-check"></i>
                    }
                  </Button>
                  <Button
                    variant='primary'
                    onClick={() => navigate(`workout/${workout.id}`)}
                  >Edit</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )
}
