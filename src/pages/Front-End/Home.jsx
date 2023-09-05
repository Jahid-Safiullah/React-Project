import React from 'react'

import Marquee from "react-fast-marquee";
import homeBanner from '../../assets/homeBanner.jpg'

export default function Home() {
  return (
    
    <div>
      <div className='mx-3'>
      <Marquee className='bg-success p-2 mt-5  text-light border border-info rounded-pill' behavior="scroll" direction="left" >   সহজ থেকে প্রথমবার টিকেট কাটছেন? ব্যবহার করুন কুপন কোড : <span className="bg-danger rounded-pill p-1"> PROTHOM </span> <span> আর উপভোগ করুন ৳১৫০ পর্যন্ত নিশ্চিত ছাড় ! </span>
      </Marquee>
      </div>
      <img src="banner.svg" alt="" />
      <div className='d-flex m-4 p-3 bg-success '>
        <div className='col'>
          <h1>100+ Million​​</h1>
           <p>Tickets Sold​</p>
        </div>
        <div className='col'>
          <h1> 3,000​​​</h1>
           <p>Routes​ ​</p>
        </div>
        <div className='col'>
          <h1>5+ Million​​​</h1>
           <p> App Downloads​ </p>
        </div>
      </div>
      <p className='p-3' style={{borderBottom:"5px solid green", marginLeft:"30px",marginRight:"30px" }}></p>
      <div> <img src={homeBanner} alt="banner" /> </div>
     
      

    </div>
  )
}
