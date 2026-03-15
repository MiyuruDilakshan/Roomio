
import LoggedInNavbar from "../../components/LoggedInNavbar";
import CustomerSidebar from "../../components/CustomerSidebar";
import "../../styles/customer/Dashboard.css";
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

export default function Dashboard() {

  return (
    <>
      <LoggedInNavbar userRole="customer" />
      <div className="app-wrapper">
        <CustomerSidebar />
        <div className="app-frame">
        <div className="main-layout">

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
              <button className="view-all">View All</button>
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
    </>
  );
}


