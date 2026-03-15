import { useState } from "react";
import "../../styles/customer/MyDesigns.css";
import logoImage from "../../assets/Logo.png";
import modernLivingImg from "../../assets/MyDesigns/modern-living.png";
import scandiBedroomImg from "../../assets/MyDesigns/scandi-bedroom.png";
import minimalistKitchenImg from "../../assets/MyDesigns/minimalist-kitchen.png";
import bohoPatiImg from "../../assets/MyDesigns/boho-patio.png";
import luxuryPenthouseImg from "../../assets/MyDesigns/luxury-penthouse.png";

const designsData = [
  {
    id: 1,
    title: "Modern Living Room",
    edited: "Edited 2 hours ago",
    category: "Living Room",
    badge: "DRAFT",
    badgeClass: "badge-draft",
    owner: true,
    avatar: "https://i.pravatar.cc/24?img=12",
    img: modernLivingImg,
  },
  {
    id: 2,
    title: "Scandi Master Bedroom",
    edited: "Edited 1 day ago",
    category: "Bedroom",
    badge: null,
    owner: true,
    avatar: null,
    img: scandiBedroomImg,
  },
  {
    id: 3,
    title: "Minimalist Kitchen",
    edited: "Edited 3 days ago",
    category: "Kitchen",
    badge: "FINALIZED",
    badgeClass: "badge-finalized",
    owner: true,
    avatar: null,
    img: minimalistKitchenImg,
  },
  {
    id: 4,
    title: "Boho Summer Patio",
    edited: "Edited 2 weeks ago",
    category: "Outdoor",
    badge: null,
    owner: true,
    avatar: null,
    img: bohoPatiImg,
  },
  {
    id: 5,
    title: "Luxury Penthouse Suite",
    edited: "Edited 1 month ago",
    category: "Bedroom",
    badge: null,
    owner: true,
    avatar: null,
    img: luxuryPenthouseImg,
  },
];

const tabs = ["All Designs", "Recent", "Shared with me", "Folders"];
const tabIcons = {
  "All Designs": "⊞",
  "Recent": "🕐",
  "Shared with me": "⇄",
  "Folders": "📁",
};

export default function MyDesigns({ onNavigate }) {
  const [activeNav, setActiveNav] = useState("My Designs");
  const [activeTab, setActiveTab] = useState("All Designs");

  const navItems = [
    { label: "Dashboard", icon: "⊞" },
    { label: "My Designs", icon: "✏️" },
    { label: "Library", icon: "🪑" },
    { label: "Inspiration", icon: "💡" },
  ];

  return (
    <div className="md-wrapper">
      <div className="md-frame">

        {/* Top Navbar */}
        <nav className="md-topnav">
          <div className="md-topnav-left">
            <div className="md-logo">
              <img src={logoImage} alt="Roomio logo" className="md-logo-icon" />
              <span className="md-logo-text">Roomio</span>
            </div>
            <div className="md-search-bar">
              <span className="md-search-icon">🔍</span>
              <input type="text" placeholder="Search projects..." />
            </div>
          </div>
          <div className="md-topnav-right">
            <a href="#" className="md-nav-link" onClick={(e) => { e.preventDefault(); onNavigate("dashboard"); }}>Dashboard</a>
            <a href="#" className="md-nav-link active">My Designs</a>
            <a href="#" className="md-nav-link" onClick={(e) => { e.preventDefault(); onNavigate("Library"); }}>Library</a>
            <div className="md-icon-btn">🔔</div>
            <div className="md-icon-btn">⚙️</div>
            <div className="md-avatar">
              <img src="https://i.pravatar.cc/36?img=12" alt="avatar" />
            </div>
          </div>
        </nav>

        <div className="md-layout">

          {/* Sidebar */}
          <aside className="md-sidebar">
            <div className="md-sidebar-label">MAIN MENU</div>
            <ul className="md-sidebar-nav">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`md-sidebar-item ${activeNav === item.label ? "md-sidebar-item--active" : ""}`}
                  onClick={() => {
                    if (item.label === "Dashboard") { onNavigate("dashboard"); return; }
                    if (item.label === "Library") { onNavigate("Library"); return; }
                    if (item.label === "Inspiration") { onNavigate("Inspiration"); return; }
                    setActiveNav(item.label);
                  }}
                >
                  <span className="md-sidebar-icon">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="md-sidebar-label" style={{ marginTop: "24px" }}>ACCOUNT</div>
            <ul className="md-sidebar-nav">
              <li className="md-sidebar-item" onClick={() => onNavigate("Settings")}>
                <span className="md-sidebar-icon">⚙️</span> Settings
              </li>
              <li className="md-sidebar-item">
                <span className="md-sidebar-icon">❓</span> Support
              </li>
            </ul>

            <button className="md-logout-btn">Log Out</button>
          </aside>

          {/* Main Content */}
          <main className="md-content">

            {/* Page Header */}
            <div className="md-page-header">
              <div>
                <h1 className="md-page-title">My Saved Designs</h1>
                <p className="md-page-sub">Manage, edit and share your interior design concepts.</p>
              </div>
              <button className="md-create-btn">+ Create New Design</button>
            </div>

            {/* Tabs */}
            <div className="md-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`md-tab ${activeTab === tab ? "md-tab--active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="md-tab-icon">{tabIcons[tab]}</span>
                  {tab}
                  {tab === "All Designs" && <span className="md-tab-count">12</span>}
                </button>
              ))}
            </div>

            {/* Designs Grid */}
            <div className="md-grid">
              {designsData.map((design) => (
                <div className="md-card" key={design.id}>
                  <div className="md-card-thumb">
                    <img src={design.img} alt={design.title} />
                    {design.badge && (
                      <span className={`md-badge ${design.badgeClass}`}>{design.badge}</span>
                    )}
                    <button className="md-card-menu">⋮</button>
                  </div>
                  <div className="md-card-info">
                    <div className="md-card-title">{design.title}</div>
                    <div className="md-card-meta">
                      {design.edited} • <span className="md-card-cat">{design.category}</span>
                    </div>
                    <div className="md-card-owner">
                      {design.avatar
                        ? <img src={design.avatar} alt="owner" className="md-owner-avatar" />
                        : null}
                      {design.owner && <span className="md-owner-label">Owner</span>}
                    </div>
                  </div>
                </div>
              ))}

              {/* Create New Project Card */}
              <div className="md-card md-card--new">
                <div className="md-card-new-inner">
                  <div className="md-new-icon">+</div>
                  <div className="md-new-label">Create New Project</div>
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="md-load-more-bar">
              <button className="md-load-more-btn">Load More Designs ∨</button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}