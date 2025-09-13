// src/context/AuthContext.jsx
// import { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null); // { name, role }
//   const navigate = useNavigate();

//   const login = (role) => {
//     setUser({ name: "Farhan", role });
//     navigate("/");
//   };

//   const logout = () => {
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }


// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   // Load user/token from sessionStorage on refresh
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     const storedToken = sessionStorage.getItem("token");

//     if (storedUser && storedToken) {
//       setUser(JSON.parse(storedUser));
//       setToken(storedToken);
//     }
//   }, []);

//   // Save user/token to sessionStorage whenever they change
//   useEffect(() => {
//     if (user && token) {
//       sessionStorage.setItem("user", JSON.stringify(user));
//       sessionStorage.setItem("token", token);
//     } else {
//       sessionStorage.removeItem("user");
//       sessionStorage.removeItem("token");
//     }
//   }, [user, token]);

//   const login = (userData, jwt) => {
//     setUser(userData);
//     setToken(jwt);
//   };

//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     sessionStorage.clear();
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   // ✅ Login function
//   const login = (userData) => {
//     setUser(userData);
//     sessionStorage.setItem("user", JSON.stringify(userData));
//     sessionStorage.setItem("token", userData.token);
//   };

//   // ✅ Logout function
//   const logout = () => {
//     setUser(null);
//     sessionStorage.removeItem("user");
//     sessionStorage.removeItem("token");
//   };

//   // ✅ Restore from sessionStorage (optional)
//   // Could also use useEffect for auto-restore

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // ✅ Custom hook (THIS is what was missing)
// export function useAuth() {
//   return useContext(AuthContext);
// }





// import { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // ✅ Restore user on app load
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // ✅ Login function (save token + user)
//   const login = (userData, token) => {
//     sessionStorage.setItem("user", JSON.stringify(userData));
//     sessionStorage.setItem("token", token);
//     setUser(userData);
//   };

//   // ✅ Logout function (clear session)
//   const logout = () => {
//     sessionStorage.removeItem("user");
//     sessionStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ Custom hook for cleaner usage
// export const useAuth = () => useContext(AuthContext);






// import { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext(); // ✅ keep this for direct use

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = (userData, token) => {
//     sessionStorage.setItem("user", JSON.stringify(userData));
//     sessionStorage.setItem("token", token);
//     setUser(userData);
//   };

//   const logout = () => {
//     sessionStorage.removeItem("user");
//     sessionStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ Hook for cleaner usage
// export const useAuth = () => useContext(AuthContext);






// src/context/AuthContext.jsx
// import { createContext, useContext, useState, useEffect, useCallback } from "react";
// import axios from "axios";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);

//   // ✅ Restore user + tokens on load
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     const storedAccess = sessionStorage.getItem("accessToken");
//     if (storedUser && storedAccess) {
//       setUser(JSON.parse(storedUser));
//       setAccessToken(storedAccess);
//     }
//   }, []);

//   // ✅ Refresh token API call
//   const refreshToken = useCallback(async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/refresh", {}, { withCredentials: true });
//       const newAccess = res.data.accessToken;
//       setAccessToken(newAccess);
//       sessionStorage.setItem("accessToken", newAccess);
//       return newAccess;
//     } catch (err) {
//       console.error("Refresh token failed:", err);
//       logout();
//     }
//   }, []);

//   // ✅ Login function
//   const login = (userData, access, refresh) => {
//     sessionStorage.setItem("user", JSON.stringify(userData));
//     sessionStorage.setItem("accessToken", access);
//     // refresh token is stored in httpOnly cookie, not sessionStorage
//     setUser(userData);
//     setAccessToken(access);
//   };

//   // ✅ Logout
//   const logout = () => {
//     sessionStorage.removeItem("user");
//     sessionStorage.removeItem("accessToken");
//     setUser(null);
//     setAccessToken(null);
//   };

//   // ✅ Axios interceptor to auto-refresh
//   useEffect(() => {
//     const interceptor = axios.interceptors.response.use(
//       (res) => res,
//       async (error) => {
//         const originalRequest = error.config;
//         if (error.response?.status === 401 && !originalRequest._retry) {
//           originalRequest._retry = true;
//           const newAccess = await refreshToken();
//           if (newAccess) {
//             originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
//             return axios(originalRequest);
//           }
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => axios.interceptors.response.eject(interceptor);
//   }, [refreshToken]);

//   return (
//     <AuthContext.Provider value={{ user, accessToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ Hook for easy usage
// export const useAuth = () => useContext(AuthContext);





// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Restore user + tokens on load
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedAccess = sessionStorage.getItem("accessToken");

    if (storedUser && storedAccess) {
      setUser(JSON.parse(storedUser));
      setAccessToken(storedAccess);
    }
    setLoading(false);
  }, []);

  // ✅ Refresh token API call
  const refreshToken = useCallback(async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/refresh",
        {},
        { withCredentials: true }
      );
      const newAccess = res.data.accessToken;

      setAccessToken(newAccess);
      sessionStorage.setItem("accessToken", newAccess);

      return newAccess;
    } catch (err) {
      console.error("❌ Refresh token failed:", err.response?.data || err.message);
      logout();
      return null;
    }
  }, []);

  // ✅ Login function
  const login = (userData, access) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("accessToken", access);

    // refreshToken is stored in httpOnly cookie automatically
    setUser(userData);
    setAccessToken(access);
  };

  // ✅ Logout function
  const logout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    } catch (err) {
      console.warn("Logout cleanup failed:", err.message);
    }
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("accessToken");
    setUser(null);
    setAccessToken(null);
  };

  // ✅ Axios interceptor to auto-refresh access token
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (res) => res,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          const newAccess = await refreshToken();

          if (newAccess) {
            originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
            return axios(originalRequest);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ user, accessToken, login, logout, refreshToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Hook for easier usage
export const useAuth = () => useContext(AuthContext);






// import { createContext, useContext, useState, useEffect } from "react";
// import { loginUser, registerUser } from "../services/authService";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // ✅ Restore user from sessionStorage
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // ✅ Login
//   const login = async (credentials) => {
//     const data = await loginUser(credentials);
//     sessionStorage.setItem("user", JSON.stringify(data.user));
//     sessionStorage.setItem("token", data.accessToken);
//     setUser(data.user);
//   };

//   // ✅ Register
//   const register = async (userData) => {
//     const data = await registerUser(userData);
//     return data; // let Register page handle navigation
//   };

//   // ✅ Logout
//   const logout = () => {
//     sessionStorage.removeItem("user");
//     sessionStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

