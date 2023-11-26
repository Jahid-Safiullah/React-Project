import { useEffect, useState } from 'react';
import TopHeader from '../../Front-End-Component/TopHeder';
import Navbar from '../../Front-End-Component/Navbar/Navber';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../../Front-End-Component/footer/Footer';

function LoginForm() {
  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigate("/Sidebar"); 
    }
  })

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const navigate = useNavigate(); 


  async function signUp() {
    let item = { name, email, password };
    console.warn(item);

    try {
      let result = await fetch("http://localhost:8000/api/register", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      result = await result.json();
      
      localStorage.setItem("user-info", JSON.stringify(result));
      console.log("Data stored in localStorage");
      // history.push("/add")
      navigate("/Sidebar"); 
      console.warn("result", result);
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  }


  return (
    <div>
      <TopHeader />
      <Navbar />
      <div className="col-sm-4 offset-sm-4 card p-5 mt-5 mb-5">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Name:</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Email:</span>
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
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <button
          type="button"
          onClick={signUp}
          className="btn btn-primary"
        >
          sign up
        </button>
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default LoginForm;
