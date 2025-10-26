import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditGoals() {
  const id = parseInt(useParams().id);
  const { userDetails, setUserDetails } = useContext(WorkoutContext);
  const currentGoal = userDetails.goals.filter((goal) => goal.id === id)[0];
  const [goal, setGoal] = useState(currentGoal.goal);
  const [latestRecord, setLatestRecord] = useState(currentGoal.latestRecord);
  const [completed, setCompleted] = useState(currentGoal.completed)
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = userDetails.goals.map((g) => {
      if (g.id === id) {
        return {
          id,
          goal,
          latestRecord,
          completed
        }
      } else {
        return g
      }
    })
    setUserDetails({ ...userDetails, goals: newGoal })
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
        <Form.Group className="mb-3">
          <Form.Check
            onChange={(e) => setCompleted(e.target.checked)}
            checked={completed}
            label="Goals Achieved"
          />
        </Form.Group>
        <Button
          type='submit'
        >Add</Button>
      </Form>
    </Container>
  )
}
