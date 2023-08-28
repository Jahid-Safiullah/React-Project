import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navber() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/Bus">Bus</Nav.Link>
        <Nav.Link href="/Launch">Launch</Nav.Link>
        <Nav.Link href="/Train">Train</Nav.Link>
        <Nav.Link href="/Login">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    

  )
}
