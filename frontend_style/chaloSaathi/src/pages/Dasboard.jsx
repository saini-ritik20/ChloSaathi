import React from "react";
import { motion } from "framer-motion";
import { Car, Wallet, CalendarCheck, Star, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const stats = [
    { icon: <Car size={28} />, label: "Total Rides", value: "120+" },
    { icon: <Wallet size={28} />, label: "Wallet Balance", value: "₹850" },
    { icon: <Star size={28} />, label: "Rating", value: "4.9★" },
    { icon: <CalendarCheck size={28} />, label: "Upcoming Rides", value: "2" },
  ];

  const actions = [
    { label: "Book Ride", path: "/BookRide", color: "bg-yellow-400 text-black" },
    { label: "My Rides", path: "/my-rides", color: "bg-black text-yellow-400" },
    { label: "Wallet", path: "/wallet", color: "bg-yellow-500 text-black" },
    { label: "Support", path: "/support", color: "bg-gray-200 text-black" },
  ];

  return (
    <div className="dashboard-container">
      {/* Greeting */}
      <motion.h1
        className="dashboard-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome back, <span className="highlight">{user?.username || "Saathi"}</span> 👋
      </motion.h1>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="stat-icon">{item.icon}</div>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="section-heading">Quick Actions</h2>
      <div className="actions-grid">
        {actions.map((action, i) => (
          <motion.div
            key={i}
            className={`action-btn ${action.color}`}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={action.path}>{action.label}</Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Rides */}
      <h2 className="section-heading">Recent Rides</h2>
      <div className="rides-list">
        <div className="ride-item">
          <Car size={22} /> <span>Kanpur → Lucknow</span>
          <span className="ride-status completed">Completed</span>
        </div>
        <div className="ride-item">
          <Car size={22} /> <span>Airport Drop</span>
          <span className="ride-status upcoming">Upcoming</span>
        </div>
        <div className="ride-item">
          <Car size={22} /> <span>Delhi → Agra</span>
          <span className="ride-status cancelled">Cancelled</span>
        </div>
      </div>

      {/* Help Section */}
      <motion.div
        className="help-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <HelpCircle size={28} />
        <p>Need help? Visit our <Link to="/support" className="help-link">Support Center</Link></p>
      </motion.div>
    </div>
  );
}
