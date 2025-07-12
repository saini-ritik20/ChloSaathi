import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

import aboutHero from "../assets/Hero_image.png";   // ⬅️ replace w/ your image
import { FaCarAlt, FaShieldAlt, FaMoneyBillWave, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutUs() {
  return (
    <div className="about-container">
      {/* ── Hero ───────────────────────────────────────────── */}
      <motion.section
        className="hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About ChaloSathi</h1>
        <p>Your reliable partner for safe, fast, and affordable rides – anytime, anywhere.</p>
      </motion.section>

      {/* ── Who We Are ─────────────────────────────────────── */}
      <motion.section
        className="info-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Who We Are</h2>
        <p>
          ChaloSathi is a next‑generation taxi booking platform built with passion and technology.
          We aim to redefine urban mobility with safety, efficiency, and transparency.
        </p>
      </motion.section>

      {/* ── Mission ────────────────────────────────────────── */}
      <motion.section
        className="info-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Our Mission</h2>
        <p>
          Our mission is to make transportation hassle‑free for everyone. Whether you’re commuting
          daily or heading to a special event, we make sure you get there comfortably and on time.
        </p>
      </motion.section>

      {/* ── Why Choose Us ──────────────────────────────────── */}
      <motion.section
        className="why-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Why Choose Us</h2>

        <div className="features-grid">
          <Feature icon={<FaCarAlt />} title="Fast Booking">
            Book a ride instantly with just a few clicks. Simplicity at its best.
          </Feature>
          <Feature icon={<FaShieldAlt />} title="Safety First">
            Every driver is verified. Your safety is our top priority.
          </Feature>
          <Feature icon={<FaMoneyBillWave />} title="Transparent Pricing">
            No hidden charges. Pay what you see.
          </Feature>
          <Feature icon={<FaMapMarkerAlt />} title="Live GPS Tracking">
            Track your ride in real‑time for greater peace of mind.
          </Feature>
        </div>
      </motion.section>

      {/* ── Footer ─────────────────────────────────────────── */}
      {/* <footer className="footer">
        © {new Date().getFullYear()} ChaloSathi. All rights reserved.
      </footer> */}
    </div>
  );
}

/* Re‑usable feature card */
function Feature({ icon, title, children }) {
  return (
    <motion.div
      className="feature-card"
      whileHover={{ translateY: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.div>
  );
}
