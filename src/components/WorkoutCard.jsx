import React, { useContext, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext'
import { useNavigate } from 'react-router-dom';

export default function WorkoutCard() {
  const { userDetails, setUserDetails } = useContext(WorkoutContext);
  const { workouts } = userDetails;
  const [show, setShow] = useState(false);

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
      <Row>
        {workouts.map((workout, index) => {
          const completionColor = workout.completed ? 'success' : 'danger';
          return (
            <div key={index}>
              <Col md={3} className='my-2' key={index}>
                <Card bg='dark' text='light' border={`${completionColor} border-3`}>
                  <Card.Header className={`border-${completionColor} border-3`}>{workout.name}</Card.Header>
                  <Card.Body>
                    <Card.Subtitle className='mb-1'>Weight: {workout.weight} kg</Card.Subtitle>
                    <Card.Subtitle className='mb-1'>Warm-up sets {workout.warmUpSets} x {workout.warmUpReps} reps</Card.Subtitle>
                    <Card.Subtitle className='mb-1'>Working sets {workout.workingSets} x {workout.workingSets} reps</Card.Subtitle>
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
                      variant='warning'
                      className='me-2'
                      onClick={() => navigate(`workout/${workout.id}`)}
                    >Edit</Button>
                    <Button
                      variant='danger'
                      onClick={() => setShow(true)}
                    >
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Modal show={show} onHide={handleCloseModal} data-bs-theme="dark">
                <Modal.Header closeButton>
                  <Modal.Title>Delete workout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this workout?</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleCloseModal}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(workout.id)}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )
        })}

      </Row>

    </>
  )
}
