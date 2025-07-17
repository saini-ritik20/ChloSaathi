import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button"
import { CheckCircle, MapPin, UserCheck, CreditCard,Clock,Sparkles,HelpCircle,Users,AlertTriangle,TrendingUp,Baby,Music,Leaf,Star,CalendarClock } from "lucide-react";
import "./Service.css";

const features = [
  {
    icon: <CheckCircle className="text-black w-8 h-8" />,
    title: "Fixed & Transparent Pricing",
    description: "No hidden fees. Know your fare upfront, every time."
  },
  {
    icon: <UserCheck className="text-black w-8 h-8" />,
    title: "Verified & Trained Drivers",
    description:
      "All our drivers go through strict background checks and professional training for your safety and comfort."
  },
  {
    icon: <MapPin className="text-black w-8 h-8" />,
    title: "Real-Time GPS Tracking",
    description:
      "Track your ride live. Share your location with loved ones and travel with peace of mind."
  },
  {
  icon: <CreditCard className="text-black w-8 h-8" />,
  title: "Multiple Payment Options",
  description: "Pay your way – UPI, card, wallet, or cash. Flexibility at its best."
 },
 {
  icon: <Clock className="text-black w-8 h-8" />,
  title: "24/7 Availability",
  description: "Need a ride at 2 AM? We’re just a tap away — always ready."
 },
 {
  icon: <Sparkles className="text-black w-8 h-8" />,
  title: "Clean & Sanitized Vehicles",
  description: "Hygiene is our priority. Every car is cleaned after every ride."
 },
 {
  icon: <HelpCircle className="text-black w-8 h-8" />,
  title: "24x7 In-App Support",
  description: "Need help? Chat or call support anytime directly from the app."
 },
 {
  icon: <Users className="text-black w-8 h-8" />,
  title: "Book for Family or Friends",
  description: "Send a ride for your loved ones with ease and track their journey."
 },
 {
  icon: <AlertTriangle className="text-black w-8 h-8" />,
  title: "Emergency SOS Support",
  description: "One-tap emergency feature with real-time help and alerts."
 },
 {
  icon: <TrendingUp className="text-black w-8 h-8" />,
  title: "Live Fare Comparison",
  description: "Compare fares in real-time and choose the best option for you."
 },
 {
  icon: <Baby className="text-black w-8 h-8" />,
  title: "Child & Pet-Friendly Rides",
  description: "Special rides equipped for families with kids or pets."
 },
 {
  icon: <Music className="text-black w-8 h-8" />,
  title: "In-Ride Entertainment",
  description: "Enjoy music, podcasts, or browse the web during your ride."
 },
 {
  icon: <Leaf className="text-black w-8 h-8" />,
  title: "Eco-Friendly Rides",
  description: "Choose from electric or hybrid vehicles and ride green with us."
 },
 {
  icon: <Star className="text-black w-8 h-8" />,
  title: "Preferred Driver Option",
  description: "Loved your last driver? Add them to your preferred list for future rides."
 },
 {
  icon: <CalendarClock className="text-black w-8 h-8" />,
  title: "Schedule Rides in Advance",
  description: "Plan ahead with scheduled rides – ideal for airport drops or meetings."
 }
];

const Service = () => {
  return (

    <div className="service-wrapper">
        <motion.div className="service-header">
          <h1 className="service-title">Your Daily Ride, Made Easy.</h1>
          <h2 className="service-subtitle">Safe. Affordable. Comfortable. Always.</h2>
          <p className="service-description">Whether you're commuting to work, heading to college, shopping at the market, or returning home, we've got
          you covered with smooth and reliable rides – every single day.</p>
        </motion.div>

        <div className="service-why">
          <h3>Why Ride With Us?</h3>
        </div>

        <motion.div className="features-grid" >
          {features.map((feature, index) => (
            <motion.div key={index} className="feature-card" >
              <div className="feature-card-icon">{feature.icon}</div>
              <h4 className="feature-card-title">{feature.title}</h4>
              <p className="feature-card-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="service-cta" >
          <h4>Hop in. Sit back. Ride stress-free.</h4>
          <p>Your trusted travel partner is just a click away.</p>
          <button className="service-btn">Sign Up Now</button>
        </motion.div>
      </div>

  );
};

export default Service;
