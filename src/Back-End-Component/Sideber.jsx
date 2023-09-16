import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Sideber.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <aside className="sidebar">
        <div className="logo">
          {/* <img src="logo.png" alt="Company Logo"> */}
          <h2>Admin Dashboard</h2>
        </div>

        <ul className="menu">
          <Nav>
            <li><Link to="/" className="active"><i className="fa fa-home"></i> Dashboard</Link></li>
            <li><Link to="/adduser"><i className="fa fa-user-plus"></i>Bus</Link> </li>
            <div className="dropdown">

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/adduser">Launch</a></li>
                <li><a className="dropdown-item" href="/userlist">Train</a></li>
              </ul>
            </div>


            <li><Link to="/BusManagement"><i className="fa fa-bus"></i> Bus Management</Link></li>
            <li><Link to="/LaunchManagment"><i className="fa fa-ship"></i> Launch Management</Link></li>
            <li><Link to="/TrainManagement"><i className="fa fa-train"></i> Train Management</Link></li>
            <li><Link to="/reports"><i className="fa fa-bar-chart"></i> Reports</Link></li>


            <li><Link to="/Logout"><i className="fa fa-sign-out"></i> Log out</Link></li>

          </Nav>

        </ul>
      </aside>

    </div>
  )
}

export default Sidebar


{/* <div className="bakendsideber">
      <Nav defaultActiveKey="/home" className=" flex-column">
      <NavLink className={"itemdesign"} to="/home">Active</NavLink>
      <NavLink className={"itemdesign"} to="/BusDashbord">Bus Dashbord</NavLink>
      <NavLink className={"itemdesign"} to="LaunchDashbord">Launch Dashbord</NavLink>
      <NavLink className={"itemdesign"} to="/TrainDashbord" >Train Dashbord</NavLink>
    </Nav>
      </div> */}



