import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddWorkout() {
  return (
    <Container data-bs-theme="dark" className='my-3'>
      <Form>
        <h2>Add Workout</h2>
        <Form.Group className="my-3" >
          <Form.Label>Exercise name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter exercise name"
          />
        </Form.Group>

        <Form.Group className="my-3" >
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter weight"
          />
        </Form.Group>

        <Row className='my-3'>
          <Form.Group as={Col}>
            <Form.Label>Warm-up reps</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter warm-up sets"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Warm-up sets</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter warm-up sets"
            />
          </Form.Group>

        </Row>
        <Row className='my-3'>
          <Form.Group as={Col}>
            <Form.Label>Working reps</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter working sets"
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Working sets</Form.Label>
            <Form.Control
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
