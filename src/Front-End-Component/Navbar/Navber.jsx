// eslint-disable-next-line no-unused-vars
import React from 'react'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Shohoz_logo_173x74.svg'



export default function Navber() {
  return (
    <Navbar className='bg-light' data-bs-theme="dark">
    <Container>

        <Navbar.Brand href="logo "> <img src={Logo} alt="Shohoz_logo" style={{height:"60px"}} /> </Navbar.Brand>
        <Nav  className="me-auto p-3 ">
        <Nav.Link className='fw-bold pe-3' href="/home">Home</Nav.Link>
        <Nav.Link  className='fw-bold pe-3' href="/Bus"><i className="fa-solid fa-bus-simple p-1" />Bus</Nav.Link>
        <Nav.Link className='fw-bold pe-3' href="/Launch"><i className="fa-solid fa-ship p-1"></i>Launch</Nav.Link>
        <Nav.Link className='fw-bold pe-3' href="/Train"><i className="fa-solid fa-train-subway p-1"></i>Train</Nav.Link>
        <Nav.Link className='fw-bold' href="/Login">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    

  )
}
