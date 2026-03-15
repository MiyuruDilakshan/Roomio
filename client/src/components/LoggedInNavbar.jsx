import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoggedInNavbar.css";
import logoIcon from "../assets/Icon.png";
import { LogOut, User } from "lucide-react";

function LoggedInNavbar({ userRole = "customer" }) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  
  const isDesigner = userRole === "designer";

  return (
    <header className="logged-navbar">
      <div className="logged-navbar-container">
        {/* Logo Section */}
        <Link to={isDesigner ? "/designer/dashboard" : "/customer/dashboard"} className="logo-link">
          <div className="logo">
            <div className="logo-icon-box">
              <img src={logoIcon} alt="Roomio Logo" className="logo-icon" />
            </div>
            <span className="logo-text">Roomio</span>
          </div>
        </Link>
        
        {/* Right Side - User & Actions */}
        <div className="logged-nav-actions">
          <Link to={isDesigner ? "/designer/settings" : "/customer/settings"} className="profile-link">
            <User size={20} />
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default LoggedInNavbar;
