import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 


export default function Protected(props) {
  const navigate = useNavigate(); 
  let Cmp=props.Cmp
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navagation("/login")
      alert('Not logged in');
    }
  }, []);
  
  return (
    
    <div>
      <Cmp />
    
      </div>
  )
}
