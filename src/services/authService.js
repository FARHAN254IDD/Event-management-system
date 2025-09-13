// src/services/authService.js
// import axios from "axios";

// const API = "http://localhost:5000/api/auth";

// export const loginUser = async (credentials) => {
//   try {
//     const res = await axios.post(`${API}/login`, credentials, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return res.data;
//   } catch (error) {
//     throw error.response?.data || { message: "Login failed" };
//   }
// };

// export const registerUser = async (credentials) => {
//   try {
//     const res = await axios.post(`${API}/register`, credentials, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return res.data;
//   } catch (error) {
//     throw error.response?.data || { message: "Registration failed" };
//   }
// };




// import axios from "axios";

// const API = "http://localhost:5000/api/auth/";

// export const registerUser = async (userData) => {
//   try {
//     const res = await axios.post(`${API}/register`, userData, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return res.data;
//   } catch (error) {
//     throw error.response?.data || { message: "Registration failed" };
//   }
// };




// export const loginUser = async (credentials) => {
//   try {
//     const res = await axios.post(`${API}/login`, credentials, {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true, // for cookies if using refresh tokens
//     });
//     return res.data;
//   } catch (error) {
//     throw error.response?.data || { message: "Login failed" };
//   }
// };


// export const loginUser = async (credentials) => {
//   try {
//     const res = await axios.post(API, {
//       email: credentials.email,
//       password: credentials.password, // ✅ only send these
//     });
//     return res.data;
//   } catch (error) {
//     throw error.response?.data || { message: "Login failed" };
//   }
// };