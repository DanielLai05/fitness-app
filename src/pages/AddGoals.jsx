import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext';
import { useNavigate } from 'react-router-dom';

export default function AddGoals() {
  const [goal, setGoal] = useState('');
  const [latestRecord, setLatestRecord] = useState('');
  const { userDetails, setUserDetails } = useContext(WorkoutContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      id: Date.now(),
      goal,
      latestRecord,
      completed: false
    }
    setUserDetails({ ...userDetails, goals: [...userDetails.goals, newGoal] })
    navigate('/stats')
  }
  return (
    <Container className='my-3'>
      <h3>Add Goals</h3>
      <Form data-bs-theme="dark" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Goal</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter your goals'
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Label>Latest Record</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter your lastest record'
            value={latestRecord}
            onChange={(e) => setLatestRecord(e.target.value)}
          />
        </Form.Group>
        <Button
          type='submit'
        >Add</Button>
      </Form>
    </Container>
  )
}
