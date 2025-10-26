import React from 'react'
import { Container } from 'react-bootstrap'
import GoalCard from '../components/GoalCard'

export default function GoalsAndStats() {
  return (
    <Container className='my-3 px-4'>
      <h3>Goals & Statistic</h3>
      <GoalCard />
    </Container>
  )
}
