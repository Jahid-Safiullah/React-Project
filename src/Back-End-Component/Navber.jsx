import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
  return (
    <Navbar className='bg-light sticky-top shadow  rounded ' >
    <Container>
        <NavbarBrand href="/"> <img src={Logo} alt="Shohoz_logo" style={{height:"60px"}} /> </NavbarBrand>
        
        <Nav  className=" nav me-auto  ">
        <NavLink className='  fw-bold p-2' to="/">Home</NavLink>
        <NavLink  className=' fw-bold p-2' to="/Bus"><i className=" fa-solid fa-bus-simple p-1" />Bus</NavLink>
        <NavLink className='  fw-bold p-2' to="/Launch"><i className=" fa-solid fa-ship p-1 "></i>Launch</NavLink>
        <NavLink className=' fw-bold p-2' to="/Train"><i className=" fa-solid fa-train-subway p-1"></i>Train</NavLink>
        <NavLink className=' fw-bold p-2' to="/Login">Login</NavLink>
      </Nav>
      
    </Container>
  </Navbar>
    
  );
}

export default TextLinkExample;
