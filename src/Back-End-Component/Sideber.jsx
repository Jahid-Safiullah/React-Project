import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Sideber.css"

function Sideber() {
  return (
    <div>
      <div className="bakendsideber">
      <Nav defaultActiveKey="/home" className=" flex-column">
      <NavLink className={"itemdesign"} to="/home">Active</NavLink>
      <NavLink className={"itemdesign"} to="/BusDashbord">Bus Dashbord</NavLink>
      <NavLink className={"itemdesign"} to="LaunchDashbord">Launch Dashbord</NavLink>
      <NavLink className={"itemdesign"} to="/TrainDashbord" >Train Dashbord</NavLink>
    </Nav>
      </div>
    </div>
   
  ); 
}

export default Sideber;