import { useState } from "react";
import LoggedInNavbar from "../../components/LoggedInNavbar";
import CustomerSidebar from "../../components/CustomerSidebar";
import "../../styles/customer/Settings.css";

export default function Settings() {


  const [fullName, setFullName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex.j@roomio.com");
  const [role, setRole] = useState("Interior Designer");
  const [notifications, setNotifications] = useState({
    projectUpdates: true,
    newAssetReleases: true,
    marketplaceSales: false,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <LoggedInNavbar userRole="customer" />
      <div className="set-wrapper">
      <CustomerSidebar />
      <div className="set-frame">

        <div className="set-layout">

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
                <button className="set-view-history">VIEW HISTORY</button>
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
    </>
  );
}




