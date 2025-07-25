
import React from 'react'
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    // <div className=' sm:w-full min-h-80'>
      <footer className="section-p1 p-5 relative top-20 -right-0">
        <div className="col">
          <img className="logo" src={logo} width={80} height={80} alt="" />
          <h4 className=' text-xl font-semibold'>Contact</h4>
          <p><strong>Address:</strong> 563 Wellington Road,Street 32,San Francisco</p>
          <p><strong>Phonr:</strong>+01 528 654 8520</p>
          <p><strong>Hours:</strong>10.00-18.00,Mon-Sat</p>

          <div className="follow">
            <h4 className=' text-xl font-semibold'>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4 className=' text-xl font-semibold'>About</h4>
          <a href="/About">About Us</a>
          {/* <a href="#">Delivery Information</a> */}
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="/Contact">Contact Us</a>
        </div>
        <div className="col">

          <h4 className=' text-xl font-semibold'>My Account</h4>
          <a href="#">Sign-In</a>
          <a href="#">Register</a>
          <a href="#">My Rides</a>
          <a href="#">Support</a>
        </div>

        <div className="col install">
          {/* <h4>Install App</h4>
          <p>From App store or Google Play</p>
          <div class="row">
            <img src="file:///C:/Users/asus/Desktop/e-commerce/image/app.jpg" alt="" />
            <img src="file:///C:/Users/asus/Desktop/e-commerce/image/play.jpg" alt="" />

          </div> */}
          <p>Payment Gateways -</p>
          <div className="text-4xl flex gap-8  text-black-700">
              <div className='icon '>
                <i className="fab fa-cc-visa"></i>
                <br />
                <i className="fab fa-cc-mastercard"></i>
                <br />
                <i className="fab fa-cc-paypal"></i>
              </div>
          </div>
        </div>
        <div className="copyright">
          <p>Thank you for visiting at chaloSaahti 🤗</p>
        </div>
      </footer>
    // </div>
  )
}

export default Footer
