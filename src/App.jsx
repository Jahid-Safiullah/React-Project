import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopHeder from './Front-End-Component/TopHeder'
import Home from './pages/Front-End/Home'
import Bus from './pages/Front-End/Bus'
import Launch from './pages/Front-End/Launch'
import Train from './pages/Front-End/Train'
import Login from './pages/Front-End/login'
import Navbar from './Front-End-Component/Navervar/Navber'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

export default function App() {
  return (
    
 <>

    <BrowserRouter>
    <TopHeder />
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bus" element={<Bus />}/>
          <Route path="/Launch" element={<Launch />} />
          <Route path="/jahid" element={<Train />} />
          <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

