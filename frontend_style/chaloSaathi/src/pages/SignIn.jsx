
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SignIn.css";

const RegistrationForm = () => {
  const [isDriver, setIsDriver] = useState(false);

  return (
    <motion.div className="form-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Registration</h1>
      <div className="tab-switch">
        <button className={!isDriver ? "active" : ""} onClick={() => setIsDriver(false)}>Customer</button>
        <button className={isDriver ? "active" : ""} onClick={() => setIsDriver(true)}>Driver</button>
      </div>

      {!isDriver ? (
        <motion.form className="form-section" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <label>Full Name</label>
          <input type="text" placeholder="Enter Full Name" />

          <label>Gmail</label>
          <input type="email" placeholder="example@gmail.com" />

          <label>Phone Number</label>
          <input type="text" placeholder="0000000000" />

          <label>Password</label>
          <input type="password" placeholder="create your saftey" />

          <label>Area</label>
          <input type="text" placeholder="e.g., Mumbai Central" />

          <label>Aadhar Number</label>
          <input type="text" placeholder="Enter Your Valid Aadhar Number" />
          <button className="btn-verify">verify it</button>

          {/* <label>Aadhar Verification</label>
          <input type="file" /> */}

          <button className="register-btn">Register as Customer</button>
        </motion.form>
      ) : (
        <motion.form className="form-section driver" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <label>Full Name</label>
          <input type="text" placeholder="Enter Name As Driver" />

          <label>Gmail</label>
          <input type="email" placeholder="driver@gmail.com" />

          <label>Phone Number</label>
          <input type="text" placeholder="0000000000" />

          <label>Password</label>
          <input type="password" placeholder="create your saftey" />

          <label>Area</label>
          <input type="text" placeholder="e.g., Delhi" />

          <label>Aadhar Number</label>
          <input type="text" placeholder="Enter Your Valid Aadhar Number" />
          <button className="btn-verify">verify it</button>
          


          <label>Driving License Number</label>
          <input type="text" placeholder="Enter Your Valid Driving License Number" />
          <button className="btn-verify">verify it</button>


          <label>Taxi Number</label>
          <input type="text" placeholder="Enter Your Valid Taxi Number" />
          <button className="btn-verify">verify it</button>

          {/* <label>Aadhar Verification</label>
          <input type="file" />

          <label>Driving License</label>
          <input type="file" />

          <label>Taxi Number Proof</label>
          <input type="file" /> */}

          <label>Taxi Photo</label>
          <input type="file" />

          <button className="register-btn">Register as Driver</button>
        </motion.form>
      )}
    </motion.div>
  );
};

export default RegistrationForm;
