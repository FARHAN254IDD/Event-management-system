



// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div
//       className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${
//         collapsed ? "collapsed-sidebar" : ""
//       }`}
//       style={{ width: collapsed ? "80px" : "250px", minHeight: "100vh", transition: "width 0.3s" }}
//     >
//       {/* Toggle Button */}
//       <button
//         className="btn btn-sm btn-outline-light mb-3"
//         onClick={() => setCollapsed(!collapsed)}
//       >
//         {collapsed ? "➡️" : "⬅️"}
//       </button>

//       {/* Brand */}
//       <a
//         href="/"
//         className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
//       >
//         <span className="fs-5">{collapsed ? "📊" : "📊 Dashboard"}</span>
//       </a>
//       <hr />

//       {/* Navigation */}
//       <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               "nav-link text-white d-flex align-items-center " +
//               (isActive ? "active bg-primary" : "")
//             }
//           >
//             🏠 {!collapsed && "Home"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/events"
//             className={({ isActive }) =>
//               "nav-link text-white d-flex align-items-center " +
//               (isActive ? "active bg-primary" : "")
//             }
//           >
//             🎉 {!collapsed && "Events"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/reports"
//             className={({ isActive }) =>
//               "nav-link text-white d-flex align-items-center " +
//               (isActive ? "active bg-primary" : "")
//             }
//           >
//             📑 {!collapsed && "Reports"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/settings"
//             className={({ isActive }) =>
//               "nav-link text-white d-flex align-items-center " +
//               (isActive ? "active bg-primary" : "")
//             }
//           >
//             ⚙️ {!collapsed && "Settings"}
//           </NavLink>
//         </li>
//       </ul>

//       <hr />

//       {/* User Dropdown */}
//       {!collapsed && (
//         <div className="dropdown">
//           <a
//             href="#"
//             className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
//             id="dropdownUser"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <img
//               src="https://via.placeholder.com/32"
//               alt="user"
//               width="32"
//               height="32"
//               className="rounded-circle me-2"
//             />
//             <strong>Farhan</strong>
//           </a>
//           <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Settings
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Profile
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Sign out
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


// src/components/Sidebar.jsx
// import { useContext, useState } from "react";
// import { Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";

// // Icons
// import { FaHome, FaCalendarAlt, FaChartBar, FaSignInAlt, FaUserPlus, FaKey, FaBars } from "react-icons/fa";

// function Sidebar() {
//   const { theme } = useContext(ThemeContext);
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div
//       className={`d-flex flex-column p-3 border-end ${theme === "light" ? "bg-light" : "bg-dark text-white"}`}
//       style={{ width: collapsed ? "70px" : "220px", transition: "width 0.3s" }}
//     >
//       {/* Toggle Collapse */}
//       <button
//         className={`btn mb-3 ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"}`}
//         onClick={() => setCollapsed(!collapsed)}
//       >
//         <FaBars />
//       </button>

//       <Nav className="flex-column gap-2">
//         <Nav.Item>
//           <Link to="/" className="nav-link d-flex align-items-center gap-2">
//             <FaHome /> {!collapsed && "Home"}
//           </Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Link to="/events" className="nav-link d-flex align-items-center gap-2">
//             <FaCalendarAlt /> {!collapsed && "Events"}
//           </Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Link to="/reports" className="nav-link d-flex align-items-center gap-2">
//             <FaChartBar /> {!collapsed && "Reports"}
//           </Link>
//         </Nav.Item>

//         <hr />

//         <Nav.Item>
//           <Link to="/login" className="nav-link d-flex align-items-center gap-2">
//             <FaSignInAlt /> {!collapsed && "Login"}
//           </Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Link to="/register" className="nav-link d-flex align-items-center gap-2">
//             <FaUserPlus /> {!collapsed && "Register"}
//           </Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Link to="/forgot-password" className="nav-link d-flex align-items-center gap-2">
//             <FaKey /> {!collapsed && "Forgot Password"}
//           </Link>
//         </Nav.Item>
//       </Nav>
//     </div>
//   );
// }

// export default Sidebar;


