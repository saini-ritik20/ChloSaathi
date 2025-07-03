// HomePage.js
import React from 'react';
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./Contact.jsx";
// import Service from './Service.jsx';
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
                    <li className="nav-item me-4">
                    <a className="nav-link text-dark" href="BookRide">Book a Ride</a>
                    </li>
                    <li className="nav-item me-4">
                    <a className="nav-link text-dark" href='Service'>Service</a>
                    </li>
                    <li className="nav-item me-4">
                    <a className="nav-link text-dark" href="AboutUs">About Us</a>
                    </li>
                    <li className="nav-item me-4">
                    <a className="nav-link text-dark" href="ContactUs">Contact</a>
                    </li>
                </ul>
                <button className="btn btn-outline-warning me-5" type="submit">Login</button>
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
                <div class="container">
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


            {/* Connection establishment */}

            <div>
                <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
                    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
                    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            <div class="text-left rtl:text-right">
                                <div class="mb-1 text-xs">Download on the</div>
                                <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                            </div>
                        </a>
                        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                            <div class="text-left rtl:text-right">
                                <div class="mb-1 text-xs">Get in on</div>
                                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>


  );
};


export default Home;




