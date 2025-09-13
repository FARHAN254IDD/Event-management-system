


// import { Link, NavLink } from "react-router-dom";

// /**
//  * Advanced Navbar (Bootstrap 5)
//  * - Brand at left
//  * - Primary nav links (Home, Events, Reports)
//  * - Search box (optional)
//  * - Auth buttons (Login / Register)
//  * - Profile dropdown (Forgot Password + Logout)
//  * - Mobile hamburger collapse
//  *
//  * Requires:
//  *   import 'bootstrap/dist/css/bootstrap.min.css';
//  *   import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//  * in src/main.jsx (you already did this ✅)
//  */
// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
//       <div className="container-fluid">
//         {/* Brand */}
//         <Link className="navbar-brand fw-bold" to="/">
//           🎟 EventSys
//         </Link>

//         {/* Hamburger for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//           aria-controls="mainNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible content */}
//         <div className="collapse navbar-collapse" id="mainNavbar">
//           {/* Left: main links */}
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink
//                 to="/"
//                 end
//                 className={({ isActive }) =>
//                   "nav-link" + (isActive ? " active fw-semibold" : "")
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink
//                 to="/events"
//                 className={({ isActive }) =>
//                   "nav-link" + (isActive ? " active fw-semibold" : "")
//                 }
//               >
//                 Events
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink
//                 to="/reports"
//                 className={({ isActive }) =>
//                   "nav-link" + (isActive ? " active fw-semibold" : "")
//                 }
//               >
//                 Reports
//               </NavLink>
//             </li>
//           </ul>

//           {/* Center: (optional) search */}
//           <form className="d-flex me-lg-3 mb-2 mb-lg-0" role="search" onSubmit={(e) => e.preventDefault()}>
//             <input
//               className="form-control"
//               type="search"
//               placeholder="Search events..."
//               aria-label="Search"
//             />
//           </form>

//           {/* Right: auth + profile */}
//           <div className="d-flex align-items-center gap-2">
//             <Link to="/login" className="btn btn-light btn-sm">
//               Login
//             </Link>
//             <Link to="/register" className="btn btn-warning btn-sm">
//               Register
//             </Link>

//             {/* Profile dropdown (works after auth; placeholder now) */}
//             <div className="dropdown">
//               <button
//                 className="btn btn-outline-light btn-sm dropdown-toggle"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 👤 Profile
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end">
//                 <li>
//                   <Link className="dropdown-item" to="/forgot-password">
//                     Forgot Password
//                   </Link>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   {/* Replace with real logout later */}
//                   <button className="dropdown-item" type="button">Logout</button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// src/components/Navbar.jsx
// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button } from "react-bootstrap";

// function AppNavbar() {
//   // theme state
//   const [theme, setTheme] = useState("light");

//   // load saved theme from localStorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.body.setAttribute("data-bs-theme", savedTheme);
//   }, []);

