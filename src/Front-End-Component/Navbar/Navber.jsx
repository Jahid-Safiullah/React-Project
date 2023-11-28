// eslint-disable-next-line no-unused-vars
import React from 'react'

import './Navbar.css'
import Container from 'react-bootstrap/Container';
import { Nav,Navbar,NavbarBrand} from 'react-bootstrap';

import Logo from '../../assets/Shohoz_logo_173x74.svg'
import { NavLink } from 'react-router-dom';



export default function Navber() {
  return (
    <Navbar className='bg-light sticky-top shadow  rounded ' >
    <Container>
        <NavbarBrand href="/"> <img src={Logo} alt="Shohoz_logo" style={{height:"60px"}} /> </NavbarBrand>
        
        <Nav  className=" nav me-auto  ">
        <NavLink className=' Nav-Link fw-bold p-2' to="/">Home</NavLink>
        <NavLink  className='Nav-Link fw-bold p-2' to="/Bus"><i className=" fa-solid fa-bus-simple p-1" />Bus</NavLink>
        <NavLink className=' Nav-Link fw-bold p-2' to="/Launch"><i className=" fa-solid fa-ship p-1 "></i>Launch</NavLink>
        <NavLink className='Nav-Link fw-bold p-2' to="/Train"><i className=" fa-solid fa-train-subway p-1"></i>Train</NavLink>
        <NavLink className='Nav-Link fw-bold p-2' to="/Login">Login</NavLink>
        <NavLink className='Nav-Link fw-bold p-2' to="/Registraion">Sign Up</NavLink>
      </Nav>
      
    </Container>
  </Navbar>
    

  )
}
