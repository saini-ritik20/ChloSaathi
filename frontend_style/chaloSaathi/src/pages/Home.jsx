
import Service from './Service.jsx'
import car from "../assets/car.png";
// import Part3 from "../assets/part3.png"
import Part4 from "../assets/part4.jpg"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Contact from './Contact.jsx'
import taxiMap from "../assets/taxi-map.png";
import taxiIndiaMap from "../assets/about-india-taxi.png"
import { CheckCircle, Car, User, Shield, Smartphone,CalendarCheck, AlertCircle, Wallet, Star, QrCode ,MapPin } from "lucide-react";
import './Home.css';
import { motion } from 'framer-motion';


{/* Popularity Section */}
const stats = [
  { value: "1M+", label: "rides completed" },
  { value: "2K+", label: "Trusted users" },
  { value: "300+", label: "cities served" },
  { value: "5K+", label: "live users" },
  { value: "98%", label: "on-time rating" },


];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

{/* Make better */}
const cardData = [
  {
    icon: <CheckCircle size={48} color="#4caf50" />,
    title: "Fixed & Transparent Pricing",
    subtitle: "No surprises, no hidden fees",
  },
  {
    icon: <Car size={48} color="#333" />,
    title: "Wide Fleet Options",
    subtitle: "Cars to suit every need",
  },
  {
    icon: <User size={48} color="#333" />,
    title: "Verified Drivers",
    subtitle: "Professional and reliable",
  },
  {
    icon: <Shield size={48} color="#333" />,
    title: "Safety First",
    subtitle: "Your well-being, our priority",
  },
  {
    icon: <Smartphone size={48} color="#333" />,
    title: "24x7 App Support",
    subtitle: "Help when you need it",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 80,
    },
  }),
};


{/* make it  */}
const steps = [
  {
    id: 1,
    title: "Select Pickup & Drop",
    icon: "📍➡️🏁",
  },
  {
    id: 2,
    title: "Choose Your Taxi",
    icon: "🚕",
  },
  {
    id: 3,
    title: "Get Picked Up",
    icon: "🙋‍♂️🚖",
  },
];


// Service Section

const services = [
  {
    title: "City Rides",
    description: "Quick and reliable rides within your city.",
    icon: "🚕",
  },
  {
    title: "Outstation",
    description: "Travel to nearby towns with comfort and ease.",
    icon: "🛣️",
  },
  {
    title: "Airport Transfers",
    description: "On-time pickups and drops to all airports.",
    icon: "✈️",
  },
];



// Features 

const features = [
  {
    icon: <CalendarCheck size={40} color="#fff" />,
    title: "Instant Booking",
    subtitle: "Book in seconds",
    bgColor: "#3ed8ff",
  },
  {
    icon: <AlertCircle size={40} color="#fff" />,
    title: "Panic Button",
    subtitle: "Emergency assistance",
    bgColor: "#ffa69e",
  },
  {
    icon: <Wallet size={40} color="#fff" />,
    title: "Wallet Integration",
    subtitle: "Pay seamlessly",
    bgColor: "#fcd34d",
  },
  {
    icon: <Star size={40} color="#fff" />,
    title: "Driver Rating System",
    subtitle: "Rate your experience",
    bgColor: "#fbbf24",
  },
  {
    icon: <QrCode size={40} color="#fff" />,
    title: "QR Code Payments",
    subtitle: "Simple and secure",
    bgColor: "#86efac",
  },
  {
  icon: <MapPin size={40} color="#fff" />,
  title: "Live Ride Tracking",
  subtitle: "Track your ride in real-time",
  bgColor: "#c084fc",
  },

];


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0 },
// };

