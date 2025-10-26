import React, { useContext } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import GoalCard from '../components/GoalCard'
import { WorkoutContext } from '../context/WorkoutContext'
import { useNavigate } from 'react-router-dom';

export default function GoalsAndStats() {
  const { userDetails } = useContext(WorkoutContext);
  const navigate = useNavigate();
  return (
    <Container className='my-3 px-4'>
      <div className='d-flex justify-content-between'>
        <h3>Goals & Statistic</h3>
        <Button
          variant='secondary'
          className='w-auto m-2'
          onClick={() => navigate('/stats/add')}
        >
          <i class="bi bi-plus-lg"></i>
        </Button>
      </div>
      <Container fluid className='m-2'>
        {
          userDetails.goals.map((goal, index) => (
            <GoalCard goal={goal} key={index} />
          ))
        }
      </Container>
    </Container>
  )
}
