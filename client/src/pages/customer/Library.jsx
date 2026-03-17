import { useRef, useEffect, useState } from "react";
import LoggedInNavbar from "../../components/LoggedInNavbar";
import CustomerSidebar from "../../components/CustomerSidebar";
import { furnitureAPI } from "../../services/furnitureAPI";
import "../../styles/customer/Library.css";

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

export default function Library() {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [savedItems, setSavedItems] = useState({});
  const [products, setProducts] = useState([]);
  const hasLoadedRef = useRef(false);

  // Load furniture from database
  useEffect(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    const loadFurniture = async () => {
      try {
        const response = await furnitureAPI.getFurnitureItems(activeCategory, null);
        setProducts(response.items || []);
      } catch (error) {
        console.error("Error loading furniture:", error);
        setProducts([]);
      }
    };

    loadFurniture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [selectedColors, setSelectedColors] = useState([4]);
  const [selectedMaterials, setSelectedMaterials] = useState([1]);
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Most Popular");

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

  return (
    <>
      <LoggedInNavbar userRole="customer" />
      <div className="lib-wrapper">
      <CustomerSidebar />
      <div className="lib-frame">

        <div className="lib-layout">

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
                    <div className="lib-card" key={product._id || product.id}>
                      <div className="lib-card-thumb">
                        <img 
                          src={product.image || product.img || '/images/placeholder.png'} 
                          alt={product.title || product.name}
                          onError={(e) => e.target.src = '/images/placeholder.png'}
                        />
                        {product.badge && <span className="lib-badge">{product.badge}</span>}
                        <button
                          className={`lib-save-btn ${savedItems[product._id || product.id] ? "lib-save-btn--saved" : ""}`}
                          onClick={() => toggleSave(product._id || product.id)}
                        >
                          {savedItems[product._id || product.id] ? "♥" : "♡"}
                        </button>
                      </div>
                      <div className="lib-card-body">
                        <div className="lib-card-header">
                          <span className="lib-card-title">{product.title || product.name}</span>
                          <span className="lib-card-price">${(product.price || 0).toLocaleString()}</span>
                        </div>
                        <div className="lib-card-dims">
                          {typeof product.dimensions === 'object' && product.dimensions?.width
                            ? `${product.dimensions.width} × ${product.dimensions.depth} × ${product.dimensions.height} ${product.dimensions.unit}`
                            : product.dimensions || 'N/A'}
                        </div>
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
    </>
  );
}




