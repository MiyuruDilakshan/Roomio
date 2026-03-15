import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
const logoSrc = "/Logo 1.png";

function Navbar() {
  const location = useLocation();
  const lastScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;
      const isScrollingDown = current > lastScrollY.current;

      setIsHidden(isScrollingDown && current > 80);
      setIsScrolled(current > 8);
      lastScrollY.current = current;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${isHidden ? " navbar--hidden" : ""}${isScrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo Section */}
        <Link to="/" className="logo-link">
          <div className="logo">
            <div className="logo-icon-box">
              <img
                src={logoSrc}
                alt="Roomio Logo"
                className="logo-icon"
              />
            </div>
            <span className="logo-text">Roomio</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive("/")}`}>Home</Link>
          <Link to="/how-it-works" className={`nav-link ${isActive("/how-it-works")}`}>How It Works</Link>
          <Link to="/about" className={`nav-link ${isActive("/about")}`}>About</Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>Contact</Link>
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