// import { useContext, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// function Sidebar() {
//   const { darkMode } = useContext(ThemeContext);
//   const [collapsed, setCollapsed] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const links = [
//     { path: "/", name: "Home", icon: <FaHome /> },
//     { path: "/events", name: "Events", icon: <FaCalendarAlt /> },
//     { path: "/reports", name: "Reports", icon: <FaChartBar /> },
//     { path: "/login", name: "Login", icon: <FaSignInAlt /> },
//     { path: "/register", name: "Register", icon: <FaUserPlus /> },
//     { path: "/forgot-password", name: "Forgot Password", icon: <FaKey /> },
//   ];

//   return (
//     <>
//       {/* Mobile toggle button */}
//       <button
//         className="btn btn-outline-secondary d-md-none m-3"
//         onClick={() => setMobileOpen(true)}
//       >
//         <FaBars />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`sidebar d-flex flex-column p-3 border-end transition-all
//           ${collapsed ? "w-20" : "w-64"}
//           ${mobileOpen ? "position-fixed top-0 start-0 vh-100 z-3" : "d-none d-md-flex"}
//           ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}
//         `}
//         style={{
//           width: collapsed ? "80px" : "240px",
//         }}
//       >
//         {/* Close button for mobile */}
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           {!collapsed && <h4 className="m-0">Menu</h4>}
//           <button
//             className="btn btn-outline-secondary d-md-none"
//             onClick={() => setMobileOpen(false)}
//           >
//             <FaTimes />
//           </button>
//         </div>

//         {/* Collapse toggle (desktop only) */}
//         <button
//           className={`btn btn-outline-${darkMode ? "light" : "secondary"} mb-4 d-none d-md-block`}
//           onClick={() => setCollapsed(!collapsed)}
//         >
//           <FaBars />
//         </button>

//         {/* Links */}
//         <ul className="nav nav-pills flex-column">
//           {links.map((link) => (
//             <li className="nav-item mb-2" key={link.path}>
//               <Link
//                 to={link.path}
//                 className={`nav-link d-flex align-items-center gap-2 ${
//                   location.pathname === link.path
//                     ? "active fw-bold"
//                     : darkMode
//                     ? "text-light"
//                     : "text-dark"
//                 }`}
//                 style={{
//                   borderRadius: "8px",
//                   transition: "0.3s",
//                 }}
//                 onClick={() => setMobileOpen(false)} // close on mobile click
//               >
//                 {link.icon}
//                 {!collapsed && link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Sidebar;

// src/components/Sidebar.jsx
// import { useContext, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
//   FaBars,
// } from "react-icons/fa";

// function Sidebar() {
//   const { darkMode } = useContext(ThemeContext);
//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();

//   const links = [
//     { path: "/", name: "Home", icon: <FaHome /> },
//     { path: "/events", name: "Events", icon: <FaCalendarAlt /> },
//     { path: "/reports", name: "Reports", icon: <FaChartBar /> },
//     { path: "/login", name: "Login", icon: <FaSignInAlt /> },
//     { path: "/register", name: "Register", icon: <FaUserPlus /> },
//     { path: "/forgot-password", name: "Forgot Password", icon: <FaKey /> },
//   ];

//   return (
//     <div
//       className={`d-flex flex-column p-3 border-end`}
//       style={{
//         width: collapsed ? "80px" : "240px",
//         backgroundColor: darkMode ? "#1e293b" : "#f8f9fa", // ✅ here
//         color: darkMode ? "#f8f9fa" : "#212529", // ✅ text color
//         minHeight: "100vh",
//         transition: "0.3s",
//       }}
//     >
//       {/* Collapse button */}
//       <button
//         className={`btn btn-sm mb-3 ${darkMode ? "btn-light" : "btn-dark"}`}
//         onClick={() => setCollapsed(!collapsed)}
//       >
//         <FaBars />
//       </button>

