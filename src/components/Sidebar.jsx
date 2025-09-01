



import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${
        collapsed ? "collapsed-sidebar" : ""
      }`}
      style={{ width: collapsed ? "80px" : "250px", minHeight: "100vh", transition: "width 0.3s" }}
    >
      {/* Toggle Button */}
      <button
        className="btn btn-sm btn-outline-light mb-3"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "➡️" : "⬅️"}
      </button>

      {/* Brand */}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-5">{collapsed ? "📊" : "📊 Dashboard"}</span>
      </a>
      <hr />

      {/* Navigation */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link text-white d-flex align-items-center " +
              (isActive ? "active bg-primary" : "")
            }
          >
            🏠 {!collapsed && "Home"}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              "nav-link text-white d-flex align-items-center " +
              (isActive ? "active bg-primary" : "")
            }
          >
            🎉 {!collapsed && "Events"}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              "nav-link text-white d-flex align-items-center " +
              (isActive ? "active bg-primary" : "")
            }
          >
            📑 {!collapsed && "Reports"}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              "nav-link text-white d-flex align-items-center " +
              (isActive ? "active bg-primary" : "")
            }
          >
            ⚙️ {!collapsed && "Settings"}
          </NavLink>
        </li>
      </ul>

      <hr />

      {/* User Dropdown */}
      {!collapsed && (
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://via.placeholder.com/32"
              alt="user"
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Farhan</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
