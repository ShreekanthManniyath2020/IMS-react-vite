
import axios from "axios";
import { BASE_API_URL } from "../constants/apiUrl"

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});


// const axiosInstance = axios.create({
//   baseURL: BASE_API_URL,
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle global errors
//     if (error.response?.status === 401) {
//       // Redirect to login or clear token
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;