
import Service from './Service.jsx'
import Profile1 from './assets/profile1.jpeg';
import Profile2 from './assets/profile2.jpg';
import Profile3 from './assets/profile3.avif';

import car from "../assets/car.png";
// import Part3 from "../assets/part3.png"
import Part4 from "../assets/part4.jpg"
import styled from 'styled-components'
// import Contact from './Contact.jsx'

import './Home.css';
import { motion } from 'framer-motion';


{/* Popularity Section */}
const stats = [
  { value: "1M+", label: "rides completed" },
  { value: "98%", label: "on-time rating" },
  { value: "300+", label: "cities served" },
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
const features = [
  {
    icon: "✔️",
    title: "Fixed & Transparent Pricing",
    description: "No surprises, no hidden fees",
  },
  {
    icon: "🚗",
    title: "Wide Fleet Options",
    description: "Cars to suit every need",
  },
  {
    icon: "🧑‍✈️",
    title: "Verified Drivers",
    description: "Professional and reliable",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    description: "Your well-being, our priority",
  },
  {
    icon: "📱",
    title: "24x7 App Support",
    description: "Help when you need it",
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


const testimonials = [
  {
    name: 'Sarah Williams',
    image: Profile1,
    review: 'Very convenient and reliable service. Highly recommended!',
  },
  {
    name: 'John Smith',
    image: Profile2,
    review: 'Drivers are punctual and friendly. Great experience every time.',
  },
  {
    name: 'Emily Johnson',
    image: Profile3,
    review: 'Easy to book and the car was very clean. Will use again.',
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

                <div className="why-section">
                  <br />
                  <h2 className="section-title">Why Choose Us</h2>
                  <br />
                  <div className="card-container">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        className="feature-card"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
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
                
                {/*Services Tags */}
                {/* <Service /> */}.
                <motion.div 
                      className="container"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                
                      <motion.div 
                        className="services-container"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="p-3 justify-center align-center">
                          <h1 className="text-center text-black text-5xl font-bold font-weight-3">
                            🚖 Our Services
                          </h1>
                        </div>
                        <br />
                        <br />
                
                        <motion.div 
                          className='image-store'
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <img src={Part4} className="picture" width={500} height={400} alt="image" />
                          <div className='content'>
                            {/* <h3 className=''>Chalo Saathi</h3> */}
                            <h2>Your Daily Ride, Made Easy</h2>
                            <p>Safe. Affordable. Comfortable. Always.

                              Whether you're commuting to work, heading to college, shopping at the market, or returning home, we’ve got you covered with smooth and reliable rides—every single day.

                              </p>
                            <p>Fixed and transparent pricing .</p>
                            <p>Verified & trained drivers .</p>
                            <p>Real-time GPS tracking .</p>
                            {/* <p>Professional and polite drivers</p> */}
                            <StyledWrapper>
                                <button className="animated-button">
                                    
                                    <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                                    </svg>
                                    <a href="Service" className='link'><span className="text">More Information</span> </a>
                                    <span className="circle" />
                                    <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                                    </svg>
                                   
                                </button>
                                </StyledWrapper>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                {/*End of the Services*/} 
                
                
                <br />
                <br />
                <br />
                <br />
                {/* ✅ Right Side: Text & Button Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                        className="max-w-xl text-center lg:text-left"
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-snug">
                        <span className="text-yellow-500">"Your Ride,</span> Your Time,<br />Your Way."
                        </h1>
                        <p className="text-gray-600 text-lg lg:text-xl mb-6">
                        At RideNow, we believe that every ride should start at the right place and head in the right direction — with zero confusion. That’s why our platform uses advanced GPS technology to detect your exact pickup location, even in busy streets or remote corners. With real-time tracking, you'll always know where your driver is and when they’ll arrive. From live route updates to clear driver details, RideNow offers a transparent and stress-free travel experience from the moment you book. Enjoy every ride with confidence, knowing you’re always in the right place at the right time. <span className="font-semibold text-yellow-500">RideNow</span> – your trusted travel companion.
                        </p>

                        {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300"
                        >
                        🚕 Book a Ride Now
                        </motion.button> */}
                    </motion.div>

                   {/* New addition of the reviews  */}



                   <div className="testimonials-wrapper">
                      <motion.h2
                        className="testimonials-title"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        What Our Customers Say
                      </motion.h2>

                      <motion.div
                        className="testimonials-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                      >
                        {testimonials.map((t, index) => (
                          <motion.div className="testimonial-card" key={index} variants={cardVariants}>
                            <img src={t.image} alt={t.name} className="testimonial-image" />
                            <h3 className="testimonial-name">{t.name}</h3>
                            <p className="testimonial-review">{t.review}</p>
                            <div className="testimonial-stars">
                              {'★★★★★'.split('').map((star, i) => (
                                <span key={i} className="star">★</span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>



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
                    <a href='Contact' className='no-underline text-black hover:text-yellow-500 font-medium'>Connect With Us</a>
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






