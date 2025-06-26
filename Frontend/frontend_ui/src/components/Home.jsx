// HomePage.js
import React from 'react';
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./Contact.jsx";
import ServiceU from './Service.jsx';
import logo from "../assets/logo.png";
import car from "../assets/car.png";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
          {/* Nav Bar is Started Here  */}
                    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            />

            <nav className="navbar navbar-expand navbar-light border rounded-5 mx-3 mt-3 shadow-lg">
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
                <form className="d-flex" role="search">
                    <input
                    className="form-control me-2  text-light border-warning"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-warning rounded-full me-5" type="submit">Search</button>
                </form>
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

                {/* <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-dark fs-3"
                >
                    It is Very Useful for making the Ride best.
                </motion.h2> */}

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="btn btn-outline-warning btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg mt-3"
                >
                    Ride Now 😊
                </motion.button>
                </div>

        </div>
        
    </div>
    
  );
};


export default Home;