//   // toggle handler
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.body.setAttribute("data-bs-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         {/* Brand */}
//         <Navbar.Brand href="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         {/* Toggle for mobile */}
//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* Left Links */}
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/events">Events</Nav.Link>
//             <Nav.Link href="/reports">Reports</Nav.Link>
//           </Nav>

//           {/* Search form */}
//           <Form className="d-flex me-3">
//             <Form.Control
//               type="search"
//               placeholder="Search events..."
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>
//               Search
//             </Button>
//           </Form>

//           {/* User Dropdown */}
//           <Nav className="me-3">
//             <NavDropdown
//               align="end"
//               title={<span className="fw-semibold">👤 Profile</span>}
//               id="profile-dropdown"
//             >
//               <NavDropdown.Item href="/profile">My Account</NavDropdown.Item>
//               <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="/logout" className="text-danger">
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           {/* Theme Toggle Button */}
//           <Button
//             onClick={toggleTheme}
//             variant={theme === "light" ? "dark" : "light"}
//           >
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// src/components/Navbar.jsx
// import { useContext } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button } from "react-bootstrap";
// import { ThemeContext } from "../layout/Layout";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand href="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/events">Events</Nav.Link>
//             <Nav.Link href="/reports">Reports</Nav.Link>
//           </Nav>

//           <Form className="d-flex me-3">
//             <Form.Control type="search" placeholder="Search events..." className="me-2" />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//           </Form>

//           <Nav className="me-3">
//             <NavDropdown align="end" title={<span className="fw-semibold">👤 Profile</span>}>
//               <NavDropdown.Item href="/profile">My Account</NavDropdown.Item>
//               <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="/logout" className="text-danger">
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           {/* Theme Toggle */}
//           <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// src/components/Navbar.jsx
// import { useContext } from "react";
// import { ThemeContext } from "../layout/Layout";
// import { FaBars, FaMoon, FaSun } from "react-icons/fa";

// function Navbar() {
//   const { darkMode, setDarkMode, collapsed, setCollapsed } = useContext(ThemeContext);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg ${
//         darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
//       }`}
//     >
//       <div className="container-fluid d-flex justify-content-between">
//         {/* Sidebar toggle button */}
//         <button
//           className="btn btn-outline-secondary me-3"
//           onClick={() => setCollapsed(!collapsed)}
//         >
//           <FaBars />
//         </button>

//         <a className="navbar-brand fw-bold" href="/">
//           Event System
//         </a>

//         {/* Dark mode toggle */}
//         <button
//           className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"}`}
//           onClick={() => setDarkMode(!darkMode)}
//         >
//           {darkMode ? <FaSun /> : <FaMoon />}
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// src/components/Navbar.jsx
// import { useContext } from "react";
// import { ThemeContext } from "../layout/Layout";
// import { Link, useLocation } from "react-router-dom";

// function Navbar() {
//   const { darkMode, toggleDarkMode, collapsed, toggleSidebar } =
//     useContext(ThemeContext);
//   const location = useLocation();

//   // Map pathnames to titles
//   const pageTitles = {
//     "/": "Home",
//     "/events": "Events",
//     "/reports": "Reports",
//     "/login": "Login",
//     "/register": "Register",
//     "/forgot-password": "Forgot Password",
//   };

//   const currentPage = pageTitles[location.pathname] || "Dashboard";

//   return (
//     <nav
//       className={`navbar navbar-expand-lg ${
//         darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
//       } px-3`}
//     >
//       {/* Sidebar Toggle Button */}
//       <button
//         className="btn btn-outline-secondary me-3"
//         onClick={toggleSidebar}
//       >
//         {collapsed ? "☰" : "✖"}
//       </button>

//       {/* Page Title */}
//       <span className="navbar-brand fw-bold">{currentPage}</span>

//       <div className="ms-auto d-flex align-items-center gap-2">
//         {/* Dark Mode Toggle */}
//         <button
//           className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}
//           onClick={toggleDarkMode}
//         >
//           {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
//         </button>

//         {/* Example: Profile dropdown */}
//         <div className="dropdown">
//           <button
//             className={`btn btn-sm dropdown-toggle ${
//               darkMode ? "btn-outline-light" : "btn-outline-dark"
//             }`}
//             type="button"
//             data-bs-toggle="dropdown"
//           >
//             Profile
//           </button>
//           <ul className="dropdown-menu dropdown-menu-end">
//             <li>
//               <Link className="dropdown-item" to="/profile">
//                 My Profile
//               </Link>
//             </li>
//             <li>
//               <Link className="dropdown-item" to="/settings">
//                 Settings
//               </Link>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <Link className="dropdown-item" to="/logout">
//                 Logout
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// src/components/Navbar.jsx
// import { useContext, useState } from "react";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
//   ListGroup,
// } from "react-bootstrap";
// import { ThemeContext } from "../layout/Layout";
// import { NavLink, useLocation } from "react-router-dom";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const location = useLocation();

//   const pageTitles = {
//     "/": "Home",
//     "/events": "Events",
//     "/reports": "Reports",
//     "/login": "Login",
//     "/register": "Register",
//     "/forgot-password": "Forgot Password",
//   };

//   const currentPage = pageTitles[location.pathname] || "Dashboard";

//   // --- 🔍 Search state ---
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const allEvents = [
//     "Annual Tech Conference",
//     "Music Festival 2025",
//     "Startup Pitch Night",
//     "Community Hackathon",
//     "AI & Robotics Expo",
//     "Charity Gala Dinner",
//   ];

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.length > 0) {
//       const filtered = allEvents.filter((event) =>
//         event.toLowerCase().includes(value.toLowerCase())
//       );
//       setResults(filtered);
//     } else {
//       setResults([]);
//     }
//   };

//   return (
//     <Navbar
//       bg={theme}
//       data-bs-theme={theme}
//       expand="lg"
//       sticky="top"
//       className="shadow-sm px-3"
//     >
//       <Container fluid>
//         {/* Brand */}
//         <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         {/* Current Page Title */}
//         <span className="fw-semibold ms-3 d-none d-md-block text-secondary">
//           {currentPage}
//         </span>

//         {/* Hamburger */}
//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* Left Nav */}
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/" end>
//               Home
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/events">
//               Events
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/reports">
//               Reports
//             </Nav.Link>
//           </Nav>

//           {/* 🔍 Search Box with live results */}
//           <div className="position-relative me-3">
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 value={query}
//                 onChange={handleSearch}
//                 placeholder="Search events..."
//                 className="me-2"
//               />
//               <Button
//                 variant={theme === "light" ? "outline-dark" : "outline-light"}
//               >
//                 Search
//               </Button>
//             </Form>

//             {/* Dropdown results */}
//             {results.length > 0 && (
//               <ListGroup
//                 className="position-absolute mt-1 w-100 shadow"
//                 style={{ zIndex: 1050 }}
//               >
//                 {results.map((event, idx) => (
//                   <ListGroup.Item
//                     key={idx}
//                     action
//                     as={NavLink}
//                     to="/events"
//                     onClick={() => {
//                       setQuery("");
//                       setResults([]);
//                     }}
//                   >
//                     {event}
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//             )}
//           </div>

//           {/* Profile Dropdown */}
//           <Nav className="me-3">
//             <NavDropdown
//               align="end"
//               title={<span className="fw-semibold">👤 Profile</span>}
//               menuVariant={theme === "dark" ? "dark" : "light"}
//             >
//               <NavDropdown.Item as={NavLink} to="/profile">
//                 My Account
//               </NavDropdown.Item>
//               <NavDropdown.Item as={NavLink} to="/settings">
//                 Settings
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={NavLink} to="/logout" className="text-danger">
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           {/* Theme Toggle */}
//           <Button
//             onClick={toggleTheme}
//             variant={theme === "light" ? "dark" : "light"}
//           >
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// src/components/Navbar.jsx
// import { useContext } from "react";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
// } from "react-bootstrap";
// import { ThemeContext } from "../layout/Layout";
// import { Link, useNavigate } from "react-router-dom";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const navigate = useNavigate();

//   const accessToken = sessionStorage.getItem("accessToken");
//   const username = sessionStorage.getItem("user") || "Guest";

//   const handleLogout = () => {
//     sessionStorage.removeItem("accessToken");
//     sessionStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <Navbar
//       bg={theme}
//       data-bs-theme={theme}
//       expand="lg"
//       sticky="top"
//       className="shadow-sm px-3"
//     >
//       <Container fluid>
//         {/* Brand */}
//         <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
//           🎉 EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* Main Nav */}
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/events">Events</Nav.Link>
//             <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
//           </Nav>

//           {/* Search */}
//           <Form className="d-flex me-3">
//             <Form.Control
//               type="search"
//               placeholder="Search events..."
//               className="me-2"
//             />
//             <Button
//               variant={theme === "light" ? "outline-dark" : "outline-light"}
//             >
//               🔍
//             </Button>
//           </Form>

//           {/* Right Side */}
//           <Nav>
//             {accessToken ? (
//               // Logged in → Show Profile
//               <NavDropdown
//                 align="end"
//                 title={<span className="fw-semibold">👤 {username}</span>}
//                 id="profile-dropdown"
//               >
//                 <NavDropdown.Item as={Link} to="/profile">
//                   My Account
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/settings">
//                   Settings
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item
//                   onClick={handleLogout}
//                   className="text-danger fw-semibold"
//                 >
//                   🚪 Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             ) : (
//               // Logged out → Show Auth links
//               <>
//                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                 <Nav.Link as={Link} to="/register">Register</Nav.Link>
//               </>
//             )}
//           </Nav>

//           {/* Theme Toggle */}
//           <Button
//             onClick={toggleTheme}
//             variant={theme === "light" ? "dark" : "light"}
//             className="ms-3"
//           >
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;



// src/components/Navbar.jsx
// import { useContext, useEffect, useState } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button } from "react-bootstrap";
// import { ThemeContext } from "../layout/Layout";
// import { useNavigate } from "react-router-dom";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // ✅ Load user from sessionStorage
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.clear(); // remove token + user
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand href="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/events">Events</Nav.Link>
//             <Nav.Link href="/reports">Reports</Nav.Link>
//           </Nav>

//           {/* Search */}
//           <Form className="d-flex me-3">
//             <Form.Control type="search" placeholder="Search events..." className="me-2" />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//           </Form>

//           {/* Profile Dropdown */}
//           <Nav className="me-3">
//             <NavDropdown
//               align="end"
//               title={
//                 <span className="fw-semibold">
//                   👤 {user ? user.username : "Guest"}
//                 </span>
//               }
//             >
//               {user ? (
//                 <>
//                   <NavDropdown.Item href="/profile">My Account</NavDropdown.Item>
//                   <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item onClick={handleLogout} className="text-danger">
//                     Logout
//                   </NavDropdown.Item>
//                 </>
//               ) : (
//                 <>
//                   <NavDropdown.Item href="/login">Login</NavDropdown.Item>
//                   <NavDropdown.Item href="/register">Register</NavDropdown.Item>
//                 </>
//               )}
//             </NavDropdown>
//           </Nav>

//           {/* Theme Toggle */}
//           <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// src/components/Navbar.jsx
// import { useContext, useEffect, useState } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button, Modal } from "react-bootstrap";
// import { ThemeContext } from "../layout/Layout";
// import { useNavigate } from "react-router-dom";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [user, setUser] = useState(null);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.clear();
//     setUser(null);
//     setShowLogoutModal(false); // close modal
//     navigate("/login");
//   };

//   return (
//     <>
//       <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//         <Container fluid>
//           <Navbar.Brand href="/" className="fw-bold text-uppercase">
//             EventSystem
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="main-navbar" />

//           <Navbar.Collapse id="main-navbar">
//             <Nav className="me-auto">
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="/events">Events</Nav.Link>
//               <Nav.Link href="/reports">Reports</Nav.Link>
//             </Nav>

//             {/* Search */}
//             <Form className="d-flex me-3">
//               <Form.Control type="search" placeholder="Search events..." className="me-2" />
//               <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//             </Form>

//             {/* Profile Dropdown */}
//             <Nav className="me-3">
//               <NavDropdown
//                 align="end"
//                 title={<span className="fw-semibold">👤 {user ? user.username : "Guest"}</span>}
//               >
//                 {user ? (
//                   <>
//                     <NavDropdown.Item href="/profile">My Account</NavDropdown.Item>
//                     <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item onClick={() => setShowLogoutModal(true)} className="text-danger">
//                       Logout
//                     </NavDropdown.Item>
//                   </>
//                 ) : (
//                   <>
//                     <NavDropdown.Item href="/login">Login</NavDropdown.Item>
//                     <NavDropdown.Item href="/register">Register</NavDropdown.Item>
//                   </>
//                 )}
//               </NavDropdown>
//             </Nav>

//             {/* Theme Toggle */}
//             <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//               {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//             </Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* ✅ Logout Confirmation Modal */}
//       <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Logout</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to log out?
//         </Modal.Body>
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

// export default AppNavbar;

// src/components/Navbar.jsx
// import { useContext } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* ✅ Active Highlighting for Links */}
//           <Nav className="me-auto">
//             <Nav.Link
//               as={NavLink}
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "fw-bold text-primary" : ""
//               }
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               as={NavLink}
//               to="/events"
//               className={({ isActive }) =>
//                 isActive ? "fw-bold text-primary" : ""
//               }
//             >
//               Events
//             </Nav.Link>
//             <Nav.Link
//               as={NavLink}
//               to="/reports"
//               className={({ isActive }) =>
//                 isActive ? "fw-bold text-primary" : ""
//               }
//             >
//               Reports
//             </Nav.Link>
//           </Nav>

//           {/* ✅ Search Bar */}
//           <Form className="d-flex me-3">
//             <Form.Control type="search" placeholder="Search events..." className="me-2" />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//           </Form>

//           {/* ✅ Profile Dropdown */}
//           <Nav className="me-3">
//             <NavDropdown align="end" title={<span className="fw-semibold">👤 Profile</span>}>
//               <NavDropdown.Item as={NavLink} to="/profile">
//                 My Account
//               </NavDropdown.Item>
//               <NavDropdown.Item as={NavLink} to="/settings">
//                 Settings
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={NavLink} to="/logout" className="text-danger">
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           {/* ✅ Theme Toggle */}
//           <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// src/components/Navbar.jsx
// import { useContext } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* ✅ Main Navbar Links */}
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/" end>
//               Home
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/events">
//               Events
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/reports">
//               Reports
//             </Nav.Link>
//           </Nav>

//           {/* ✅ Search Bar */}
//           <Form className="d-flex me-3">
//             <Form.Control type="search" placeholder="Search events..." className="me-2" />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//           </Form>

//           {/* ✅ Profile Dropdown with Active Highlight */}
//           <Nav className="me-3">
//             <NavDropdown align="end" title={<span className="fw-semibold">👤 Profile</span>}>
//               <NavDropdown.Item
//                 as={NavLink}
//                 to="/profile"
//                 className={({ isActive }) => (isActive ? "active fw-semibold text-primary" : "")}
//               >
//                 My Account
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={NavLink}
//                 to="/settings"
//                 className={({ isActive }) => (isActive ? "active fw-semibold text-primary" : "")}
//               >
//                 Settings
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={NavLink} to="/logout" className="text-danger">
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           {/* ✅ Theme Toggle */}
//           <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// src/components/Navbar.jsx
// import { useContext } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button, Image } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* ✅ Main Navbar Links */}
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/" end>
//               Home
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/events">
//               Events
//             </Nav.Link>
//             <Nav.Link as={NavLink} to="/reports">
//               Reports
//             </Nav.Link>
//           </Nav>

//           {/* ✅ Search Bar */}
//           <Form className="d-flex me-3">
//             <Form.Control type="search" placeholder="Search events..." className="me-2" />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//           </Form>

//           {/* ✅ Profile Dropdown with Avatar */}
//           <Nav className="me-3">
//             <NavDropdown
//               align="end"
//               title={
//                 <Image
//                   src="https://i.pravatar.cc/40?img=3" // sample avatar (replace with real user image later)
//                   roundedCircle
//                   width="40"
//                   height="40"
//                   alt="User"
//                 />
//               }
//             >
//               <NavDropdown.Item
//                 as={NavLink}
//                 to="/profile"
//                 className={({ isActive }) => (isActive ? "active fw-semibold text-primary" : "")}
//               >
//                 My Account
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 as={NavLink}
//                 to="/settings"
//                 className={({ isActive }) => (isActive ? "active fw-semibold text-primary" : "")}
//               >
//                 Settings
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item as={NavLink} to="/logout" className="text-danger">
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           {/* ✅ Theme Toggle */}
//           <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>



//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// import { useContext } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button, Image } from "react-bootstrap";
// import { NavLink, useNavigate } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import { AuthContext } from "../context/AuthContext";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* ✅ Main Navbar Links */}
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/" end>
//               Home
//             </Nav.Link>

//             {/* Show Events & Reports only if logged in */}
//             {user && (user.role === "Admin" || user.role === "Employee") && (
//               <>
//                 <Nav.Link as={NavLink} to="/events">
//                   Events
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/reports">
//                   Reports
//                 </Nav.Link>
//               </>
//             )}
//           </Nav>

//           {/* ✅ Search Bar */}
//           <Form className="d-flex me-3">
//             <Form.Control type="search" placeholder="Search events..." className="me-2" />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//           </Form>

//           {/* ✅ Profile or Login/Register */}
//           <Nav className="me-3">
//             {user ? (
//               <NavDropdown
//                 align="end"
//                 title={
//                   <Image
//                     src={user.avatar || "https://i.pravatar.cc/40"} // fallback avatar
//                     roundedCircle
//                     width="40"
//                     height="40"
//                     alt="User"
//                   />
//                 }
//               >
//                 <NavDropdown.Header>
//                   <strong>{user.username}</strong> <br />
//                   <small className="text-muted">{user.role}</small>
//                 </NavDropdown.Header>

//                 <NavDropdown.Item as={NavLink} to="/profile">
//                   My Account
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/settings">
//                   Settings
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item onClick={handleLogout} className="text-danger">
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             ) : (
//               <>
//                 <Nav.Link as={NavLink} to="/login">
//                   Login
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/register">
//                   Register
//                 </Nav.Link>
//               </>
//             )}
//           </Nav>

//           {/* ✅ Theme Toggle */}
//           <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;

// import { useContext } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button, Image } from "react-bootstrap";
// import { NavLink, useNavigate } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import { AuthContext } from "../context/AuthContext";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* ✅ Main Navbar Links */}
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/" end>
//               Home
//             </Nav.Link>

//             {/* Show Events & Reports only if logged in */}
//             {user && (user.role === "Admin" || user.role === "Employee") && (
//               <>
//                 <Nav.Link as={NavLink} to="/events">
//                   Events
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/reports">
//                   Reports
//                 </Nav.Link>
//               </>
//             )}
//           </Nav>

//           {/* ✅ Search Bar */}
//           <Form className="d-flex me-3">
//             <Form.Control type="search" placeholder="Search events..." className="me-2" />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//           </Form>

//           {/* ✅ Profile or Login/Register */}
//           <Nav className="me-3">
//             {user ? (
//               <NavDropdown
//                 align="end"
//                 title={
//                   <Image
//                     src={user.avatar || "https://i.pravatar.cc/40"} // fallback avatar
//                     roundedCircle
//                     width="40"
//                     height="40"
//                     alt="User"
//                   />
//                 }
//               >
//                 <NavDropdown.Header>
//                   <strong>{user.username}</strong> <br />
//                   <small className="text-muted">{user.role}</small>
//                 </NavDropdown.Header>

//                 <NavDropdown.Item as={NavLink} to="/profile">
//                   My Account
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/settings">
//                   Settings
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item onClick={handleLogout} className="text-danger">
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             ) : (
//               <>
//                 <Nav.Link as={NavLink} to="/login">
//                   Login
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/register">
//                   Register
//                 </Nav.Link>
//               </>
//             )}
//           </Nav>

//           {/* ✅ Theme Toggle */}
//           <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// import { useContext } from "react";
// import { Navbar, Nav, Container, NavDropdown, Form, Button, Image } from "react-bootstrap";
// import { NavLink, useNavigate } from "react-router-dom";
// import { ThemeContext } from "../layout/Layout";
// import { useAuth } from "../context/AuthContext";

// function AppNavbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { user, logout } = useAuth();  // ✅ using custom hook
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
//       <Container fluid>
//         <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
//           EventSystem
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />

//         <Navbar.Collapse id="main-navbar">
//           {/* ✅ Main Navbar Links */}
//           <Nav className="me-auto">
//             <Nav.Link as={NavLink} to="/" end>
//               Home
//             </Nav.Link>

//             {/* Show Events & Reports only if logged in */}
//             {user && (user.role === "Admin" || user.role === "Employee") && (
//               <>
//                 <Nav.Link as={NavLink} to="/events">
//                   Events
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/reports">
//                   Reports
//                 </Nav.Link>
//               </>
//             )}
//           </Nav>

//           {/* ✅ Search Bar */}
//           <Form className="d-flex me-3">
//             <Form.Control type="search" placeholder="Search events..." className="me-2" />
//             <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
//           </Form>

//           {/* ✅ Profile or Login/Register */}
//           <Nav className="me-3">
//             {user ? (
//               <NavDropdown
//                 align="end"
//                 title={
//                   <Image
//                     src={user.avatar || "https://i.pravatar.cc/40"} // fallback avatar
//                     roundedCircle
//                     width="40"
//                     height="40"
//                     alt="User"
//                   />
//                 }
//               >
//                 <NavDropdown.Header>
//                   <strong>{user.username}</strong> <br />
//                   <small className="text-muted">{user.role}</small>
//                 </NavDropdown.Header>

//                 <NavDropdown.Item as={NavLink} to="/profile">
//                   My Account
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/settings">
//                   Settings
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item onClick={handleLogout} className="text-danger">
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             ) : (
//               <>
//                 <Nav.Link as={NavLink} to="/login">
//                   Login
//                 </Nav.Link>
//                 <Nav.Link as={NavLink} to="/register">
//                   Register
//                 </Nav.Link>
//               </>
//             )}
//           </Nav>

//           {/* ✅ Theme Toggle */}
//           <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
//             {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


import { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown, Form, Button, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../layout/Layout";
import { useAuth } from "../context/AuthContext";
import NavLinks from "./NavLinks";

function AppNavbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg={theme} data-bs-theme={theme} expand="lg" sticky="top" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold text-uppercase">
          EventSystem
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavLinks user={user} as="nav" />
          </Nav>

          <Form className="d-flex me-3">
            <Form.Control type="search" placeholder="Search events..." className="me-2" />
            <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>Search</Button>
          </Form>

          <Nav className="me-3">
            {user ? (
              <NavDropdown
                align="end"
                title={
                  <Image
                    src={user.avatar || "https://i.pravatar.cc/40"}
                    roundedCircle
                    width="40"
                    height="40"
                    alt="User"
                  />
                }
              >
                <NavDropdown.Header>
                  <strong>{user.username}</strong> <br />
                  <small className="text-muted">{user.role}</small>
                </NavDropdown.Header>

                <NavDropdown.Item as={NavLink} to="/profile">
                  My Account
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/settings">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout} className="text-danger">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>

          <Button onClick={toggleTheme} variant={theme === "light" ? "dark" : "light"}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;


















