import React from 'react'
import TopHeder from '../../Front-End-Component/TopHeder'
import Home from '../Front-End/Home'
import Bus from '../Front-End/Bus'
import Launch from '../Front-End/Launch'
import Train from '../Front-End/Train'
import Login from '../Front-End/login'
import Navber from '../../Front-End-Component/Navbar/Navber'
import Carousel from '../../Front-End-Component/Carousel/Carousel'
import Error from '../Front-End/Error'
import Footer from '../../Front-End-Component/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {
    BrowserRouter,
    Routes,
    Route,


} from "react-router-dom";


export default function FontRouter() {
    return (
        <div>

            <BrowserRouter>
                <TopHeder />
                <Navber />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Bus" element={<Bus />} />
                    {/* <Route path="/BookingDetails" element={<BookingDetails />}/>
                    </Route> */}

                    <Route path="/Launch" element={<Launch />} />
                    <Route path="/Train" element={<Train />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="*" element={<Error />} />
                    {/* <Route path="/carousel" element={<Carousel />} /> */}

                </Routes>

                <Footer />
            </BrowserRouter>

        </div>
    )
}
