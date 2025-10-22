import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { WorkoutContext } from '../context/WorkoutContext';
import { useNavigate } from 'react-router-dom';

export default function AddWorkout() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [warmUpReps, setWarmUpReps] = useState(0);
  const [warmUpSets, setWarmUpSets] = useState(0);
  const [workingReps, setWorkingReps] = useState(0);
  const [workingSets, setWorkingSets] = useState(0);
  const [notes, setNotes] = useState('');
  const { userDetails, setUserDetails } = useContext(WorkoutContext)
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const workoutDetail = {
      id: Date.now(),
      name,
      warmUpSets,
      warmUpReps,
      workingSets,
      workingReps,
      weight,
      notes,
      completed: false
    }
    setUserDetails({ ...userDetails, workouts: [...userDetails.workouts, workoutDetail] });
    navigate('/')
  }
  return (
    <Container data-bs-theme="dark" className='my-3'>
      <Form onSubmit={handleSubmit}>
        <h2>Add Workout</h2>
        <Form.Group className="my-3" >
          <Form.Label>Exercise name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter exercise name"
          />
        </Form.Group>

        <Form.Group className="my-3" >
          <Form.Label>Weight</Form.Label>
          <Form.Control
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            placeholder="Enter weight"
          />
        </Form.Group>

        <Row className='my-3'>
          <Form.Group as={Col}>
            <Form.Label>Warm-up reps</Form.Label>
            <Form.Control
              onChange={(e) => setWarmUpReps(e.target.value)}
              type="number"
              placeholder="Enter warm-up sets"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Warm-up sets</Form.Label>
            <Form.Control
              onChange={(e) => setWarmUpSets(e.target.value)}
              type="number"
              placeholder="Enter warm-up sets"
            />
          </Form.Group>

        </Row>
        <Row className='my-3'>
          <Form.Group as={Col}>
            <Form.Label>Working reps</Form.Label>
            <Form.Control
              onChange={(e) => setWorkingReps(e.target.value)}
              type="number"
              placeholder="Enter working sets"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Working sets</Form.Label>
            <Form.Control
              onChange={(e) => setWorkingSets(e.target.value)}
              type="number"
              placeholder="Enter working sets"
            />
          </Form.Group>
        </Row>

        <Form.Group className='my-3'>
          <Form.Label>
            Notes
          </Form.Label>
          <Form.Control
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            as='textarea'
            placeholder='Enter notes'
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
