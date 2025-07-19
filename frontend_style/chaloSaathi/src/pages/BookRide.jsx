// import React from 'react';
// import { motion } from 'framer-motion';
// import './BookRide.css';
// import taxiImg from '../assets/taxiImg.png'; // Your taxi image path
// import ConfirmForm from './confirmationForm';
// import { useNavigate } from "react-router-dom";

// const BookRide = () => {
//   const navigate = useNavigate();

//   const handleRideNowClick = () => {
//     // Optionally, you can pass state here
//     navigate("/ConfirmForm");
//   };


//   return (
//     <div className="hero-container">
//       <div className="cityscape-bg" />

//       <motion.h1
//         className="hero-heading"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Your Ride, Just a Click Away!
//       </motion.h1>

//       <motion.p
//         className="hero-subtext"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 1 }}
//       >
//         Book a taxi anytime, anywhere <br /> with ease and comfort.
//       </motion.p>

//       <motion.div
//         className="hero-buttons"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         {/* <button className="book-btn">🚖 Book a Ride</button> */}
//         <a href="ConfirmForm" className="book-btn">
//             🚖 Book a Ride
//             </a>

//         <button className="track-btn">📍 Track My Taxi</button>
//       </motion.div>

//       <motion.img
//         src={taxiImg}
//         alt="Taxi"
//         className="taxi-image"
//         initial={{ x: -300 }}
//         animate={{ x: 0 }}
//         transition={{ duration: 2, ease: 'easeOut' }}
//       />
//     </div>
//   );
// };

// export default BookRide;



import React from "react";
import { motion } from "framer-motion";
import "./BookRide.css";
import { Bus, Bike, CarFront, Truck, MapPin } from "lucide-react";

const RideNow = () => {
  const rideTypes = [
    { type: "Economy", icon: "🚗" },
    { type: "Luxury", icon: "🚘" },
    { type: "Van", icon: "🏍️" },
    { type: "Moto", icon: "🛺" },
  ];

  return (
    <div className="ride-now-container">
      <motion.h1
        className="ride-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        RIDE NOW
      </motion.h1>

      <motion.div
        className="search-bar"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Enter pickup location" />
      </motion.div>

      <motion.div
        className="map-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="map"></div>
        <div className="map-marker center"><CarFront size={24} color="white" strokeWidth={2} /></div>
        <div className="map-marker marker1"><Truck size={24} color="white" strokeWidth={2} /></div>
        <div className="map-marker marker2"><Bike size={24} color="white" strokeWidth={2} /></div>
        <div className="map-marker marker3"><Bus size={24} color="white" strokeWidth={2} /></div>
        <div className="map-marker marker4"><Bike size={24} color="white" strokeWidth={2} /></div>
        <div className="map-marker center"><CarFront size={24} color="white" strokeWidth={2} /></div>

      </motion.div>

      <motion.div
        className="ride-options"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {/* {rideTypes.map((ride, idx) => (
          <div key={idx} className="ride-option">
            <span>{ride.icon}</span>
            <p>{ride.type}</p>
          </div>
        ))} */}

        <button className="ride-button">RIDE NOW</button>
      </motion.div>
    </div>
  );
};

export default RideNow;

