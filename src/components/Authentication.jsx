import React, { useContext } from 'react'
import { WorkoutContext } from '../context/WorkoutContext'
import { Navigate } from 'react-router-dom';

export default function Authentication({ children }) {
  const { userDetails } = useContext(WorkoutContext);
  return (
    userDetails.isLogin ? children : <Navigate to='/login' />
  )
}
