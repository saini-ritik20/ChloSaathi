import React from 'react'
import { useState } from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const [searchtb, setSearchTab] = useState(false);
    // const [list, setList] = useState(true);
    // console.log(props.sendtab);

    // const SerachFn = () => {
    //     setSearchTab(prev => !prev)
    // }

    const ShowOption = () => {

    }

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
        </div>
    );
}
export default Navbar