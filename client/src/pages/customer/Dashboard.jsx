import { useState } from "react";
import "../../styles/customer/Dashboard.css";
import logoImage from "../../assets/Logo.png";
import modernLivingImage from "../../assets/Dashboard/modern-living.png";
import scandiBedroomImage from "../../assets/Dashboard/scandi-bedroom.png";
import homeOfficeImage from "../../assets/Dashboard/home-office.png";
import minimalKitchenImage from "../../assets/Dashboard/minimal-kitchen.png";

const roomImages = {
  "Modern Living Room": modernLivingImage,
  "Scandi Bedroom": scandiBedroomImage,
  "Home Office Setup": homeOfficeImage,
  "Minimalist Kitchen": minimalKitchenImage,
};

const recentDesigns = [
  { title: "Modern Living Room", updated: "Updated 2 hours ago", badge: "4K RENDER", badgeClass: "badge-render" },
  { title: "Scandi Bedroom", updated: "Updated yesterday", badge: "DRAFT", badgeClass: "badge-draft" },
  { title: "Home Office Setup", updated: "Updated 3 days ago", badge: "4K RENDER", badgeClass: "badge-render" },
  { title: "Minimalist Kitchen", updated: "Updated 1 week ago", badge: "NEW", badgeClass: "badge-new" },
];

export default function Dashboard({ onNavigate }) {
  const [active, setActive] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: "⊞" },
    { label: "My Designs", icon: "✏️" },
    { label: "Library", icon: "🪑" },
    { label: "Inspiration", icon: "💡" },
  ];

  return (
    <div className="app-wrapper">
      <div className="app-frame">
        {/* Top Navbar */}
        <nav className="topnav">
          <div className="topnav-left">
            <div className="logo">
              <img src={logoImage} alt="Roomio logo" className="logo-icon" />
              <span className="logo-text">Roomio</span>
            </div>
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search projects..." />
            </div>
          </div>
          <div className="topnav-right">
            <a href="#" className={active === "Dashboard" ? "nav-link active" : "nav-link"} onClick={() => setActive("Dashboard")}>Dashboard</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate("MyDesigns"); }}>My Designs</a>
            <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onNavigate("Library"); }}>Library</a>
            <div className="icon-btn">🔔</div>
            <div className="icon-btn">⚙️</div>
            <div className="avatar">
              <img src="https://i.pravatar.cc/36?img=12" alt="avatar" />
            </div>
          </div>
        </nav>

        <div className="main-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-section-label">MAIN MENU</div>
            <ul className="sidebar-nav">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`sidebar-item ${active === item.label ? "sidebar-item--active" : ""}`}
                  onClick={() => {
                    if (item.label === "My Designs") { onNavigate("MyDesigns"); return; }
                    if (item.label === "Library") { onNavigate("Library"); return; }
                    if (item.label === "Inspiration") { onNavigate("Inspiration"); return; }
                    setActive(item.label);
                  }}
                >
                  <span className="sidebar-item-icon">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="sidebar-section-label" style={{ marginTop: "24px" }}>ACCOUNT</div>
            <ul className="sidebar-nav">
              <li className="sidebar-item" onClick={() => onNavigate("Settings")}>
                <span className="sidebar-item-icon">⚙️</span> Settings
              </li>
              <li className="sidebar-item">
                <span className="sidebar-item-icon">❓</span> Support
              </li>
            </ul>

            <button className="logout-btn">Log Out</button>
          </aside>

          {/* Main Content */}
          <main className="content">
            <div className="content-header">
              <div>
                <h1 className="greeting">Hello, Alex!</h1>
                <p className="subgreeting">Welcome back to your workspace. What are we designing today?</p>
              </div>
              <button className="create-btn">＋ Create New Design</button>
            </div>

            {/* Stats */}
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-icon stat-icon--blue">🖥️</div>
                <div>
                  <div className="stat-label">Total Designs</div>
                  <div className="stat-value">24</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon stat-icon--green">📋</div>
                <div>
                  <div className="stat-label">Active Projects</div>
                  <div className="stat-value">3</div>
                </div>
              </div>
            </div>

            {/* Recent Designs */}
            <div className="section-header">
              <h2 className="section-title">Recent Designs</h2>
              <a href="#" className="view-all">View All</a>
            </div>

            <div className="designs-grid">
              {recentDesigns.map((design) => (
                <div className="design-card" key={design.title}>
                  <div className="design-thumb">
                    <img src={roomImages[design.title]} alt={design.title} />
                    <span className={`design-badge ${design.badgeClass}`}>{design.badge}</span>
                  </div>
                  <div className="design-info">
                    <div className="design-title">{design.title}</div>
                    <div className="design-updated">🕐 {design.updated}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="cta-banner">
              <div className="cta-icon">⊞</div>
              <h3 className="cta-title">Ready to design a new space?</h3>
              <p className="cta-sub">Upload a photo of your room or start with a blank template<br />to begin your visualization journey.</p>
              <button className="cta-btn">Start Blank Design</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}