//       {/* Links */}
//       <ul className="nav nav-pills flex-column">
//         {links.map((link) => (
//           <li key={link.path} className="nav-item mb-2">
//             <Link
//               to={link.path}
//               className={`nav-link d-flex align-items-center gap-2 ${
//                 location.pathname === link.path
//                   ? "active fw-bold"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`}
//               style={{
//                 borderRadius: "8px",
//                 transition: "0.3s",
//               }}
//             >
//               {link.icon}
//               {!collapsed && link.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


// src/components/Sidebar.jsx
// import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
//   FaBars,
// } from "react-icons/fa";
// import { ThemeContext } from "../layout/Layout";

// function Sidebar() {
//   const { darkMode } = useContext(ThemeContext);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <>
//       {/* Mobile toggle button */}
//       <button
//         className="btn btn-outline-primary d-md-none m-2"
//         onClick={toggleSidebar}
//       >
//         <FaBars /> Menu
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`sidebar d-flex flex-column p-3 ${
//           darkMode ? "bg-dark text-light" : "bg-light text-dark"
//         } ${isOpen ? "d-block" : "d-none d-md-block"}`}
//         style={{ width: "240px", minHeight: "100vh" }}
//       >
//         <h4 className="mb-4 text-center">Dashboard</h4>

//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <Link className="nav-link" to="/">
//               <FaHome className="me-2" /> Home
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link className="nav-link" to="/events">
//               <FaCalendarAlt className="me-2" /> Events
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link className="nav-link" to="/reports">
//               <FaChartBar className="me-2" /> Reports
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link className="nav-link" to="/login">
//               <FaSignInAlt className="me-2" /> Login
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link className="nav-link" to="/register">
//               <FaUserPlus className="me-2" /> Register
//             </Link>
//           </li>
//           <li className="nav-item mb-2">
//             <Link className="nav-link" to="/forgot-password">
//               <FaKey className="me-2" /> Forgot Password
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Sidebar;



// src/components/Sidebar.jsx
// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
// } from "react-icons/fa";

// function Sidebar() {
//   const { darkMode } = useContext(ThemeContext);

//   return (
//     <div
//       className={`d-flex flex-column p-3 ${
//         darkMode ? "bg-dark text-light" : "bg-light text-dark"
//       }`}
//       style={{ width: "220px", minHeight: "100vh" }}
//     >
//       <h4 className="fw-bold mb-4">Menu</h4>

//       {/* Sidebar links */}
//       <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaHome /> Home
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/events"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaCalendarAlt /> Events
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/reports"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaChartBar /> Reports
//           </NavLink>
//         </li>

//         <hr />

//         <li>
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaSignInAlt /> Login
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/register"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaUserPlus /> Register
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/forgot-password"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaKey /> Forgot Password
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


// src/components/Sidebar.jsx
// import { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
//   FaBars,
// } from "react-icons/fa";

// function Sidebar() {
//   const { darkMode } = useContext(ThemeContext);
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div
//       className={`d-flex flex-column p-3 transition-all ${
//         darkMode ? "bg-dark text-light" : "bg-light text-dark"
//       }`}
//       style={{
//         width: collapsed ? "80px" : "220px",
//         minHeight: "100vh",
//         transition: "width 0.3s ease",
//       }}
//     >
//       {/* Toggle button */}
//       <button
//         className={`btn mb-4 ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
//         onClick={() => setCollapsed(!collapsed)}
//       >
//         <FaBars />
//       </button>

//       <h4 className={`fw-bold mb-4 ${collapsed ? "d-none" : "d-block"}`}>
//         Menu
//       </h4>

//       {/* Sidebar links */}
//       <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaHome /> {!collapsed && "Home"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/events"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaCalendarAlt /> {!collapsed && "Events"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/reports"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaChartBar /> {!collapsed && "Reports"}
//           </NavLink>
//         </li>

//         <hr />

