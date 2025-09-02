// import axios from 'axios';
// import api from "./axiosInstance";


// const instance = axios.create({
//   baseURL: 'http://127.0.0.1:8000',  // Django backend base URL
//   withCredentials: true, // if using session auth or cookies
//   headers: {
//     'Content-Type': 'application/json',
//     // 'Authorization': `Bearer ${token}`, // if using JWT token auth
//   }
// });

// api.get("/api/hello/")
//   .then(res => console.log(res.data))
//   .catch(err => console.error("API error:", err));


// export default instance;

// src/api/axios.jsx
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",  // Django backend base URL
  // withCredentials: true,             // if using cookies/session
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;   // 👈 THIS is the default export

