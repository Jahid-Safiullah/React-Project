import './App.css'


import BackendHome from './pages/Back-End/Home'

import FontRouter from './pages/Front-End/FontRouter'
import {
  BrowserRouter,
  Routes,
  Route,


} from "react-router-dom";


export default function App() {
  return (
    
 <>

    <FontRouter />
    <BrowserRouter>
      <Routes>
        
           <Route path="/bk" element={<BackendHome />} />
      </Routes>
    </BrowserRouter>


   

  </>
  )
}

