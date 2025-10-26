import React, { useContext } from 'react'
import { userData } from '../data'
import { Container, Row, Badge } from 'react-bootstrap';
import WorkoutCard from '../components/WorkoutCard';
import { WorkoutContext } from '../context/WorkoutContext';
import AddWorkout from './AddWorkout';
import AddWorkoutCard from '../components/AddWorkoutCard';


export default function Home() {
  const { userDetails } = useContext(WorkoutContext);
  const completedWorkout = userDetails.workouts.filter((workout) => workout.completed)
  return (
    <Container className='my-3 px-4'>
      <h3 className='text-light'>{userData.name}'s workouts</h3>
      <Badge bg='primary' pill className='mb-3'>
        Completed: {completedWorkout.length}/{userDetails.workouts.length}
      </Badge>
      <Container>
        <Row>
          {
            userDetails.workouts.map((workout, index) => (
              <WorkoutCard workout={workout} key={index} />
            ))
          }
          <AddWorkoutCard length={userDetails.workouts.length} />
        </Row>
      </Container>
    </Container>
  )
}
