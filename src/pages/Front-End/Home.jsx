import React from 'react'
import TopHeder from '../../Front-End-Component/TopHeder';
import Navber from '../../Front-End-Component/Navbar/Navber';
import Marquee from "react-fast-marquee";
import homeBanner from '../../assets/homeBanner.jpg'
import OurTraustedPartner from "../../Front-End-Component/Home/OurTraustedPartner"
import Footer from '../../Front-End-Component/footer/Footer';

export default function Home() {
  return (

    <div>
      <TopHeder />
      <Navber />
      <div className='mx-3'>
        <Marquee className='bg-success p-2 mt-5  text-light border border-info rounded-pill' behavior="scroll" direction="left" >   সহজ থেকে প্রথমবার টিকেট কাটছেন? ব্যবহার করুন কুপন কোড : <span className="bg-danger rounded-pill p-1"> PROTHOM </span> <span> আর উপভোগ করুন ৳১৫০ পর্যন্ত নিশ্চিত ছাড় ! </span>
        </Marquee>
      </div>
      <img src="banner.svg" alt="" />
      <div className='d-flex  justify-content-evenly  text-light pt-3 mt-3' style={{ backgroundColor: "#089d49", font: "cursive" }}>
        <div className=' '>
          <h1 className="" style={{ font: "cursive" }}>100+ Million​​</h1>
          <p>Tickets Sold​</p>
        </div>
        <div className=''>
          <h1> 3,000​​​</h1>
          <p>Routes​ ​</p>
        </div>
        <div className=''>
          <h1>5+ Million​​​</h1>
          <p> App Downloads​ </p>
        </div>
      </div>
      <p className='p-3' style={{ borderBottom: "5px solid green", marginLeft: "30px", marginRight: "30px" }}></p>
      <div> <img src={homeBanner} alt="banner" /> </div>
      {/* <div>
        <OurTraustedPartner />
      </div> */}
      <div>
        <Footer />
      </div>


    </div>
  )
}
