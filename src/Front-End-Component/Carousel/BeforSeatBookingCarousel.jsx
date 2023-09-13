import React from 'react'

function BeforSeatBookingCarousel() {
    return (
        <div className='container'>
            <div className='row p-3' style={{}}>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex" data-bs-interval="2000">
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                        </div>
                        <div className="carousel-item d-flex" data-bs-interval="1000">
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                        </div>
                        <div className="carousel-item d-flex">
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" className="d-block w-100" alt="..." /></div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default BeforSeatBookingCarousel;