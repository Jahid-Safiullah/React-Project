import { NavLink } from "react-router-dom";
import { Nav, } from "react-bootstrap";
import "./Dashbord.css"
import React from 'react'
import { Link } from 'react-router-dom'
import Navber from "./Navber";



const Sidebar = () => {

  return (
    <>
      <div className=" ">
          <aside className="sidebar" style={{marginTop:"88px"}}>
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
                {/* <li><Link to="/reports"><i className="fa fa-bar-chart"></i> Reports a</Link></li> */}
               <li className="" style={{}} >
                
               
               </li>
              </Nav>

            </ul>
          </aside>
      </div>
    </>
  )
}

export default Sidebar





