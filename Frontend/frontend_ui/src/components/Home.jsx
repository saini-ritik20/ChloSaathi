// HomePage.js
import React from 'react';
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./Contact.jsx";
import ServiceU from './Service.jsx';
import logo from "../assets/logo.png";
import car from "../assets/car.png";
import part1 from "../assets/part1.jpg";
import Service2 from "../assets/Service2.jpg";
import part11 from "../assets/part11.png";
import bg1 from "../assets/bg1.jpg";
import './Home.css';
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';
// import styled from 'styled-components';



import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
        
        

          {/* Nav Bar is Started Here  */}
                    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            />

            <nav className="navbar navbar-expand-lg center navbar-light border rounded-5 mx-3 mt-3 shadow-lg">
            <div className="container-fluid">
                <a href="Home.jsx" className="navbar-brand d-flex align-items-center">
                <img src={logo} width={40} height={40} alt="Taxi Logo" className="me-2" />
                <span className="fw-bold fs-4 text-warning">RideNow</span>
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    {/* <li className="nav-item me-4">
                    <a className="nav-link active text-warning" aria-current="page" href="Home">Home</a>
                    </li> */}
                    <li className="nav-item me-4">
                    <a className="nav-link text-dark" href="BookRide">Book a Ride</a>
                    </li>
                    <li className="nav-item me-4">
                    <a className="nav-link text-dark" href="ServiceU">Service</a>
                    </li>
                    <li className="nav-item me-4">
                    <a className="nav-link text-dark" href="AboutUs">About Us</a>
                    </li>
                    <li className="nav-item me-4">
                    <a className="nav-link text-dark" href="ContactUs">Contact</a>
                    </li>
                </ul>
                {/* <button
                    type="submit"
                    className="relative inline-flex items-center justify-center gap-2 px-6 py-2 me-3 text-sm font-semibold text-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 active:scale-95 focus:outline-none overflow-hidden group"
                    >
                    <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                    <span className="z-10">🚕 Login</span>
                    <span className="absolute -inset-0.5 rounded-full bg-yellow-300 blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></span>
                    </button> */}

                <button className="btn btn-outline-warning me-5" type="submit">Login</button>






                {/* <form className="d-flex" role="search">
                    <input
                    className="form-control me-2  text-light border-warning"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-warning rounded-full me-5" type="submit">Search</button>
                </form> */}
                </div>
            </div>
            </nav>
 
        {/* Nav Bar is Ended Here  */}

        {/* Starting of the Home Page  */}

        <div className='me-4 p-5'>
            
            {/* <button  type="button" class="btn btn-outline-warning">Come with us</button> */}
                        

                <div className="text-center mt-15 ">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-warning display-4 fw-bold w-2 h-2"
                >
                    <img src={car} alt="car" />
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-warning display-4  fw-bold w-2 h-2"
                >
                    Chalo Saathi
                </motion.h2>

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="btn btn-outline-warning btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg mt-3"
                >
                    Ride Now 😊
                </motion.button>
                </div>
                <br />
                <br />
                <br />
                
                {/*Services Tage */}

                      <div class="card">
      <p class="card-title">Product Name</p>
      <p class="small-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
                

  


                {/*End of the Services*/} 
                
                
                <br />
                <br />
                <br />
                <br />
                {/* ✅ Right Side: Text & Button Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                        className="max-w-xl text-center lg:text-left"
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-snug">
                        <span className="text-yellow-500">"Your Ride,</span> Your Time,<br />Your Way."
                        </h1>
                        <p className="text-gray-600 text-lg lg:text-xl mb-6">
                        At RideNow, we believe that every ride should start at the right place and head in the right direction — with zero confusion. That’s why our platform uses advanced GPS technology to detect your exact pickup location, even in busy streets or remote corners. With real-time tracking, you'll always know where your driver is and when they’ll arrive. From live route updates to clear driver details, RideNow offers a transparent and stress-free travel experience from the moment you book. Enjoy every ride with confidence, knowing you’re always in the right place at the right time. <span className="font-semibold text-yellow-500">RideNow</span> – your trusted travel companion.
                        </p>

                        {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
                        >
                        🚕 Book a Ride Now
                        </motion.button> */}
                    </motion.div>

                {/* {/* <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-8 py-16 bg-gray-50 gap-12 overflow-hidden"> */}

                <br />
                <br />
                <br />
                <br />
                    {/* 🖼 Right Side - Image */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center px-8 py-16 bg-gray-50 gap-12 overflow-hidden">

                {/* 📝 Right Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-xl text-center lg:text-left"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Get Quick Rides,<br />
                    <span className="text-yellow-500 border-b-4 border-yellow-400 inline-block mt-2">Low Fares</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                    In <span className="font-semibold text-yellow-600">RideNow</span>, we ensure our customers get rides quickly at the most affordable prices. Book your next trip instantly with trusted drivers, live tracking, and secure payments.
                    </p>
                    <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="btn btn-outline-warning btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg mt-3"
                >
                    contact Us
                </motion.button>
                </motion.div>

                
                </div> 
        

                    <br />
                    <br />
                    <br />
                    
            </div>

        </div>


  );
};


export default Home;
