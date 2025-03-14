import axios from 'axios';

// Create an axios instance
const API = axios.create({
  baseURL: 'http://localhost:5000', // ✅ Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors if needed (e.g., for JWT auth)
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default API;
