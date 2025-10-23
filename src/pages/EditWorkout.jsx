import { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { WorkoutContext } from '../context/WorkoutContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditWorkout() {
  const id = parseInt(useParams().id);
  const { userDetails, setUserDetails } = useContext(WorkoutContext)
  const workout = userDetails.workouts.filter((workout) => workout.id === id)[0]

  const [name, setName] = useState(workout.name);
  const [weight, setWeight] = useState((workout.weight));
  const [warmUpReps, setWarmUpReps] = useState((workout.warmUpReps));
  const [warmUpSets, setWarmUpSets] = useState((workout.warmUpSets));
  const [workingReps, setWorkingReps] = useState((workout.workingReps));
  const [workingSets, setWorkingSets] = useState((workout.workingSets));
  const [notes, setNotes] = useState(workout.notes);
  const navigate = useNavigate();

  function handleUpdate(e) {
    e.preventDefault();
    const newWorkouts = userDetails.workouts.map((workout) => {
      if (workout.id === id) {
        return {
          completed: workout.completed,
          id,
          name,
          warmUpSets,
          warmUpReps,
          workingSets,
          workingReps,
          weight,
          notes
        }
      } else {
        return workout;
      }
    });
    console.log(newWorkouts);
    setUserDetails({ ...userDetails, workouts: newWorkouts });
    navigate('/')
  }
  return (
    <Container data-bs-theme="dark" className='my-3'>
      <Form onSubmit={handleUpdate}>
        <h2>Edit Workout</h2>
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
            value={weight}
            type="number"
            placeholder="Enter weight"
          />
        </Form.Group>

        <Row className='my-3'>
          <Form.Group as={Col}>
            <Form.Label>Warm-up reps</Form.Label>
            <Form.Control
              onChange={(e) => setWarmUpReps(e.target.value)}
              value={warmUpReps}
              type="number"
              placeholder="Enter warm-up sets"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Warm-up sets</Form.Label>
            <Form.Control
              onChange={(e) => setWarmUpSets(e.target.value)}
              value={warmUpSets}
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
              value={workingReps}
              type="number"
              placeholder="Enter working sets"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Working sets</Form.Label>
            <Form.Control
              onChange={(e) => setWorkingSets(e.target.value)}
              value={workingSets}
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
