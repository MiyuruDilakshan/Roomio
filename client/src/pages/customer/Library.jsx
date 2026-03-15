import { useState } from "react";
import "../../styles/customer/Library.css";
import logoImage from "../../assets/Logo.png";
import nordicSofaImg from "../../assets/Library/nordic-sofa.png";
import scandiTableImg from "../../assets/Library/scandi-table.png";
import industrialChairImg from "../../assets/Library/industrial-chair.png";
import minimalistBedImg from "../../assets/Library/minimalist-bed.png";
import globoLightImg from "../../assets/Library/globo-light.png";
import modularBookshelfImg from "../../assets/Library/modular-bookshelf.png";

const products = [
  {
    id: 1,
    title: "Nordic Velvet Sofa",
    price: 1299,
    dimensions: "220W x 95D x 85H cm",
    rating: 4,
    reviews: 48,
    badge: "NEW",
    saved: false,
    img: nordicSofaImg,
  },
  {
    id: 2,
    title: "Scandi Oak Table",
    price: 850,
    dimensions: "180W x 90D x 75H cm",
    rating: 5,
    reviews: 124,
    badge: null,
    saved: true,
    img: scandiTableImg,
  },
  {
    id: 3,
    title: "Industrial Armchair",
    price: 420,
    dimensions: "75W x 80D x 90H cm",
    rating: 4,
    reviews: 29,
    badge: null,
    saved: false,
    img: industrialChairImg,
  },
  {
    id: 4,
    title: "Minimalist Bed Frame",
    price: 1850,
    dimensions: "200W x 215D x 110H cm",
    rating: 4,
    reviews: 15,
    badge: null,
    saved: false,
    img: minimalistBedImg,
  },
  {
    id: 5,
    title: "Globo Pendant Light",
    price: 210,
    dimensions: "40W x 40D x 60H cm",
    rating: 3,
    reviews: 72,
    badge: null,
    saved: false,
    img: globoLightImg,
  },
  {
    id: 6,
    title: "Modular Bookshelf",
    price: 680,
    dimensions: "120W x 35D x 180H cm",
    rating: 5,
    reviews: 56,
    badge: null,
    saved: false,
    img: modularBookshelfImg,
  },
];

const categories = ["All Items", "Sofas", "Tables", "Chairs", "Beds", "Storage", "Lighting", "Saved Items"];
const colors = ["#1a1a2e", "#ffffff", "#b45309", "#94a3b8", "#2563eb"];
const materials = ["Solid Wood", "Premium Velvet", "Metal", "Leather"];
const styles = ["Modern", "Scandinavian", "Industrial", "Minimalist"];

function StarRating({ rating }) {
  return (
    <div className="lib-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "lib-star lib-star--filled" : "lib-star"}>★</span>
      ))}
    </div>
  );
}

