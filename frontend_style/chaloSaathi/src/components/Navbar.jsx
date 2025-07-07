
// import React from 'react'
// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import React, { useState } from 'react'
// import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';             
// import Footer from './footer'

function Navbar(){
  return (
    <nav>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <nav className="navbar navbar-expand-lg center navbar-light border rounded-5 mx-3 mt-3 shadow-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} width={40} height={40} alt="Taxi Logo" className="me-2" />
            <span className="fw-bold fs-4 text-warning">RideNow</span>
          </Link>

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
                <Link to="/bookride" className="nav-link text-dark">Book a Ride</Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/service" className="nav-link text-dark">Service</Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/about" className="nav-link text-dark">About Us</Link>
              </li>
              <li className="nav-item me-4">
                <Link to="/contact" className="nav-link text-dark">Contact</Link>
              </li>
            </ul>
            <Link to="/login" className="btn btn-outline-warning me-5">Login</Link>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar
