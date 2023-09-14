


import React from 'react'
import "./OurTraustedPartner.css"
import "./js.js"

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
            <div>
                <div>
                    <div>
                        <div>Our Trusted Partners</div>
                    </div>

                    <div className='    bg-success  d-flex' {...customSlider}>

                        <div className='custom-box' > <img className="" src="src/assets/img/Ena-transport-prvt-Ltd-208x78.png" alt="Ena-transport" /></div>
                        <div className='custom-box'> <img src="src/assets/img/green-line-paribahan-208x78.png" alt="green-line-paribahan" /></div>
                        <div className='custom-box'> <img src="src/assets/img/Hanif-AC-208x78.png" alt="Hanif" /></div>
                        <div className='custom-box'> <img src="src/assets/img/nabil-paribahan-208x78.png" alt="nabil-paribahan" /></div>
                        <div className='custom-box'> <img src="src/assets/img/Soudia-coach-services-208x78.png" alt="Soudia-coach" /></div>
                        <div className='custom-box'> <img src="src/assets/img/Star-Line-208x78.png" alt="Star-Line" /></div>
                        <div className='custom-box'> <img src="src/assets/img/Star-Line-208x78.png" alt="Star-Line" /></div>
                        <div className='custom-box'> <img src="src/assets/img/Star-Line-208x78.png" alt="Star-Line" /></div>
                        <div className='custom-box'> <img src="src/assets/img/Star-Line-208x78.png" alt="Star-Line" /></div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurTraustedPartner
