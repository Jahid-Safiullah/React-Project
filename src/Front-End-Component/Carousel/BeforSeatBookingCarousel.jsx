import React from 'react'

function BeforSeatBookingCarousel() {
    return (
        <div className='container'>
            <div className='row ' style={{}}>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active d-flex" data-bs-interval="2000">
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                        </div>
                        <div class="carousel-item d-flex" data-bs-interval="2000">
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                        </div>
                        <div class="carousel-item d-flex">
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                            <div className='px-5'><img src="src/assets/img/image1.png" class="d-block w-100" alt="..." /></div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default BeforSeatBookingCarousel;