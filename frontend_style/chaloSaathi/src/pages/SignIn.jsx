import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isDriver, setIsDriver] = useState(false);

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
  const [aadhar, setAadhar] = useState("");

  const [license_number, setLicenseNumber] = useState("");
  const [vehicle_number, setVehicleNumber] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [taxi_photo, setTaxiPhoto] = useState(null);

  const handleCustomerRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", {
        full_name,
        email,
        phone,
        password,
        area,
        aadhar,
      });

      if (response.data.success) {
        alert("Customer registration successful! You can now log in.");
        navigate("/login");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Server error while registering.");
    }
  };

  const handleDriverRegister = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("area", area);
    formData.append("aadhar", aadhar);
    formData.append("license_number", license_number);
    formData.append("vehicle_number", vehicle_number);
    formData.append("vehicle_type", vehicle_type);
    if (taxi_photo) formData.append("taxi_photo", taxi_photo);

    const response = await axios.post(
      "http://127.0.0.1:8000/api/driver/register/",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (response.data.success) {
      alert("Driver registration successful! You can now log in.");
      navigate("/login");
    } else {
      // Handle detailed backend errors
      console.error("Driver registration error:", response.data);
      const msg =
        response.data.message ||
        (response.data.errors
          ? Object.values(response.data.errors)
              .flat()
              .join("\n")
          : "Unknown error");
      alert("Driver registration failed:\n" + msg);
    }
  } catch (error) {
    console.error("Error registering driver:", error);

    // Axios error response
    if (error.response && error.response.data) {
      const msg =
        error.response.data.message ||
        (error.response.data.errors
          ? Object.values(error.response.data.errors)
              .flat()
              .join("\n")
          : "Unknown server error");
      alert("Server error:\n" + msg);
    } else {
      alert("Unexpected error while registering driver.");
    }
  }
};



  return (
    <motion.div
      className="form-container dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Registration</h1>
      <div className="tab-switch">
        <button
          className={!isDriver ? "active" : ""}
          onClick={() => setIsDriver(false)}
        >
          Customer
        </button>
        <button
          className={isDriver ? "active" : ""}
          onClick={() => setIsDriver(true)}
        >
          Driver
        </button>
      </div>

      {!isDriver ? (
        <motion.form
          className="form-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Phone Number</label>
          <input
            type="text"
            placeholder="0000000000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="create your safety"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Area</label>
          <input
            type="text"
            placeholder="e.g., Mumbai Central"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />

          <label>Aadhar Number</label>
          <input
            type="text"
            placeholder="Enter Your Valid Aadhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
          <button className="btn-verify">verify it</button>

          <button className="register-btn" onClick={handleCustomerRegister}>
            Register as Customer
          </button>
        </motion.form>
      ) : (
        <motion.form
          className="form-section driver"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Name As Driver"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="driver@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Phone Number</label>
          <input
            type="text"
            placeholder="0000000000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="create your safety"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Area</label>
          <input
            type="text"
            placeholder="e.g., Delhi"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />

          <label>Aadhar Number</label>
          <input
            type="text"
            placeholder="Enter Your Valid Aadhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
          <button className="btn-verify">verify it</button>

          <label>Driving License Number</label>
          <input
            type="text"
            placeholder="Enter Your Valid Driving License Number"
            value={license_number}
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
          <button className="btn-verify">verify it</button>

          <label>Taxi Number</label>
          <input
            type="text"
            placeholder="Enter Your Valid Taxi Number"
            value={vehicle_number}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
          <button className="btn-verify">verify it</button>

          <label>Taxi Type</label>
          <input
            type="text"
            placeholder="Enter Taxi Type (e.g., Sedan, SUV)"
            value={vehicle_type}
            onChange={(e) => setVehicleType(e.target.value)} // ✅ correct function
          />


          <label>Taxi Photo</label>
          <input type="file" onChange={(e) => setTaxiPhoto(e.target.files[0])} />

          <button className="register-btn" onClick={handleDriverRegister}>
            Register as Driver
          </button>
        </motion.form>
      )}
    </motion.div>
  );
};

export default RegistrationForm;
