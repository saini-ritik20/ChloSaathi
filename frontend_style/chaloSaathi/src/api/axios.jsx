import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',  // Django backend base URL
  withCredentials: true, // if using session auth or cookies
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`, // if using JWT token auth
  }
});

export default instance;
