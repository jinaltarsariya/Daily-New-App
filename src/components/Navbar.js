import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ mode, handleMode }) {
  let location = useLocation();

  useEffect(() => { }, [location]);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode}`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.09) 2px 5px 15px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/general">
            <img src="https://debtrescue.co.za/blog/wp-content/uploads/2016/09/dailynews.png" alt="daily news app" style={{ height: "50px" }} />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "18px" }}>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/business" ? "active" : ""
                    }`}
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""
                    }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/general" ? "active" : ""
                    }`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/health" ? "active" : ""
                    }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/science" ? "active" : ""
                    }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/sports" ? "active" : ""
                    }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/technology" ? "active" : ""
                    }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch" style={{ fontSize: "18px" }} >
              <input
                className="form-check-input"
                type="checkbox"
                id="checkBox"
                onClick={() => handleMode()}
              />
              <label
                className={`form-check-label text-${mode === "light" ? "dark" : "light"
                  }`}
                htmlFor="checkBox"
              >
                {mode === "light" ? "Dark" : "Light"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
