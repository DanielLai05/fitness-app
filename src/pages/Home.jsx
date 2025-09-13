import React from 'react'
import { userDetails } from '../data'
import { Col, Container, Row } from 'react-bootstrap';
import WorkoutCard from '../components/WorkoutCard';


export default function Home() {
  return (
    <Container className='my-3'>
      <h3>{userDetails.name}'s workout</h3>
      <Container>
        <WorkoutCard />

      </Container>
    </Container>
  )
}
