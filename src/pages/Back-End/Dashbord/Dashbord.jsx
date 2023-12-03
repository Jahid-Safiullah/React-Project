import { NavLink } from "react-router-dom";
import { Nav, } from "react-bootstrap";
import "./Dashbord.css"
import React,{ useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navber from './Navber';





const Dahsbord = () => {
  

    return (
        <>
            <div className='container-fluid striky   fixed-top '>
                < Navber />
            </div>
            <div className=' container-fluid d-flex ' >
                <div>
                    <aside className="sidebar" style={{ marginTop: "88px" }}>
                        <div className="logo">
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
                                <li className="" style={{}} > </li>
                            </Nav>

                        </ul>
                    </aside>
                </div>
                {/* <div className='col-md-9'>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, iste corrupti culpa aliquid delectus tempora distinctio animi ducimus ipsum perspiciatis architecto a dignissimos, quibusdam aut, quia alias rem nesciunt atque dolore deserunt? Error tempore nobis ab eos quidem sit, deserunt natus mollitia? Consequuntur facilis, eligendi placeat nesciunt magni explicabo soluta quas fugiat, illo eum tempore esse dolor nemo consequatur nostrum recusandae quibusdam cum nobis? Reprehenderit, ratione quam! Modi illum fuga unde nihil ratione culpa libero, voluptates fugit corrupti iure eius voluptatibus, sint reiciendis ducimus quod alias! Aliquam dignissimos officiis, quasi assumenda soluta sunt unde porro culpa a itaque. Iure explicabo placeat, animi nam
                        </div>
                    </div>
             */}
                {/* <div className="col-md-9">
                    <ol >
                        {
                            item.map((item, index) => {
                                return <li>{item}</li>
                            })
                        }
                    </ol>
                </div> */}
            </div>
        </>
    )
}

export default Dahsbord



