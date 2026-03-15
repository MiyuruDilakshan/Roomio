import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logoIcon from "../assets/Icon.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo Section */}
        <div className="logo">
          <div className="logo-icon-box">
            <img
              src={logoIcon}
              alt="Roomio Logo"
              className="logo-icon"
            />
          </div>
          <span className="logo-text">Roomio</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="nav-actions">
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup">
            <button className="get-started">Get Started</button>
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;