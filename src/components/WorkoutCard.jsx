import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext'
import { useNavigate } from 'react-router-dom';

export default function WorkoutCard({ workout }) {
  const { userDetails, setUserDetails } = useContext(WorkoutContext);
  const [show, setShow] = useState(false);
  const completionColor = workout.completed ? 'success' : 'secondary';
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

  const handleCloseModal = () => {
    setShow(false);
  }

  const handleDelete = (id) => {
    console.log(id);
    const newWorkouts = userDetails.workouts.filter((workout) => workout.id !== id);
    setUserDetails({ ...userDetails, workouts: newWorkouts });
    console.log(newWorkouts);
    handleCloseModal();
  }


  return (
    <>
      {workout.type === 'weight-lifting' ? (
        <Col lg={3} className='my-2'>
          <Card bg='dark' text='light' border={`${completionColor} border-3`} className='h-100'>
            <Card.Header className={`border-${completionColor} border-3`}>{workout.name}</Card.Header>
            <Card.Body className='d-flex flex-column'>
              <Card.Subtitle className='mb-1'>Weight: {workout.weight} kg</Card.Subtitle>
              <Card.Subtitle className='mb-1'>Warm-up sets {workout.warmUpSets} x {workout.warmUpReps} reps</Card.Subtitle>
              <Card.Subtitle className='mb-1'>Working sets {workout.workingSets} x {workout.workingSets} reps</Card.Subtitle>
              <Card.Text>{workout.notes}</Card.Text>
              <div className='mt-auto'>
                <Button
                  variant={completionColor}
                  className='me-2 mt-auto'
                  onClick={() => completionToogle(workout.id)}
                >
                  {
                    workout.completed ?
                      <i className="bi bi-patch-check-fill"></i> :
                      <i className="bi bi-patch-check"></i>
                  }
                </Button>
                <Button
                  variant='warning'
                  className='me-2'
                  onClick={() => navigate(`/workout/${workout.id}`)}
                >Edit</Button>
                <Button
                  variant='danger'
                  onClick={() => setShow(true)}
                >
                  <i className="bi bi-trash3"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <Col lg={3} className='my-2'>
          <Card bg='dark' text='light' border={`${completionColor} border-3`} className='h-100'>
            <Card.Header className={`border-${completionColor} border-3`}>{workout.name}</Card.Header>
            <Card.Body className='d-flex flex-column'>
              <Card.Subtitle className='mb-1'>Distance: {workout.distance} km</Card.Subtitle>
              <Card.Subtitle className='mb-1'>Time: {workout.time} minutes</Card.Subtitle>
              <Card.Text>{workout.notes}</Card.Text>
              <div className='mt-auto'>
                <Button
                  variant={completionColor}
                  className='me-2 mt-auto'
                  onClick={() => completionToogle(workout.id)}
                >
                  {
                    workout.completed ?
                      <i className="bi bi-patch-check-fill"></i> :
                      <i className="bi bi-patch-check"></i>
                  }
                </Button>
                <Button
                  variant='warning'
                  className='me-2'
                  onClick={() => navigate(`/workout/${workout.id}`)}
                >Edit</Button>
                <Button
                  variant='danger'
                  onClick={() => setShow(true)}
                >
                  <i className="bi bi-trash3"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )
      }

      <Modal show={show} onHide={handleCloseModal} data-bs-theme='dark'>
        <Modal.Header closeButton>
          <Modal.Title>Delete workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this workout?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(workout.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
