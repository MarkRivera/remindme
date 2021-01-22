import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand col" to="/">
          Remind Me
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse col"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/remove">
                Remove
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
