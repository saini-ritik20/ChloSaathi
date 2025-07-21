
// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

// function Navbar() {
//   return (
//     <>
//       {/* Bootstrap CSS */}
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//       />
//       {/* Bootstrap JS */}
//       <script
//         src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
//         defer
//       ></script>

//       <nav className="navbar navbar-expand-lg navbar-light bg-white border rounded-5 mx-3 mt-3 shadow-lg">
//         <div className="container-fluid">
//           {/* Logo */}
//           <Link to="/" className="navbar-brand d-flex align-items-center">
//             <img
//               src={logo}
//               width={40}
//               height={40}
//               alt="Taxi Logo"
//               className="me-2"
//             />
//             <span className="fw-bold fs-4 text-warning">RideNow</span>
//           </Link>

//           {/* Hamburger */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarResponsive"
//             aria-controls="navbarResponsive"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Collapsible Menu */}
//           <div className="collapse navbar-collapse" id="navbarResponsive">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
//               <li className="nav-item me-3">
//                 <Link to="/bookride" className="nav-link text-dark">
//                   Book a Ride
//                 </Link>
//               </li>
//               <li className="nav-item me-3">
//                 <Link to="/services" className="nav-link text-dark">
//                   Services
//                 </Link>
//               </li>
//               <li className="nav-item me-3">
//                 <Link to="/about" className="nav-link text-dark">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item me-3">
//                 <Link to="/contact" className="nav-link text-dark">
//                   Contact
//                 </Link>
//               </li>
//             </ul>

//             {/* Sign In / Login Buttons */}
//             <div className="d-flex">
//               <Link to="/Register" className="btn btn-outline-warning me-2">
//                 Sign In
//               </Link>
//               <Link to="/login" className="btn btn-outline-warning">
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>

      <nav className="navbar navbar-expand-lg navbar-light bg-white border rounded-5 mx-3 mt-3 shadow-lg">
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              width={40}
              height={40}
              alt="Taxi Logo"
              className="me-2"
            />
            <span className="fw-bold fs-4 text-warning">RideNow</span>
          </Link>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu (Links + Buttons) */}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item me-3">
                <Link to="/bookride" className="nav-link text-dark">
                  Book a Ride
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/services" className="nav-link text-dark">
                  Services
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/about" className="nav-link text-dark">
                  About Us
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/contact" className="nav-link text-dark">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Sign In / Login Buttons (Moved inside collapse!) */}
            <div className="d-flex mt-3 mt-lg-0">
              <Link to="/Register" className="btn btn-outline-warning me-2">
                Sign In
              </Link>
              <Link to="/login" className="btn btn-outline-warning me-2">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

