import React from 'react'
import Home from './pages/Home'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { userData } from './data'
import useLocalStorage from 'use-local-storage'
import { WorkoutContext } from './context/WorkoutContext'
import AddWorkout from './pages/AddWorkout'
import EditWorkout from './pages/EditWorkout'
import Profile from './pages/Profile'

function Layout() {
  return (
    <>
      <Navbar expand='lg' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Fitness App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Workouts</Nav.Link>
              <Nav.Link href="/">Goals & Statistics</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>


      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  const [userDetails, setUserDetails] = useLocalStorage('workouts', userData)

  return (

    <WorkoutContext.Provider value={{ userDetails, setUserDetails }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='add' element={<AddWorkout />} />
            <Route path='workout/:id' element={<EditWorkout />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WorkoutContext.Provider>

  )
}
