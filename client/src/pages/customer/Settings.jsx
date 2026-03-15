import { useState } from "react";
import "../../styles/customer/Settings.css";
import logoImage from "../../assets/Logo.png";

export default function Settings({ onNavigate }) {
  const [activeNav, setActiveNav] = useState("Settings");
  const [fullName, setFullName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex.j@roomio.com");
  const [role, setRole] = useState("Interior Designer");
  const [notifications, setNotifications] = useState({
    projectUpdates: true,
    newAssetReleases: true,
    marketplaceSales: false,
  });

  const navItems = [
    { label: "Dashboard", icon: "⊞" },
    { label: "My Designs", icon: "✏️" },
    { label: "Library", icon: "🪑" },
    { label: "Inspiration", icon: "💡" },
  ];

  const handleNavClick = (label) => {
    setActiveNav(label);
    if (onNavigate) {
      if (label === "Dashboard") onNavigate("dashboard");
      if (label === "My Designs") onNavigate("MyDesigns");
      if (label === "Library") onNavigate("Library");
      if (label === "Inspiration") onNavigate("Inspiration");
    }
  };

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="set-wrapper">
      <div className="set-frame">

        {/* Top Navbar */}
        <nav className="set-topnav">
          <div className="set-topnav-left">
            <div className="set-logo">
              <img src={logoImage} alt="Roomio logo" className="set-logo-icon" />
              <span className="set-logo-text">Roomio</span>
            </div>
            <div className="set-search-bar">
              <span className="set-search-icon">🔍</span>
              <input type="text" placeholder="Search projects..." />
            </div>
          </div>
          <div className="set-topnav-right">
            <a href="#" className="set-nav-link" onClick={() => handleNavClick("Dashboard")}>Dashboard</a>
            <a href="#" className="set-nav-link" onClick={() => handleNavClick("My Designs")}>My Designs</a>
            <a href="#" className="set-nav-link" onClick={() => handleNavClick("Library")}>Library</a>
            <div className="set-icon-btn">🔔</div>
            <div className="set-icon-btn set-icon-btn--active">⚙️</div>
            <div className="set-avatar">
              <img src="https://i.pravatar.cc/36?img=12" alt="avatar" />
            </div>
          </div>
        </nav>

        <div className="set-layout">

          {/* Sidebar */}
          <aside className="set-sidebar">
            <div className="set-sidebar-label">MAIN MENU</div>
            <ul className="set-sidebar-nav">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`set-sidebar-item ${activeNav === item.label ? "set-sidebar-item--active" : ""}`}
                  onClick={() => handleNavClick(item.label)}
                >
                  <span className="set-sidebar-icon">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="set-sidebar-label" style={{ marginTop: "24px" }}>ACCOUNT</div>
            <ul className="set-sidebar-nav">
              <li
                className={`set-sidebar-item ${activeNav === "Settings" ? "set-sidebar-item--active" : ""}`}
                onClick={() => setActiveNav("Settings")}
              >
                <span className="set-sidebar-icon">⚙️</span> Settings
              </li>
              <li className="set-sidebar-item">
                <span className="set-sidebar-icon">❓</span> Support
              </li>
            </ul>

            <button className="set-logout-btn">Log Out</button>
          </aside>

          {/* Main Content */}
          <main className="set-content">

            {/* Page Header */}
            <div className="set-page-header">
              <h1 className="set-page-title">Account Settings</h1>
              <p className="set-page-sub">Manage your profile information and how you interact with the platform.</p>
            </div>

            {/* Profile Card */}
            <div className="set-card set-profile-card">
              <div className="set-profile-left">
                <div className="set-avatar-wrap">
                  <img src="https://i.pravatar.cc/90?img=12" alt="profile" className="set-profile-img" />
                  <button className="set-edit-avatar-btn">✏️</button>
                </div>
                <div className="set-profile-info">
                  <div className="set-profile-name">Alex Johnson</div>
                  <div className="set-profile-role">Senior Interior Designer</div>
                  <div className="set-profile-tags">
                    <span className="set-tag">📍 New York, USA</span>
                    <span className="set-tag set-tag--verified">✔ Verified Pro</span>
                  </div>
                </div>
              </div>
              <button className="set-change-photo-btn">Change Photo</button>
            </div>

            {/* Two-column section */}
            <div className="set-two-col">

              {/* Personal Details */}
              <div className="set-card">
                <div className="set-card-title">
                  <span className="set-card-icon">👤</span> Personal Details
                </div>

                <div className="set-field">
                  <label className="set-label">FULL NAME</label>
                  <input
                    className="set-input"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="set-field">
                  <label className="set-label">EMAIL ADDRESS</label>
                  <input
                    className="set-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="set-field">
                  <label className="set-label">PROFESSIONAL ROLE</label>
                  <div className="set-select-wrap">
                    <select
                      className="set-select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>Interior Designer</option>
                      <option>Architect</option>
                      <option>Home Owner</option>
                      <option>Contractor</option>
                    </select>
                    <span className="set-select-arrow">∨</span>
                  </div>
                </div>
              </div>

              {/* Email Notifications */}
              <div className="set-card">
                <div className="set-card-title">
                  <span className="set-card-icon">🔔</span> Email Notifications
                </div>

                <div className="set-toggle-row">
                  <div className="set-toggle-info">
                    <div className="set-toggle-title">Project Updates</div>
                    <div className="set-toggle-sub">When someone comments on your project</div>
                  </div>
                  <button
                    className={`set-toggle ${notifications.projectUpdates ? "set-toggle--on" : ""}`}
                    onClick={() => toggleNotification("projectUpdates")}
                  >
                    <span className="set-toggle-thumb" />
                  </button>
                </div>

                <div className="set-toggle-row">
                  <div className="set-toggle-info">
                    <div className="set-toggle-title">New Asset Releases</div>
                    <div className="set-toggle-sub">Weekly digest of new 3D library items</div>
                  </div>
                  <button
                    className={`set-toggle ${notifications.newAssetReleases ? "set-toggle--on" : ""}`}
                    onClick={() => toggleNotification("newAssetReleases")}
                  >
                    <span className="set-toggle-thumb" />
                  </button>
                </div>

                <div className="set-toggle-row">
                  <div className="set-toggle-info">
                    <div className="set-toggle-title">Marketplace Sales</div>
                    <div className="set-toggle-sub">Alerts when your assets are purchased</div>
                  </div>
                  <button
                    className={`set-toggle ${notifications.marketplaceSales ? "set-toggle--on" : ""}`}
                    onClick={() => toggleNotification("marketplaceSales")}
                  >
                    <span className="set-toggle-thumb" />
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="set-card">
              <div className="set-card-title">
                <span className="set-card-icon">💳</span> Payment Method
              </div>

              <div className="set-payment-row">
                <div className="set-visa-badge">VISA</div>
                <div className="set-payment-info">
                  <div className="set-payment-title">Visa ending in 4242</div>
                  <div className="set-payment-sub">Expires 12/26 • Primary Method</div>
                </div>
                <div className="set-payment-actions">
                  <button className="set-payment-btn">Edit</button>
                  <button className="set-payment-btn set-payment-btn--blue">Update</button>
                </div>
              </div>

              <div className="set-billing-row">
                <span className="set-billing-text">
                  Your next bill is for <strong>$29.00</strong> on Oct 12, 2023
                </span>
                <a href="#" className="set-view-history">VIEW HISTORY</a>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="set-footer-actions">
              <button className="set-discard-btn">Discard Changes</button>
              <button className="set-save-btn">Save All Settings</button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}