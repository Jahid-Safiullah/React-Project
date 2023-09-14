// import React from 'react'
import './footer.css'
import Logo from '../../assets/Shohoz_logo_173x74.svg'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <div>
      
      
<footer className="footer-distributed">

			<div className="footer-left">

				<h3><img src={Logo} alt="Shohoz_logo" style={{height:"120px"}} /></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					<link to="/Login"></link>
					<a href="#">Log in</a>
				
					<a href="#">Sign in</a>
				
					<a href="#">About us</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Company Name © 2015</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>880+ 15213196764</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Shohoz, owned and operated by Shohoj Limited, is Bangladesh’s largest online ticket destination, which is committed to making your life convenient, easier and smarter.				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>

    </div>
  )
}
