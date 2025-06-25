// HomePage.js
import React from 'react';
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./Contact.jsx";
import ServiceU from './Service.jsx';
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div>
          {/* Nav Bar is Started Here  */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/> 

        <nav class="navbar navbar-expand-lg navbar-light bg-light border rounded mt-3 mx-3">
        <div class="container-fluid">
            <a href="Home.jsx"><img src={logo}  width={60} height={60} alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                {/* <li class="nav-item me-4">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li> */}
                <li class="nav-item me-6">
                <a class="nav-link" href="ServiceU">Service</a>
                </li>
                <li class="nav-item me-8">
                <a class="nav-link" href="AboutUs">About Us</a>
                </li>
                {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li> */}
                <li class="nav-item me-8">
                <a class="nav-link " href="ContactUs" tabindex="-1" aria-disabled="true">Contact Us</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>


        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> 
        {/* Nav Bar is Ended Here  */}

        {/* Starting of the Home Page  */}

        <div className='me-4 p-5'>
            <h1>Welcome in ChaloSathi!!!!!</h1>
            <h2>It is Very Useful for making the Ride best .</h2>
        </div>
    </div>
  );
};

export default Home;
