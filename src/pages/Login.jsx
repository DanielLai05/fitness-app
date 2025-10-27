import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { WorkoutContext } from '../context/WorkoutContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { userDetails, setUserDetails } = useContext(WorkoutContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (email === userDetails.email && password === userDetails.password) {
      setUserDetails({ ...userDetails, isLogin: true })
      navigate('/')
    } else {
      setErrorMessage('Invalid email or password');
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
      <h1 >Welcome to Fitness App</h1>
      <h5>Please login</h5>
      <Container className='bg-dark p-4 w-50 rounded-3 mt-3 shadow-p'>
        <Form data-bs-theme='dark' onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className="text-danger">
              {errorMessage}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  )
}
