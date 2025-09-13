import React from 'react'
import Home from './pages/Home'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar expand='lg' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/'>Workout Planner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="add">Add Workout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>


      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
