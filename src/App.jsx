import './App.css'
import TopHeder from './Front-End-Component/TopHeder'
import Home from './pages/Front-End/Home'
import Bus from './pages/Front-End/Bus'
import Launch from './pages/Front-End/Launch'
import Train from './pages/Front-End/Train'
import Login from './pages/Front-End/login'
import Navbar from './Front-End-Component/Navbar/Navber'
import Footer from './Front-End-Component/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import BackendHome from './pages/Back-End/Home'

import {
  BrowserRouter,
  Routes,
  Route,
  
  
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
          <Route path="/Train" element={<Train />} />
          <Route path="/Login" element={<Login />} />

      </Routes>
      <Footer />
    </BrowserRouter>

    
    <BrowserRouter>
      <Routes>
        
           <Route path="/bk" element={<BackendHome />} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

