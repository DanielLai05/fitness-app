import React, { useContext, useState } from 'react'
import { Alert, Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext';
import { useNavigate } from 'react-router-dom';

export default function GoalCard({ goal }) {
  const [show, setShow] = useState(false);
  const bgColor = goal.completed ? 'bg-success' : 'bg-warning text-dark';
  const { userDetails, setUserDetails } = useContext(WorkoutContext);
  const navigate = useNavigate();
  function deleteGoal(id) {
    const newGoals = userDetails.goals.filter((goal) => goal.id !== id);

    setUserDetails({ ...userDetails, goals: newGoals })
    setShow(false)
  }


  return (
    <>
      <Row className={`${bgColor} p-3 m-3 rounded-4 align-items-center`}>
        <Col md={3}>Goal: {goal.goal}</Col>
        <Col md={3}>Latest Record: {goal.latestRecord}</Col>
        <Col md={3}>
          {
            goal.completed ? 'Completed' : 'Not Completed'
          }
        </Col>
        <Col md={3} className='d-flex justify-content-end'>
          <Button
            variant='primary'
            className='me-1'
            onClick={() => navigate(`/stats/${goal.id}`)}
          >Update</Button>
          <Button
            variant='danger'
            onClick={() => setShow(true)}
          >
            <i className="bi bi-trash3"></i>
          </Button>
        </Col>

        <Modal show={show} onHide={() => setShow(false)} data-bs-theme='dark'>
          <Modal.Header closeButton>
            <Modal.Title>Delete Goal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this goal</Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteGoal(goal.id)}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </>

  )
}
