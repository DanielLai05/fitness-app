import { useContext, useState } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { WorkoutContext } from '../context/WorkoutContext';
import { useNavigate } from 'react-router-dom';

export default function AddWorkout() {
  const [nameWeightLifting, setNameWeightLifting] = useState('');
  const [weight, setWeight] = useState(0);
  const [warmUpReps, setWarmUpReps] = useState(0);
  const [warmUpSets, setWarmUpSets] = useState(0);
  const [workingReps, setWorkingReps] = useState(0);
  const [workingSets, setWorkingSets] = useState(0);
  const [notesWeightLifting, setNotesWeightLifting] = useState('');
  const [nameCardio, setNameCardio] = useState('');
  const [notesCardio, setNotesCardio] = useState('');
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [tab, setTab] = useState('weight-lifting');
  const { userDetails, setUserDetails } = useContext(WorkoutContext)
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const workoutDetail = tab === 'weight-lifting' ?
      {
        type: 'weight-lifting',
        id: Date.now(),
        name: nameWeightLifting,
        warmUpSets,
        warmUpReps,
        workingSets,
        workingReps,
        weight,
        notes: notesWeightLifting,
        completed: false
      }
      :
      {
        type: 'cardio',
        id: Date.now(),
        name: nameCardio,
        distance,
        time,
        notes: notesCardio,
        completed: false
      }

    setUserDetails({ ...userDetails, workouts: [...userDetails.workouts, workoutDetail] });
    navigate('/')
  }
  return (

    <Container data-bs-theme="dark" className='my-3'>
      <Tabs
        defaultActiveKey="weight-lifting"
        className="mb-3"
        onSelect={(k) => setTab(k)}
      >
        <Tab eventKey="weight-lifting" title="Weight Lifting">
          <Form onSubmit={handleSubmit}>
            <h2>Add Workout</h2>
            <Form.Group className="my-3" >
              <Form.Label>Exercise name</Form.Label>
              <Form.Control
                onChange={(e) => setNameWeightLifting(e.target.value)}
                value={nameWeightLifting}
                type="text"
                placeholder="Enter exercise name"
              />
            </Form.Group>

            <Form.Group className="my-3" >
              <Form.Label>Weight (kg)</Form.Label>
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
                onChange={(e) => setNotesWeightLifting(e.target.value)}
                value={notesWeightLifting}
                as='textarea'
                placeholder='Enter notes'
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="cardio" title="Cardio">
          <Form onSubmit={handleSubmit}>
            <h2>Add Workout</h2>
            <Form.Group className="my-3" >
              <Form.Label>Exercise name</Form.Label>
              <Form.Control
                onChange={(e) => setNameCardio(e.target.value)}
                value={nameCardio}
                type="text"
                placeholder="Enter exercise name"
              />
            </Form.Group>

            <Form.Group className="my-3" >
              <Form.Label>Distance (km)</Form.Label>
              <Form.Control
                onChange={(e) => setDistance(e.target.value)}
                type="number"
                placeholder="Enter distance"
              />
            </Form.Group>


            <Form.Group as={Col}>
              <Form.Label>Time (minutes)</Form.Label>
              <Form.Control
                onChange={(e) => setTime(e.target.value)}
                type="number"
                placeholder="Enter time"
              />
            </Form.Group>

            <Form.Group className='my-3'>
              <Form.Label>
                Notes
              </Form.Label>
              <Form.Control
                onChange={(e) => setNotesCardio(e.target.value)}
                value={notesCardio}
                as='textarea'
                placeholder='Enter notes'
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Tab>
      </Tabs>

    </Container>
  );
}
