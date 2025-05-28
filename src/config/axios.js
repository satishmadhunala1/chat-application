import axios from 'axios';

// Set base URL for all axios requests
const apiUrl = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' 
    ? 'http://localhost:5000'
    : 'https://chat-application-1-vfu1.onrender.com');

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;

// Add request interceptor to handle errors
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);