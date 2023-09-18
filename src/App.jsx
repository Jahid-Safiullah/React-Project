import './App.css'
import React from 'react'

import Home from './pages/Front-End/Home'
import Bus from './pages/Front-End/Bus'
import Launch from './pages/Front-End/Launch'
import Train from './pages/Front-End/Train'
import Login from './pages/Front-End/login'

import Error from './pages/Front-End/Error'

import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Back-End-Component/Sideber'

import BusManagement from './pages/Back-End/BusManagement'
import LaunchManagment from './pages/Back-End/LaunchManagment';
import Logout from './pages/Back-End/Logout'
import BackendHome from './pages/Back-End/Home'
import BusBookingList from './Back-End-Component/BUS/BusBookingList'
import EditBus from './Back-End-Component/BUS/EditBus'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    
 <>

<BrowserRouter>
               

               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/Bus" element={<Bus />} />
                   {/* <Route path="/BookingDetails" element={<BookingDetails />}/>
                   </Route> */}

                   <Route path="/Launch" element={<Launch />} />
                   <Route path="/Train" element={<Train />} />
                   <Route path="/Login" element={<Login />} />
                   <Route path="*" element={<Error />} />
                   {/* <Route path="/carousel" element={<Carousel />} /> */}


                       {/* backend router */}
                   <Route path="/Sidebar" element={<Sidebar />} />

                   <Route path="/BusBookingList" element={<BusBookingList />} >
                   <Route path="/BusBookingList/EditBus/:id" element={<EditBus />} />
                   </Route>
                   <Route path="/LaunchManagment" element={<LaunchManagment />} />
                   <Route path="/Logout" element={<Logout />} />

                   {/* <Route path="/TrainManagement" element={<TrainManagement />} /> */}

               </Routes>

               
           </BrowserRouter>
    {/* <BrowserRouter>
      <Routes>
        
           <Route path="/bk" element={<BackendHome />} />
      </Routes>
    </BrowserRouter> */}


   

  </>
  )
}

