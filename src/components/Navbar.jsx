


import { Link, NavLink } from "react-router-dom";

/**
 * Advanced Navbar (Bootstrap 5)
 * - Brand at left
 * - Primary nav links (Home, Events, Reports)
 * - Search box (optional)
 * - Auth buttons (Login / Register)
 * - Profile dropdown (Forgot Password + Logout)
 * - Mobile hamburger collapse
 *
 * Requires:
 *   import 'bootstrap/dist/css/bootstrap.min.css';
 *   import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 * in src/main.jsx (you already did this ✅)
 */
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          🎟 EventSys
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Left: main links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-semibold" : "")
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-semibold" : "")
                }
              >
                Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-semibold" : "")
                }
              >
                Reports
              </NavLink>
            </li>
          </ul>

          {/* Center: (optional) search */}
          <form className="d-flex me-lg-3 mb-2 mb-lg-0" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              type="search"
              placeholder="Search events..."
              aria-label="Search"
            />
          </form>

          {/* Right: auth + profile */}
          <div className="d-flex align-items-center gap-2">
            <Link to="/login" className="btn btn-light btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-warning btn-sm">
              Register
            </Link>

            {/* Profile dropdown (works after auth; placeholder now) */}
            <div className="dropdown">
              <button
                className="btn btn-outline-light btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                👤 Profile
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/forgot-password">
                    Forgot Password
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  {/* Replace with real logout later */}
                  <button className="dropdown-item" type="button">Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

