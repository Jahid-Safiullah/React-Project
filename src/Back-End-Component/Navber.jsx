import { Nav,NavbarBrand, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Shohoz_logo_173x74.svg'

import { NavLink } from 'react-router-dom';
function Navber() {
  return (
    <Navbar className='bg-light  shadow  rounded ' >
    <Container>
        <NavbarBrand href="/"> <img src={Logo} alt="Shohoz_logo" style={{height:"60px"}} /> </NavbarBrand>
        
        <Nav  className=" nav me-auto  ">
        <NavLink className='  fw-bold p-2' to="/">Home</NavLink>
        <NavLink  className=' fw-bold p-2' to="/B"><i className=" fa-solid fa-bus-simple p-1" />Bus</NavLink>
        <NavLink className='  fw-bold p-2' to="/L"><i className=" fa-solid fa-ship p-1 "></i>Launch</NavLink>
        <NavLink className=' fw-bold p-2' to="/T"><i className=" fa-solid fa-train-subway p-1"></i>Train</NavLink>
        <NavLink className=' fw-bold p-2' to="/L">Logout</NavLink>
      </Nav>
      
    </Container>
  </Navbar>
  
  );
}

export default Navber;
