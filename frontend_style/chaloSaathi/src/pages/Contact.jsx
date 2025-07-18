import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './Contact.css'
import conjusted from '../assets/conjusted.png'
// import location from '../assets/GPS.png'


const ContactUs = () => {
  return (
    <div className="contact-container">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className="contact-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          CONTACT US
        </motion.h2>

        <form className="contact-form">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your name"
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="form-label">Message</label>
            <textarea
              className="form-input"
              rows="3"
              placeholder="Your message..."
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="send-button"
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.8 }}
          >
            <Send className="send-icon" />
            Send
          </motion.button>
        </form>

        <motion.img
          src={conjusted}
          alt="Taxi"
          className="taxi-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        />

        {/* <motion.img
          src={conjusted}
          alt="Phone Location"
          className="location-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        /> */}
      </motion.div>
    </div>
  );
};

export default ContactUs;
