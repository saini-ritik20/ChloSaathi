// src/components/ContactUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import axios from 'axios';
import './Contact.css';
import conjusted from "../assets/conjusted.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ message: '', success: null });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/contact/', formData);
      setStatus({ message: '✅ Email sent successfully!', success: true });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ message: '❌ Sorry, email was not sent 😞', success: false });
    }
  };

  return (
    <div className="contact-container">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Conditional rendering for form/image OR status */}
        {!status.message ? (
          <>
            <motion.h2
              className="contact-title"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              CONTACT US
            </motion.h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-input"
                  rows="3"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
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

            {/* Taxi image */}
            {/* You can re-enable image if needed */}
            <motion.img
              src={conjusted}
              alt="Taxi"
              className="taxi-image"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </>
        ) : (
          // Show only big status message
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: '50px',
              fontWeight: 'bold',
              fontSize: '2rem',
              color: status.success ? 'lightgreen' : 'red',
              textAlign: 'center',
            }}
          >
            {status.message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ContactUs;
