import React from "react";
import "../styles/Footer.css";
import logoIcon from "../assets/Icon.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-brand">

          <div className="footer-logo">
            <div className="logo-icon-box">
              <img src={logoIcon} alt="Roomio Logo"/>
            </div>

            <span className="logo-text">Roomio</span>
          </div>

          <p className="footer-description">
            The world's most intuitive room visualization tool for homeowners and
            professionals alike. Design your future, one room at a time.
          </p>

          {/* Social icons */}
          <div className="footer-social">

            <span>🌐</span>
            <span>💬</span>
            <span>@</span>

          </div>

        </div>


        {/* LINKS */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>Product</h4>
            <a href="#">Editor</a>
            <a href="#">Library</a>
            <a href="#">Mobile App</a>
            <a href="#">Release Notes</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>

        </div>

      </div>


      {/* Divider */}
      <div className="footer-divider"></div>


      {/* Bottom row */}
      <div className="footer-bottom">

        <p>© 2026 Roomio Inc. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Cookies</a>
          <a href="#">System Status</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;