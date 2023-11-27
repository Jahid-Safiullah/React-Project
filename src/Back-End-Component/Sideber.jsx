import { NavLink } from "react-router-dom";
import { Nav,NavDropdown } from "react-bootstrap";
import "./Sideber.css"
import React from 'react'
import { Link } from 'react-router-dom'
import Navber from "./Navber";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const user=JSON.parse(localStorage.getItem('user-info'));
  const navagation=useNavigate();
  function logout(){
    localStorage.clear();
    navagation("/login")
  }

  return (
    <>
      <div className="container-fluid ">
          <aside className="sidebar">
            <div className="logo">
            
            <img src="..\assets\Shohoz_logo_173x74.svg" alt="Shohoz_logo" style={{height:"60px"}} />
              <h2>Admin Dashboard</h2>
            </div>

            <ul className="menu">
              <Nav>
                <li><Link to="/Dashbord" className="active"><i className="fa fa-home"></i> Dashboard</Link></li>
                {/* <li><Link to="/adduser"><i className="fa fa-user-plus"></i>Bus</Link> </li> */}
                <div className="dropdown">

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/adduser">Launch</a></li>
                    <li><a className="dropdown-item" href="/userlist">Train</a></li>
                  </ul>
                </div>


                <li><Link to="/BusBookingList"><i className="fa fa-bus"></i> Bus Management</Link></li>

                <li><Link to="/LaunchManagment"><i className="fa fa-ship"></i> Launch Management</Link></li>
                <li><Link to="/TrainManagement"><i className="fa fa-train"></i> Train Management</Link></li>
                <li><Link to="/reports"><i className="fa fa-bar-chart"></i> Reports</Link></li>

                <li><Link to="/Logout"> Log out</Link></li>
                
               <li>
               <NavDropdown title={user.name} style={{color:"white"}} >
                  <NavDropdown.Item onClick={logout} style={{color:"black"}} > <i className="fa fa-sign-out"></i>Log out</NavDropdown.Item>
                  <NavDropdown.Item style={{color:"black"}}>Profile</NavDropdown.Item>
                </NavDropdown>
               </li>
              </Nav>

            </ul>
          </aside>
      </div>
    </>
  )
}

export default Sidebar





