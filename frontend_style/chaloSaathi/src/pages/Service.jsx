import React from 'react'
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';
// import styled from 'styled-components';
import './Service.css'
import part3 from "../assets/part3.png"
// import { Link } from 'react-router-dom'
// import logo from "../assets/logo.png";


function Serivce(){ 
  return (
        <div className="container  ">
          
           <div className="services-container ">
            <div className=" p-3 justify-center align-center" >
              <h1 className="text-center text-black text-5xl font-bold font-weight-3">
                  🚖 Our Services
              </h1>
            </div>
            <div className='image-store'>
              <img src={part3} class="picture" width={500} height={400} alt="image" />
              <div className='content'>
                <h3>Chalo Saathi </h3>
                <p>we’re dedicated to providing safe, affordable, and comfortable daily rides for everyone—whether you're heading to work, college, the market, or home .
              </p>
              </div>
            </div> 
          </div>

            <div className='cards-contain '>
            {/* First Card */}
            <div class="e-card playing">
            <div class="image"></div>
            
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            

                <div class="infotop">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
            <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
            4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
            21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
            22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
            17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
            14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
            3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
            19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
            12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
            16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
            15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
            19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
            16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
            20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg><br/>      
            UI / EX Designer
          <br/>
          <div class="name">MikeAndrewDesigner</div>
            </div>
          </div>

          <div class="e-card playing">
            <div class="image"></div>
            
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            

                <div class="infotop">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
            <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
            4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
            21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
            22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
            17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
            14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
            3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
            19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
            12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
            16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
            15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
            19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
            16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
            20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg><br/>      
            UI / EX Designer
          <br/>
          <div class="name">MikeAndrewDesigner</div>
            </div>
          </div>
             {/* Second Card */}
          <div class="e-card playing">
            <div class="image"></div>
            
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            

                <div class="infotop">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
            <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
            4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
            21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
            22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
            17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
            14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
            3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
            19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
            12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
            16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
            15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
            19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
            16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
            20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg><br/>      
            UI / EX Designer
          <br/>
          <div class="name">MikeAndrewDesigner</div>
            </div>
          </div>
           {/* Third Card */}
          <div class="e-card playing">
            <div class="image"></div>
            
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            

                <div class="infotop">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
            <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
            4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
            21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
            22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
            17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
            14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
            3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
            19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
            12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
            16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
            15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
            19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
            16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
            20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg><br/>      
            UI / EX Designer
          <br/>
          <div class="name">MikeAndrewDesigner</div>
            </div>
          </div>
           {/* Fourth Card */}
          <div class="e-card playing">
            <div class="image"></div>
            
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            

                <div class="infotop">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
            <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
            4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
            21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
            22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
            17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
            14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
            3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
            19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
            12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
            16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
            15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
            19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
            16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
            20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg><br/>      
            UI / EX Designer
          <br/>
          <div class="name">MikeAndrewDesigner</div>
            </div>
          </div>
            {/* fifth Card */}
          <div class="e-card playing">
            <div class="image"></div>
            
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            

                <div class="infotop">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon">
            <path fill="currentColor" d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
            4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
            21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
            22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
            17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
            14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
            3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
            19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
            12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
            16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
            15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
            19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
            16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
            20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"></path></svg><br/>      
            UI / EX Designer
          <br/>
          <div class="name">MikeAndrewDesigner</div>
            </div>
          </div>

          </div>    

      </div>




  );
};




export default Serivce;


// import React from 'react'
// import './Service.css'
// import part3 from "../assets/part3.png"
// import { motion } from 'framer-motion';

// function Serivce(){ 
//   return (
//     <motion.div 
//       className="container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >

//       <motion.div 
//         className="services-container"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="p-3 justify-center align-center">
//           <h1 className="text-center text-black text-5xl font-bold font-weight-3">
//             🚖 Our Services
//           </h1>
//         </div>

//         {/* <motion.div 
//           className='image-store'
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <img src={part3} className="picture" width={500} height={400} alt="image" />
//           <div className='content'>
//             <h1 className=''>Chalo Saathi</h1>
//             <p>we’re dedicated to providing safe, affordable, and comfortable daily rides for everyone—whether you're heading to work, college, the market, or home.</p>
//           </div>
//         </motion.div> */}
//       </motion.div>

//       <motion.div 
//         className='cards-contain'
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         {/* Keep your existing cards untouched, just add motion.div for animation */}
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="e-card playing"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: i * 0.1, duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             {/* Card content remains same */}
//             <div className="image"></div>
//             <div className="wave"></div>
//             <div className="wave"></div>
//             <div className="wave"></div>
//             <div className="infotop">
//               {/* You can customize icon animation too if needed */}
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon">
//                 {/* ...icon path... */}
//               </svg><br />
//               UI / EX Designer<br />
//               <div className="name">MikeAndrewDesigner</div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//     </motion.div>
//   );
// };

// export default Serivce;

// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { CheckCircle, MapPin, UserCheck } from "lucide-react";

// const features = [
//   {
//     icon: <CheckCircle className="text-blue-500 w-8 h-8" />,
//     title: "Fixed & Transparent Pricing",
//     description: "No hidden fees. Know your fare upfront, every time."
//   },
//   {
//     icon: <UserCheck className="text-blue-500 w-8 h-8" />,
//     title: "Verified & Trained Drivers",
//     description:
//       "All our drivers go through strict background checks and professional training for your safety and comfort."
//   },
//   {
//     icon: <MapPin className="text-blue-500 w-8 h-8" />,
//     title: "Real-Time GPS Tracking",
//     description:
//       "Track your ride live. Share your location with loved ones and travel with peace of mind."
//   }
// ];

// const Service = () => {
//   return (
//     <div className="min-h-screen bg-white px-6 py-10 md:px-20">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-10"
//       >
//         <h1 className="text-4xl font-bold mb-2">Your Daily Ride, Made Easy.</h1>
//         <h2 className="text-xl text-blue-600 font-semibold">
//           Safe. Affordable. Comfortable. Always.
//         </h2>
//         <p className="mt-4 text-gray-700 max-w-xl mx-auto">
//           Whether you're commuting to work, heading to college, shopping at the market, or returning home, we've got
//           you covered with smooth and reliable rides – every single day.
//         </p>
//       </motion.div>

//       <div className="text-center mb-8">
//         <h3 className="text-2xl font-semibold">Why Ride With Us?</h3>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="grid md:grid-cols-2 gap-8 lg:grid-cols-3"
//       >
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center text-center border p-6 rounded-2xl shadow-sm hover:shadow-md transition"
//             whileHover={{ scale: 1.03 }}
//           >
//             <div className="mb-4">{feature.icon}</div>
//             <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
//             <p className="text-gray-600 text-sm">{feature.description}</p>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="text-center mt-12"
//       >
//         <h4 className="text-xl font-semibold mb-2">Hop in. Sit back. Ride stress-free.</h4>
//         <p className="text-gray-600 mb-4">Your trusted travel partner is just a click away.</p>
//         <Button className="bg-blue-600 text-white px-6 py-2 text-sm rounded-xl hover:bg-blue-700">
//           Sign Up Now
//         </Button>
//       </motion.div>
//     </div>
//   );
// };

// export default Service;
