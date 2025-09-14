import React from 'react'
import { userData } from '../data'
import { Col, Container, Row } from 'react-bootstrap';
import WorkoutCard from '../components/WorkoutCard';


export default function Home() {
  return (
    <Container className='my-3'>
      <h3>{userData.name}'s workout</h3>
      <Container>
        <WorkoutCard />

      </Container>
    </Container>
  )
}
