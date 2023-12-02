import React, { useState, useEffect } from 'react';
import TopHeader from "../../Front-End-Component/TopHeder";
import Navbar from '../../Front-End-Component/Navbar/Navber';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Front-End-Component/footer/Footer';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/Dashbord");
    }
  }, []);

  async function signin() {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // try {
     
      let item = { email, password };
      let response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      });

      let result = await response.json();
      if (result.error) {
        alert(result.error); 
        return;
      }

      localStorage.setItem('user-info', JSON.stringify(result));
      // localStorage.setItem('login',true);
      navigate("/Dashbord");
    // } catch (error) {
    //   console.error("Error during login:", error);
    // }
  }

  return (
    <div>
      <TopHeader />
      <Navbar />
      <div className="col-sm-4 offset-sm-4 card p-5 mt-5 mb-5">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text width:10px" id="inputGroup-sizing-sm">Email:</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Password:</span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <button type="button" onClick={signin} className="btn btn-primary">
          Login
        </button>
      </div>
      <div> <Footer /> </div>
    </div>
  );
}
