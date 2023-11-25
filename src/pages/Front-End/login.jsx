import { useState } from 'react';
import TopHeder from '../../Front-End-Component/TopHeder';
import Navber from '../../Front-End-Component/Navbar/Navber';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Front-End-Component/footer/footer';







async function signUp() {
  let item = { name, email, password };
  console.warn(item);

  try {
    let result = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",  // Corrected header name
        "Accept": "application/json"
      }
    });

    result = await result.json();
    console.warn("result", result);
  } catch (error) {
    console.error("Error during sign-up:", error);
  }
}




  
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  function click() {navigate("/Sidebar")
    window.location.reload(true); 
  }
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    
  };




  return (
    <div>
      <div>
      <TopHeder />
      <Navber />
      </div>
      <div class="col-sm-6 offset-sm-3" >
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Name:</span>
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Email:</span>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Password:</span>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <button onClick={signUp} className="btn btn-primary">Click me</button>
      </div>
    <div><Footer /></div>
    </div>
  );
 

}

export default LoginForm;