export default function Library({ onNavigate }) {
  const [activeNav, setActiveNav] = useState("Library");
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [savedItems, setSavedItems] = useState({ 2: true });
  const [selectedColors, setSelectedColors] = useState([4]);
  const [selectedMaterials, setSelectedMaterials] = useState([1]);
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Most Popular");

  const navItems = [
    { label: "Dashboard", icon: "⊞" },
    { label: "My Designs", icon: "✏️" },
    { label: "Library", icon: "🪑" },
    { label: "Inspiration", icon: "💡" },
  ];

  const toggleSave = (id) => {
    setSavedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleColor = (i) => {
    setSelectedColors((prev) =>
      prev.includes(i) ? prev.filter((c) => c !== i) : [...prev, i]
    );
  };

  const toggleMaterial = (i) => {
    setSelectedMaterials((prev) =>
      prev.includes(i) ? prev.filter((m) => m !== i) : [...prev, i]
    );
  };

  const handleNavClick = (label) => {
    setActiveNav(label);
    if (onNavigate) {
      if (label === "Dashboard") onNavigate("dashboard");
      if (label === "My Designs") onNavigate("MyDesigns");
      if (label === "Inspiration") onNavigate("Inspiration");
    }
  };

  return (
    <div className="lib-wrapper">
      <div className="lib-frame">

        {/* Top Navbar */}
        <nav className="lib-topnav">
          <div className="lib-topnav-left">
            <div className="lib-logo">
              <img src={logoImage} alt="Roomio logo" className="lib-logo-icon" />
              <span className="lib-logo-text">Roomio</span>
            </div>
          </div>
          <div className="lib-topnav-right">
            <a href="#" className="lib-nav-link" onClick={() => handleNavClick("Dashboard")}>Dashboard</a>
            <a href="#" className="lib-nav-link" onClick={() => handleNavClick("My Designs")}>My Designs</a>
            <a href="#" className="lib-nav-link active">Library</a>
            <div className="lib-icon-btn">🔔</div>
            <div className="lib-icon-btn">⚙️</div>
            <div className="lib-avatar">
              <img src="https://i.pravatar.cc/36?img=12" alt="avatar" />
            </div>
          </div>
        </nav>

        <div className="lib-layout">

          {/* Sidebar */}
          <aside className="lib-sidebar">
            <div className="lib-sidebar-label">MAIN MENU</div>
            <ul className="lib-sidebar-nav">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`lib-sidebar-item ${activeNav === item.label ? "lib-sidebar-item--active" : ""}`}
                  onClick={() => handleNavClick(item.label)}
                >
                  <span className="lib-sidebar-icon">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="lib-sidebar-label" style={{ marginTop: "24px" }}>ACCOUNT</div>
            <ul className="lib-sidebar-nav">
              <li className="lib-sidebar-item" onClick={() => onNavigate("Settings")}><span className="lib-sidebar-icon">⚙️</span> Settings</li>
              <li className="lib-sidebar-item"><span className="lib-sidebar-icon">❓</span> Support</li>
            </ul>

            <button className="lib-logout-btn">Log Out</button>
          </aside>

          {/* Main Content */}
          <main className="lib-content">

            {/* Search + Category bar */}
            <div className="lib-top-bar">
              <div className="lib-search-bar">
                <span className="lib-search-icon">🔍</span>
                <input type="text" placeholder="Search furniture, styles, or collections..." />
              </div>
            </div>

            <div className="lib-category-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`lib-cat-btn ${activeCategory === cat ? "lib-cat-btn--active" : ""} ${cat === "Saved Items" ? "lib-cat-btn--saved" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === "Saved Items" && <span className="lib-heart-icon">♥</span>}
                  {cat}
                </button>
              ))}

              <div className="lib-sort">
                <span className="lib-sort-label">SORT BY</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="lib-sort-select">
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="lib-body">

              {/* Filter Panel */}
              <aside className="lib-filters">

                <div className="lib-filter-section">
                  <div className="lib-filter-title">PRICE RANGE</div>
                  <input type="range" min="0" max="5000" defaultValue="5000" className="lib-range" />
                  <div className="lib-range-labels">
                    <span>$0</span>
                    <span>$5,000+</span>
                  </div>
                </div>

                <div className="lib-filter-section">
                  <div className="lib-filter-title">COLOR</div>
                  <div className="lib-colors">
                    {colors.map((color, i) => (
                      <button
                        key={i}
                        className={`lib-color-swatch ${selectedColors.includes(i) ? "lib-color-swatch--active" : ""}`}
                        style={{ background: color, border: color === "#ffffff" ? "1px solid #e5e7eb" : "none" }}
                        onClick={() => toggleColor(i)}
                      />
                    ))}
                  </div>
                </div>

                <div className="lib-filter-section">
                  <div className="lib-filter-title">MATERIAL</div>
                  {materials.map((mat, i) => (
                    <label key={i} className="lib-checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(i)}
                        onChange={() => toggleMaterial(i)}
                        className="lib-checkbox"
                      />
                      {mat}
                    </label>
                  ))}
                </div>

                <div className="lib-filter-section">
                  <div className="lib-filter-title">STYLE</div>
                  {styles.map((s, i) => (
                    <label key={i} className="lib-radio-label">
                      <input
                        type="radio"
                        name="style"
                        checked={selectedStyle === i}
                        onChange={() => setSelectedStyle(i)}
                        className="lib-radio"
                      />
                      {s}
                    </label>
                  ))}
                </div>

                <button className="lib-clear-btn">Clear All Filters</button>
              </aside>

              {/* Products Grid */}
              <div className="lib-products">
                <div className="lib-grid">
                  {products.map((product) => (
                    <div className="lib-card" key={product.id}>
                      <div className="lib-card-thumb">
                        <img src={product.img} alt={product.title} />
                        {product.badge && <span className="lib-badge">{product.badge}</span>}
                        <button
                          className={`lib-save-btn ${savedItems[product.id] ? "lib-save-btn--saved" : ""}`}
                          onClick={() => toggleSave(product.id)}
                        >
                          {savedItems[product.id] ? "♥" : "♡"}
                        </button>
                      </div>
                      <div className="lib-card-body">
                        <div className="lib-card-header">
                          <span className="lib-card-title">{product.title}</span>
                          <span className="lib-card-price">${product.price.toLocaleString()}</span>
                        </div>
                        <div className="lib-card-dims">{product.dimensions}</div>
                        <div className="lib-card-rating">
                          <StarRating rating={product.rating} />
                          <span className="lib-card-reviews">({product.reviews})</span>
                        </div>
                        <button className="lib-add-btn">⊞ Add to Design</button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="lib-pagination">
                  <span className="lib-pagination-info">Showing 1-12 of 148 products</span>
                  <div className="lib-pagination-controls">
                    <button className="lib-page-btn lib-page-btn--arrow">‹</button>
                    {[1, 2, 3].map((p) => (
                      <button
                        key={p}
                        className={`lib-page-btn ${currentPage === p ? "lib-page-btn--active" : ""}`}
                        onClick={() => setCurrentPage(p)}
                      >
                        {p}
                      </button>
                    ))}
                    <button className="lib-page-btn lib-page-btn--arrow">›</button>
                  </div>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}