//         <li>
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaSignInAlt /> {!collapsed && "Login"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/register"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaUserPlus /> {!collapsed && "Register"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/forgot-password"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark"
//                     : "active bg-dark text-light"
//                   : darkMode
//                   ? "text-light"
//                   : "text-dark"
//               }`
//             }
//           >
//             <FaKey /> {!collapsed && "Forgot Password"}
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


// src/components/Sidebar.jsx
// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
// } from "react-icons/fa";

// function Sidebar() {
//   const { darkMode, collapsed } = useContext(ThemeContext);

//   return (
//     <div
//       className={`d-flex flex-column p-3 transition-all ${
//         darkMode ? "bg-dark text-light" : "bg-light text-dark"
//       }`}
//       style={{
//         width: collapsed ? "80px" : "220px",
//         minHeight: "100vh",
//         transition: "width 0.3s ease",
//       }}
//     >
//       <h4 className={`fw-bold mb-4 ${collapsed ? "d-none" : "d-block"}`}>
//         Menu
//       </h4>

//       <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//           <NavLink to="/" end className="nav-link d-flex align-items-center gap-2">
//             <FaHome /> {!collapsed && "Home"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/events" className="nav-link d-flex align-items-center gap-2">
//             <FaCalendarAlt /> {!collapsed && "Events"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/reports" className="nav-link d-flex align-items-center gap-2">
//             <FaChartBar /> {!collapsed && "Reports"}
//           </NavLink>
//         </li>

//         <hr />

//         <li>
//           <NavLink to="/login" className="nav-link d-flex align-items-center gap-2">
//             <FaSignInAlt /> {!collapsed && "Login"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/register" className="nav-link d-flex align-items-center gap-2">
//             <FaUserPlus /> {!collapsed && "Register"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/forgot-password"
//             className="nav-link d-flex align-items-center gap-2"
//           >
//             <FaKey /> {!collapsed && "Forgot Password"}
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


// src/components/Sidebar.jsx
// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
// } from "react-icons/fa";

// function Sidebar() {
//   const { darkMode, collapsed } = useContext(ThemeContext);

//   return (
//     <div
//       className={`d-flex flex-column p-3 transition-all ${
//         darkMode ? "bg-dark text-light" : "bg-light text-dark"
//       }`}
//       style={{
//         width: collapsed ? "80px" : "220px",
//         minHeight: "100vh",
//         transition: "width 0.3s ease",
//       }}
//     >
//       <h4 className={`fw-bold mb-4 ${collapsed ? "d-none" : "d-block"}`}>
//         Menu
//       </h4>

//       <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark fw-bold"
//                     : "active bg-dark text-light fw-bold"
//                   : ""
//               }`
//             }
//           >
//             <FaHome /> {!collapsed && "Home"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/events"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark fw-bold"
//                     : "active bg-dark text-light fw-bold"
//                   : ""
//               }`
//             }
//           >
//             <FaCalendarAlt /> {!collapsed && "Events"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/reports"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark fw-bold"
//                     : "active bg-dark text-light fw-bold"
//                   : ""
//               }`
//             }
//           >
//             <FaChartBar /> {!collapsed && "Reports"}
//           </NavLink>
//         </li>

//         <hr />

//         <li>
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark fw-bold"
//                     : "active bg-dark text-light fw-bold"
//                   : ""
//               }`
//             }
//           >
//             <FaSignInAlt /> {!collapsed && "Login"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/register"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark fw-bold"
//                     : "active bg-dark text-light fw-bold"
//                   : ""
//               }`
//             }
//           >
//             <FaUserPlus /> {!collapsed && "Register"}
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/forgot-password"
//             className={({ isActive }) =>
//               `nav-link d-flex align-items-center gap-2 ${
//                 isActive
//                   ? darkMode
//                     ? "active bg-light text-dark fw-bold"
//                     : "active bg-dark text-light fw-bold"
//                   : ""
//               }`
//             }
//           >
//             <FaKey /> {!collapsed && "Forgot Password"}
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;



// src/components/Sidebar.jsx
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
//   FaUser,
//   FaCog,
//   FaSignOutAlt,
// } from "react-icons/fa";

// function Sidebar() {
//   const { theme } = useContext(ThemeContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   // ✅ Load user from sessionStorage
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.clear();
//     setUser(null);
//     navigate("/login");
//   };

//   const linkClasses = (path) =>
//     `d-flex align-items-center p-2 rounded mb-2 text-decoration-none ${
//       location.pathname === path
//         ? "bg-primary text-white"
//         : theme === "light"
//         ? "text-dark"
//         : "text-light"
//     }`;

//   return (
//     <div
//       className={`p-3 border-end ${
//         theme === "light" ? "bg-light" : "bg-dark"
//       }`}
//       style={{ width: "250px", minHeight: "100vh" }}
//     >
//       <h4 className="mb-4 fw-bold">{user ? `Hi, ${user.username}` : "Welcome"}</h4>

//       <Link to="/" className={linkClasses("/")}>
//         <FaHome className="me-2" /> Home
//       </Link>

//       <Link to="/events" className={linkClasses("/events")}>
//         <FaCalendarAlt className="me-2" /> Events
//       </Link>

//       <Link to="/reports" className={linkClasses("/reports")}>
//         <FaChartBar className="me-2" /> Reports
//       </Link>

//       <hr />

//       {user ? (
//         <>
//           <Link to="/profile" className={linkClasses("/profile")}>
//             <FaUser className="me-2" /> Profile
//           </Link>

//           <Link to="/settings" className={linkClasses("/settings")}>
//             <FaCog className="me-2" /> Settings
//           </Link>

//           <button
//             onClick={handleLogout}
//             className="btn btn-danger w-100 mt-3 d-flex align-items-center justify-content-center"
//           >
//             <FaSignOutAlt className="me-2" /> Logout
//           </button>
//         </>
//       ) : (
//         <>
//           <Link to="/login" className={linkClasses("/login")}>
//             <FaSignInAlt className="me-2" /> Login
//           </Link>

//           <Link to="/register" className={linkClasses("/register")}>
//             <FaUserPlus className="me-2" /> Register
//           </Link>

//           <Link to="/forgot-password" className={linkClasses("/forgot-password")}>
//             <FaKey className="me-2" /> Forgot Password
//           </Link>
//         </>
//       )}
//     </div>
//   );
// }

// export default Sidebar;

// src/components/Sidebar.jsx
// import { useContext, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { Modal, Button } from "react-bootstrap";

// function Sidebar() {
//   const { theme } = useContext(ThemeContext);
//   const navigate = useNavigate();
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   const handleLogout = () => {
//     sessionStorage.clear();
//     setShowLogoutModal(false);
//     navigate("/login");
//   };

//   // ✅ Function to apply active link styles
//   const linkClasses = ({ isActive }) =>
//     `nav-link d-flex align-items-center ${
//       isActive
//         ? theme === "light"
//           ? "bg-primary text-white rounded"
//           : "bg-light text-dark rounded"
//         : theme === "light"
//         ? "text-dark"
//         : "text-light"
//     }`;

//   return (
//     <>
//       <div
//         className="d-flex flex-column p-3 border-end"
//         style={{
//           width: "250px",
//           minHeight: "100vh",
//           backgroundColor: theme === "light" ? "#f8f9fa" : "#212529",
//         }}
//       >
//         <h4 className="text-center mb-4">📊 Dashboard</h4>

//         <ul className="nav flex-column gap-1">
//           <li className="nav-item">
//             <NavLink className={linkClasses} to="/">
//               <FaHome className="me-2" /> Home
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className={linkClasses} to="/events">
//               <FaCalendarAlt className="me-2" /> Events
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className={linkClasses} to="/reports">
//               <FaChartBar className="me-2" /> Reports
//             </NavLink>
//           </li>

//           <hr />

//           <li className="nav-item">
//             <NavLink className={linkClasses} to="/login">
//               <FaSignInAlt className="me-2" /> Login
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className={linkClasses} to="/register">
//               <FaUserPlus className="me-2" /> Register
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className={linkClasses} to="/forgot-password">
//               <FaKey className="me-2" /> Forgot Password
//             </NavLink>
//           </li>

//           <hr />

//           {/* ✅ Logout with Modal */}
//           <li className="nav-item">
//             <button
//               className="btn btn-link nav-link text-danger d-flex align-items-center"
//               onClick={() => setShowLogoutModal(true)}
//             >
//               <FaSignOutAlt className="me-2" /> Logout
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* ✅ Logout Confirmation Modal */}
//       <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Logout</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to log out?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Sidebar;


// src/components/Sidebar.jsx
// import { useContext, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
// } from "react-icons/fa";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Tooltip } from "bootstrap";

// function Sidebar({ collapsed, mobileOpen, setMobileOpen }) {
//   const { theme } = useContext(ThemeContext);

//   useEffect(() => {
//     const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
//     tooltipTriggerList.forEach((tooltipTriggerEl) => {
//       new Tooltip(tooltipTriggerEl);
//     });
//   }, [collapsed]);

//   // Active & inactive link classes
//   const getLinkClass = ({ isActive }) => {
//     const base =
//       "nav-link d-flex align-items-center mb-2 px-2 py-2 rounded transition";
//     const hover =
//       "hover-effect"; // custom hover effect
//     const activeLight = "bg-primary text-white fw-semibold shadow-sm";
//     const activeDark = "bg-secondary text-light fw-semibold";
//     const inactive =
//       theme === "light" ? "text-dark" : "text-light";

//     if (isActive) {
//       return `${base} ${hover} ${theme === "light" ? activeLight : activeDark}`;
//     }
//     return `${base} ${hover} ${inactive}`;
//   };

//   // Active icon style
//   const getIconStyle = (isActive) => {
//     if (isActive) {
//       return {
//         color: theme === "light" ? "#fff" : "#FFD43B",
//         transform: "scale(1.2)",
//         transition: "transform 0.2s ease",
//       };
//     }
//     return {
//       transition: "transform 0.2s ease",
//     };
//   };

//   return (
//     <>
//       <aside
       

//          className={`d-flex flex-column p-3 shadow
//     ${theme === "light" ? "bg-white text-dark" : "bg-dark text-light"}
//     sidebar-transition
//     ${mobileOpen ? "sidebar-open" : ""}
//   `}
//   style={{
//     width: collapsed ? "80px" : "250px",
//     transition: "width 0.3s ease",


//         }}
//       >
//         {/* Avatar */}
//         <div className="text-center mb-4">
//           <img
//             src="https://i.pravatar.cc/80?img=5"
//             alt="User Avatar"
//             className="rounded-circle mb-2"
//             width="50"
//             height="50"
//             data-bs-toggle={collapsed ? "tooltip" : ""}
//             data-bs-placement="right"
//             title="Farhan"
//           />
//           {!collapsed && (
//             <>
//               <h6 className="fw-bold">Farhan</h6>
//               <small className="text-muted">Event Organizer</small>
//             </>
//           )}
//         </div>

//         {/* Navigation */}
//         <nav className="nav flex-column">
//           <NavLink to="/" end className={getLinkClass}>
//             {({ isActive }) => (
//               <>
//                 <FaHome className="me-2" style={getIconStyle(isActive)} />
//                 {!collapsed && "Home"}
//               </>
//             )}
//           </NavLink>

//           <NavLink to="/events" className={getLinkClass}>
//             {({ isActive }) => (
//               <>
//                 <FaCalendarAlt className="me-2" style={getIconStyle(isActive)} />
//                 {!collapsed && "Events"}
//               </>
//             )}
//           </NavLink>

//           <NavLink to="/reports" className={getLinkClass}>
//             {({ isActive }) => (
//               <>
//                 <FaChartBar className="me-2" style={getIconStyle(isActive)} />
//                 {!collapsed && "Reports"}
//               </>
//             )}
//           </NavLink>

//           <hr />

//           <NavLink to="/login" className={getLinkClass}>
//             {({ isActive }) => (
//               <>
//                 <FaSignInAlt className="me-2" style={getIconStyle(isActive)} />
//                 {!collapsed && "Login"}
//               </>
//             )}
//           </NavLink>

//           <NavLink to="/register" className={getLinkClass}>
//             {({ isActive }) => (
//               <>
//                 <FaUserPlus className="me-2" style={getIconStyle(isActive)} />
//                 {!collapsed && "Register"}
//               </>
//             )}
//           </NavLink>

//           <NavLink to="/forgot-password" className={getLinkClass}>
//             {({ isActive }) => (
//               <>
//                 <FaKey className="me-2" style={getIconStyle(isActive)} />
//                 {!collapsed && "Forgot Password"}
//               </>
//             )}
//           </NavLink>
//         </nav>

        
//       </aside>

//       {/* Overlay for mobile */}
//       {mobileOpen && (
//         <div
//           className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
//           style={{ zIndex: 1040 }}
//           onClick={() => setMobileOpen(false)}
//         />
//       )}
//     </>
//   );
// }

// export default Sidebar;



// import { useContext, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaChartBar,
//   FaSignInAlt,
//   FaUserPlus,
//   FaKey,
//   FaBars,
// } from "react-icons/fa";
// import { ThemeContext } from "../layout/Layout";
// import { AuthContext } from "../context/AuthContext";

// function Sidebar() {
//   const { theme } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);
//   const location = useLocation();
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleSidebar = () => setCollapsed(!collapsed);

//   const linkClass = (path) =>
//     `d-flex align-items-center p-2 rounded mb-2 ${
//       location.pathname === path ? "active fw-bold bg-primary text-white" : ""
//     }`;

//   return (
//     <div
//       className={`sidebar bg-${theme} border-end ${
//         collapsed ? "collapsed" : ""
//       }`}
//       style={{
//         width: collapsed ? "70px" : "220px",
//         minHeight: "100vh",
//         transition: "all 0.3s",
//       }}
//     >
//       {/* ✅ Toggle Button */}
//       <div className="d-flex justify-content-between align-items-center p-3">
//         {!collapsed && <h5 className="mb-0 fw-bold">Menu</h5>}
//         <FaBars onClick={toggleSidebar} style={{ cursor: "pointer" }} />
//       </div>

//       {/* ✅ Links */}
//       <div className="px-2">
//         <Link to="/" className={linkClass("/")}>
//           <FaHome className="me-2" /> {!collapsed && "Home"}
//         </Link>

//         {/* Show Events & Reports only if logged in as Admin or Employee */}
//         {user && (user.role === "Admin" || user.role === "Employee") && (
//           <>
//             <Link to="/events" className={linkClass("/events")}>
//               <FaCalendarAlt className="me-2" /> {!collapsed && "Events"}
//             </Link>

//             <Link to="/reports" className={linkClass("/reports")}>
//               <FaChartBar className="me-2" /> {!collapsed && "Reports"}
//             </Link>
//           </>
//         )}

//         {/* Auth Section */}
//         {!user ? (
//           <>
//             <Link to="/login" className={linkClass("/login")}>
//               <FaSignInAlt className="me-2" /> {!collapsed && "Login"}
//             </Link>
//             <Link to="/register" className={linkClass("/register")}>
//               <FaUserPlus className="me-2" /> {!collapsed && "Register"}
//             </Link>
//             <Link to="/forgot-password" className={linkClass("/forgot-password")}>
//               <FaKey className="me-2" /> {!collapsed && "Forgot Password"}
//             </Link>
//           </>
//         ) : (
//           <button
//             onClick={logout}
//             className="btn btn-danger w-100 mt-3"
//           >
//             {!collapsed ? "Logout" : <FaSignInAlt />}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";
import { ThemeContext } from "../layout/Layout";
import { useAuth } from "../context/AuthContext";
import NavLinks from "./NavLinks";

function Sidebar() {
  const { theme } = useContext(ThemeContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className={`d-flex flex-column p-3 bg-${theme}`}
      style={{ minHeight: "100vh", width: "250px" }}
    >
      <h4 className="mb-4">EventSystem</h4>

      <ListGroup variant="flush" className="flex-grow-1">
        <NavLinks user={user} as="list" />
      </ListGroup>

      {user && (
        <Button
          variant="outline-danger"
          onClick={handleLogout}
          className="mt-3"
        >
          Logout
        </Button>
      )}
    </div>
  );
}

export default Sidebar;



