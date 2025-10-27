import React, { useContext } from 'react'
import Home from './pages/Home'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { userData } from './data'
import useLocalStorage from 'use-local-storage'
import { WorkoutContext } from './context/WorkoutContext'
import AddWorkout from './pages/AddWorkout'
import EditWorkout from './pages/EditWorkout'
import Profile from './pages/Profile'
import GoalsAndStats from './pages/GoalsAndStats'
import AddGoals from './pages/AddGoals'
import EditGoals from './pages/EditGoals'
import Login from './pages/Login'
import Authentication from './components/Authentication'

function Layout() {
  const { userDetails, setUserDetails } = useContext(WorkoutContext);
  return (
    <>
      <Navbar expand='lg' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/'>Fitness App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Workouts</Nav.Link>
              <Nav.Link href="/stats">Goals & Statistics</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className='mt-auto' onClick={() => setUserDetails({ ...userDetails, isLogin: false })}>
                Logout
              </Nav.Link>
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
          <Route
            path='/'
            element={
              <Authentication>
                <Layout />
              </Authentication>
            }
          >
            <Route index element={<Home />} />
            <Route path='workout/add' element={<AddWorkout />} />
            <Route path='workout/:id' element={<EditWorkout />} />
            <Route path='profile' element={<Profile />} />
            <Route path='stats' element={<GoalsAndStats />} />
            <Route path='stats/add' element={<AddGoals />} />
            <Route path='stats/:id' element={<EditGoals />} />
            <Route path='*' element={<Home />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>

      </BrowserRouter>
    </WorkoutContext.Provider>

  )
}