function Home(){
  return (
        <div>
        {/* Starting of the Home Page  */}
        <div className='me-4 p-5'>
            {/* <button  type="button" class="btn btn-outline-warning">Come with us</button> */}
                <div className="text-center mt-15 ">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-warning display-4 fw-bold w-2 h-2"
                >
                    <img src={car} alt="car" />
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-warning display-4  fw-bold w-2 h-2"
                >
                    Chalo Saathi
                </motion.h2>

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="btn btn-outline-warning btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg mt-3"
                >
                    Ride Now 😊
                </motion.button>
                </div>
                <br />
                <br />
                <br />

                {/* Start Popularity */}

                <div className="impact-wrapper">
                  {/* <h2 className="impact-title">Our Impact</h2> */}
                  <div className="impact-cards">
                    {stats.map((item, i) => (
                      <motion.div
                        key={item.label}
                        className="impact-card"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                      >
                        <div className="impact-value">{item.value}</div>
                        <div className="impact-label">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* End Popularity Section */}

                {/* Start How to work  */}

                <div className="why-choose-container">
                    <h2 className="section-title">Why Choose Us</h2>
                    <div className="cards-container">
                      {cardData.map((card, index) => (
                        <motion.div
                          className="feature-card"
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                          <div className="icon">{card.icon}</div>
                          <h3>{card.title}</h3>
                          <p>{card.subtitle}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
               

                {/* Ende of the work */}


                {/* Live feet */}

                <div className="how-section">
                  <br />
                      <div className='heading_container'>
                        <h2 className="how-title ">How It Works</h2>
                      </div>
                      <br />
                      <div className="steps-container">
                        {steps.map((step, index) => (
                          <motion.div
                            key={index}
                            className="step-card"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.3, type: "spring" }}
                            viewport={{ once: true }}
                          >
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-number">{step.id}</div>
                            <div className="step-title">{step.title}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  <br />
                  <br />
                  <br />
                 
                {/* Live feet */}


                {/* Feature Section */}


                <section className="top-features">
                  <h2 className="section-title">Top Features</h2>
                  <div className="features-grid">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="feature-card"
                        style={{ backgroundColor: feature.bgColor }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.subtitle}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
                
                {/*Services Tags */}
                {/* <Service /> */}.
                <section className="home-services">
                  <h2 className="home-services-title">Our Services</h2>
                  <div className="services-grid">
                    {services.map((service, index) => (
                      <motion.div
                        className="service-card"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  <Link to="/services" className="see-more-button">See All Services</Link>
                </section>
                {/*End of the Services*/} 

                <br />
                <br />
                <br />

                {/* features */}
                  <section className="about-section">
                    <div className="about-content">
                      <h2 className="about-heading">ABOUT <br />US</h2>
                      <p>
                        We are a modern, India-based taxi service built for seamless urban mobility.
                        With a focus on transparent pricing, real-time tracking, and top-tier reliability,
                        we’re changing how people move across cities.
                      </p>
                      <p>
                        Our app ensures hassle-free bookings, 24/7 availability, and safe rides
                        through trusted drivers. Whether you're headed to the airport or a quick city ride,
                        we’ve got you covered!
                      </p>
                    </div>

                    <div className="about-image-container">
                      <img src={taxiIndiaMap} alt="India Taxi Map" className="about-image" />
                    </div>
                  </section>


                  <br />
                  <br />

                {/* Second Last Section */}

                <div className="hero-section">
                    <div className="hero-left">
                      <motion.h1
                        className="hero-title"
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        Your Ride,<br />On Time.<br />Every Time.
                      </motion.h1>

                      <motion.p
                        className="hero-subtext"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Book a ride in minutes with our easy-to-use app.
                      </motion.p>

                      <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {/* <button className="btn-yellow">Book a Ride</button> */}
                        <Link to="/BookRide" className="btn-yellow text-decoration-none">Book a Ride</Link>

                        {/* <button className="btn-white">Download App</button> */}
                      </motion.div>
                    </div>

                    <motion.div
                      className="hero-right"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <img src={taxiMap} alt="Taxi Map Illustration" className="hero-image" />
                    </motion.div>
                  </div>
                            
                
                <br />
                <br />
                <br />
                <br />
                {/* ✅ Right Side: Text & Button Animation */}

                    {/* 🖼 Right Side - Image */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center px-8 py-16 bg-gray-50 gap-12 overflow-hidden">

                {/* 📝 Right Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-xl text-center lg:text-left"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Get Quick Rides,<br />
                    <span className="text-yellow-500 border-b-4 border-yellow-400 inline-block mt-2">Low Fares</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                    In <span className="font-semibold text-yellow-600">RideNow</span>, we ensure our customers get rides quickly at the most affordable prices. Book your next trip instantly with trusted drivers, live tracking, and secure payments.
                    </p>
                    <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className=" btn btn-outline-warning btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg mt-3 "
                >
                    <a href='Contact' className='text-decoration-none text-black hover:text-yellow-500 font-medium'>Connect With Us</a>
                </motion.button>
                </motion.div>

                
                </div> 
        

                    <br />
                    <br />
                    <br />
                    
            </div>


            {/* Connection establishment */}

            
        </div>


  );
};


const StyledWrapper = styled.div`
  .link{
    text-decoration: none;
    color: #ffc107;
   }
  .link:hover{
    color:black;
  }
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    text-decoration: none;
    color: #ffc107;
    box-shadow: 0 0 0 2px #ffc107;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: #ffc107;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #ffc107;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: black;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
  text-decoration: none;
    fill: #212121;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px #ffc107;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;


export default Home;






