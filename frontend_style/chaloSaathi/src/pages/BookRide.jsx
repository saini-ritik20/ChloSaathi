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

