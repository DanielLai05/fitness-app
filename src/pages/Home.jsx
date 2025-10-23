import React, { useContext } from 'react'
import { userData } from '../data'
import { Col, Container, Row } from 'react-bootstrap';
import WorkoutCard from '../components/WorkoutCard';
import { WorkoutContext } from '../context/WorkoutContext';


export default function Home() {
  const { userDetails } = useContext(WorkoutContext);
  return (
    <Container className='my-3 px-4'>
      <h3 className='text-light'>{userData.name}'s workouts</h3>
      <Container>
        <Row>
          {
            userDetails.workouts.map((workout, index) => (
              <WorkoutCard workout={workout} key={index} />
            ))
          }
        </Row>
      </Container>
    </Container>
  )
}
