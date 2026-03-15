import { useState } from "react";
import LoggedInNavbar from "../../components/LoggedInNavbar";
import CustomerSidebar from "../../components/CustomerSidebar";
import "../../styles/customer/MyDesigns.css";
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

export default function MyDesigns() {


  const [activeTab, setActiveTab] = useState("All Designs");

  return (
    <>
      <LoggedInNavbar userRole="customer" />
      <div className="md-wrapper">
      <CustomerSidebar />
      <div className="md-frame">
        <div className="md-layout">
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
    </>
  );
}


