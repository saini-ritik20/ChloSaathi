import React from 'react'
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    // <div className=' sm:w-full min-h-80'>
      <footer className="section-p1 p-5 relative top-20 -right-0">
        <div className="col">
          <img className="logo" width={80} height={80} src={logo} alt="" />
          <h4 className=' text-xl font-semibold'>Contact</h4>
          <p><strong>Address:</strong> 563 Wellington Road,Street 32,San Francisco</p>
          <p><strong>Phonr:</strong>+01 528 654 8520</p>
          <p><strong>Hours:</strong>10.00-18.00,Mon-Sat</p>

          <div className="follow">
            <h4 className=' text-xl font-semibold'>Follow Us</h4>
            <div class="icon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4 className=' text-xl font-semibold'>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="col">

          <h4 className=' text-xl font-semibold'>My Account</h4>
          <a href="#">Sign-In</a>
          <a href="#">View cart</a>
          <a href="#">Wishlist</a>
          <a href="#">Track my orders</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App store or Google Play</p>
          <div class="row">
            <img src="file:///C:/Users/asus/Desktop/e-commerce/image/app.jpg" alt="" />
            <img src="file:///C:/Users/asus/Desktop/e-commerce/image/play.jpg" alt="" />

          </div>
          <p>Secured Payment Gateways</p>
          <img src="file:///C:/Users/asus/Desktop/e-commerce/image/pay.png" alt="" />
        </div>
        <div className="copyright">
          <p> 2025,Kanpur etc - HTML CSS Chalo-Saathi Template </p>
        </div>
      </footer>
    // </div>
  )
}

export default Footer