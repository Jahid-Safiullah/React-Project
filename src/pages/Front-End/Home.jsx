import React from 'react'
import banner from '../../assets/slider_image_bus.png'
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    
    <div>
      
      <div> <img src={banner} alt="banner" /> </div>
      <div><Marquee behavior="scroll" direction="left">Here is some scrolling text... right to left!</Marquee></div>
      <div>saho</div>
      <div>katim</div>

    </div>
  )
}
