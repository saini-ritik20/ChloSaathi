import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CarFront } from 'lucide-react';
import './confirmationform.css';   // ← import the external CSS

const BookingForm = () => {
  return (
    <motion.div
      className="booking-container"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="booking-heading">Book a Ride</h2>

      <div className="booking-fields">
        {/* Pickup */}
        <div className="form-row">
          <MapPin className="row-icon" />
          <input
            type="text"
            placeholder="Pickup Location"
            className="row-input"
          />
        </div>

        {/* Drop‑off */}
        <div className="form-row">
          <MapPin className="row-icon" />
          <input
            type="text"
            placeholder="Drop‑off Location"
            className="row-input"
          />
        </div>

        {/* Taxi Type */}
        <div className="form-row clickable">
          <CarFront className="row-icon" />
          <select className="row-input select">
            <option>Select Taxi Type</option>
            <option>Mini</option>
            <option>Sedan</option>
            <option>SUV</option>
          </select>
        </div>

        {/* Date */}
        <div className="form-row">
          <Calendar className="row-icon" />
          <input type="date" className="row-input" />
        </div>
      </div>

      <motion.button
        className="confirm-btn"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
      >
        Confirm Ride
      </motion.button>
    </motion.div>
  );
};

export default BookingForm;
