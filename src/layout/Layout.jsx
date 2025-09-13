

// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

// export default function Layout({ children }) {
//   return (
//     <div className="d-flex flex-column min-vh-100">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content with Sidebar */}
//       <div className="d-flex flex-grow-1">
//         <Sidebar />

//         {/* Page Content */}
//         <main className="flex-grow-1 p-4 bg-light">
//           {children}
//         </main>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }


// src/layout/Layout.jsx
// import { useState, useEffect, createContext } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

// // Create Context
// export const ThemeContext = createContext();

// function Layout({ children }) {
//   const [theme, setTheme] = useState("light");

//   // Load from localStorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.body.setAttribute("data-bs-theme", savedTheme);
//   }, []);

//   // Toggle function
//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.body.setAttribute("data-bs-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className="d-flex flex-column min-vh-100">
//         <Navbar />
//         <div className="d-flex flex-grow-1">
//           <Sidebar />
//           <main className="flex-grow-1 p-3">{children}</main>
//         </div>
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default Layout;


// src/layout/Layout.jsx
// import { createContext, useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

// export const ThemeContext = createContext();

// function Layout({ children }) {
//   const [darkMode, setDarkMode] = useState(false);
//   const [collapsed, setCollapsed] = useState(false); // Sidebar collapsed state

//   return (
//     <ThemeContext.Provider value={{ darkMode, setDarkMode, collapsed, setCollapsed }}>
//       <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
//         <Navbar />
//         <div className="d-flex">
//           <Sidebar />
//           <main className="flex-fill p-4">{children}</main>
//         </div>
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default Layout;


// src/layout/Layout.jsx
// import { createContext, useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

// export const ThemeContext = createContext();

// function Layout({ children }) {
//   const [theme, setTheme] = useState("light");
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
//   const toggleSidebar = () => setCollapsed(!collapsed);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, collapsed, toggleSidebar }}>
//       <div className={theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}>
//         <Navbar />
//         <div className="d-flex">
//           <Sidebar collapsed={collapsed} />
//           <main className="flex-grow-1 p-3">{children}</main>
//         </div>
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default Layout;


// src/layout/Layout.jsx
// import { createContext, useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

// export const ThemeContext = createContext();

// function Layout({ children }) {
//   const [theme, setTheme] = useState("light");
//   const [collapsed, setCollapsed] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
//   const toggleSidebar = () => {
//     if (window.innerWidth < 992) {
//       // Mobile → toggle slide
//       setMobileOpen(!mobileOpen);
//     } else {
//       // Desktop → collapse/expand
//       setCollapsed(!collapsed);
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, collapsed, toggleSidebar }}>
//       <div className={theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}>
//         <Navbar />
//         <div className="d-flex">
//           <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
//           <main className="flex-grow-1 p-3" style={{ marginLeft: collapsed ? "80px" : "250px" }}>
//             {children}
//           </main>
//         </div>
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default Layout;

// src/layout/Layout.jsx
// import { useState, createContext } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router-dom";

// export const ThemeContext = createContext();

// export default function Layout() {
//   const [theme, setTheme] = useState("light");
//   const [collapsed, setCollapsed] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div
//         className={`d-flex flex-column min-vh-100 ${
//           theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
//         }`}
//       >
//         {/* Navbar always on top */}
//         <Navbar
//           onToggleSidebar={() => setCollapsed(!collapsed)}
//           onMobileToggle={() => setMobileOpen(!mobileOpen)}
//         />

//         <div className="d-flex flex-grow-1" style={{ minHeight: "0" }}>
//           {/* Sidebar */}
//           <Sidebar
//             collapsed={collapsed}
//             mobileOpen={mobileOpen}
//             setMobileOpen={setMobileOpen}
//           />

//           {/* Main content */}
//           <main
//             className="flex-grow-1 p-4"
//             style={{
//               marginLeft: collapsed ? "80px" : "250px",
//               transition: "margin-left 0.3s ease",
//             }}
//           >
//             <Outlet />
//           </main>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// }


// src/layout/Layout.jsx
// import { createContext, useState } from "react";
// import AppNavbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

// export const ThemeContext = createContext();

// export default function Layout({ children }) {
//   const [theme, setTheme] = useState("light");
//   const [collapsed, setCollapsed] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div
//         className={theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}
//         style={{ minHeight: "100vh" }}
//       >
//         <AppNavbar
//           collapsed={collapsed}
//           setCollapsed={setCollapsed}
//           mobileOpen={mobileOpen}
//           setMobileOpen={setMobileOpen}
//         />

//         <div className="d-flex" style={{ minHeight: "calc(100vh - 56px - 60px)" }}>
//           {/* Sidebar */}
//           <Sidebar
//             collapsed={collapsed}
//             mobileOpen={mobileOpen}
//             setMobileOpen={setMobileOpen}
//           />

//           {/* Overlay (mobile only) */}
//           {mobileOpen && (
//             <div
//               // className="sidebar-overlay"
//               // onClick={() => setMobileOpen(false)}

//                className={`sidebar-overlay ${mobileOpen ? "show" : ""}`}
//     onClick={() => setMobileOpen(false)}
//             />
//           )}

//           {/* Main content */}
//           <main className="flex-grow-1 p-3">{children}</main>
//         </div>

//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// }



// src/layout/Layout.jsx
import React, { createContext, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const ThemeContext = createContext();

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`d-flex flex-column min-vh-100 bg-${theme}`}>
        <Navbar />

        <div className="d-flex flex-grow-1">
          <Sidebar />
          <main className="flex-grow-1 p-4">{children}</main>
        </div>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}







