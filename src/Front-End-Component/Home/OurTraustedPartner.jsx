
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import React, { Component } from "react";



function OurTraustedPartner() {
    const customSlider = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div>
           
                <div className="p-5" style={{backgroundColor: "#f6f9ff"}}>
                    <div className="pb-4">
                        <div><h1 className="fw-bold">Our Trusted Partners</h1></div>
                    </div>

                    <div className=' p-5' >

                        <Slider {...customSlider} >
                        <div className='custom-box  ' > <img className="border" src="src/assets/img/Ena-transport-prvt-Ltd-208x78.png" alt="Ena-transport" /></div>
                        <div className='custom-box '> <img className="border"  src="src/assets/img/green-line-paribahan-208x78.png" alt="green-line-paribahan" /></div>
                        <div className='custom-box '> <img className="border"  src="src/assets/img/Hanif-AC-208x78.png" alt="Hanif" /></div>
                        <div className='custom-box '> <img className="border"  src="src/assets/img/nabil-paribahan-208x78.png" alt="nabil-paribahan" /></div>
                        <div className='custom-box '> <img className="border"  src="src/assets/img/Soudia-coach-services-208x78.png" alt="Soudia-coach" /></div>
                        <div className='custom-box '> <img className="border"  src="src/assets/img/Star-Line-208x78.png" alt="Star-Line" /></div>
                        <div className='custom-box '> <img className="border"  src="src/assets/img/Star-Line-208x78.png" alt="Star-Line" /></div>
                        <div className='custom-box '> <img  className="border" src="src/assets/img/Star-Line-208x78.png" alt="Star-Line" /></div>
                        <div className='custom-box '> <img className="border"  src="src/assets/img/Star-Line-208x78.png" alt="Star-Line" /></div>

                        </Slider>
                    </div>

                </div>
           
        </div>
    )
}

export default OurTraustedPartner
