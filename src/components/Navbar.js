import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ mode, handleMode }) {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close the navbar when the location changes
    setIsOpen(false);
    // Reset body overflow to auto
    document.body.style.overflowX = "auto";
  }, [location]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    // Toggle body overflow to prevent horizontal scrolling on mobile devices
    if (window.innerWidth <= 767) {
      document.body.style.overflowX = isOpen ? "auto" : "hidden";
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/general">
          <img
            src="https://debtrescue.co.za/blog/wp-content/uploads/2016/09/dailynews.png"
            alt="daily news app"
            style={{ height: "50px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/business" ? "active" : ""
                }`}
                aria-current="page"
                to="/business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/entertainment" ? "active" : ""
                }`}
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/general" ? "active" : ""
                }`}
                to="/general"
              >
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/health" ? "active" : ""
                }`}
                to="/health"
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/science" ? "active" : ""
                }`}
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/sports" ? "active" : ""
                }`}
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/technology" ? "active" : ""
                }`}
                to="/technology"
              >
                Technology
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkBox"
              onClick={() => handleMode()}
            />
            <label
              className={`form-check-label text-${
                mode === "light" ? "dark" : "light"
              }`}
              htmlFor="checkBox"
            >
              {mode === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
