import { Nav, NavbarBrand,NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../assets/Shohoz_logo_173x74.svg'
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Navber() {
  const navagation=useNavigate();
  const user=JSON.parse(localStorage.getItem('user-info'));
  function logout(){
    localStorage.clear();
    navagation("/login")
  }
  return (
    <div className='container-fulid '>
      <Navbar className='bg-light  shadow  rounded ' >
        <Container >
          <NavbarBrand href="/"> <img src={Logo} alt="Shohoz_logo" style={{ height: "60px" }} /> </NavbarBrand>

          <Nav  >
            <NavDropdown title={<span><i className="fa fa-user" ></i> {user.name}</span>}  >
              <NavDropdown.Item onClick={logout} style={{ color: "black" }} > <i className="fa fa-sign-out"></i>Log out</NavDropdown.Item>
              <NavDropdown.Item style={{ color: "black" }}>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Container>
      </Navbar>
    </div>
  );
}

export default Navber;
