import React from 'react';
import { motion } from 'framer-motion';
import './BookRide.css';
import taxiImg from '../assets/taxiImg.png'; // Your taxi image path
import ConfirmForm from './confirmationForm';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="cityscape-bg" />

      <motion.h1
        className="hero-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Your Ride, Just a Click Away!
      </motion.h1>

      <motion.p
        className="hero-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Book a taxi anytime, anywhere <br /> with ease and comfort.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {/* <button className="book-btn">🚖 Book a Ride</button> */}
        <a href="ConfirmForm" className="book-btn">
            🚖 Book a Ride
            </a>

        <button className="track-btn">📍 Track My Taxi</button>
      </motion.div>

      <motion.img
        src={taxiImg}
        alt="Taxi"
        className="taxi-image"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />
    </div>
  );
};

export default HeroSection;
