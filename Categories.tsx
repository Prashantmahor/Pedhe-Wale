import React, { useEffect, useMemo, useState } from "react";
import { CATEGORY_FILES } from "../constants/categoryFiles";
import type { Product } from "../types/Product";
import SideBar from "../components/SideBar";
import { addToCart } from "../utils/cartUtils";
const fallbackImg = "/images/placeholder.jpg";

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Classic Pedas");
  const [Categories, setCategories] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<
    "all" | "low" | "medium" | "high"
  >("all");

  useEffect(() => {
    const file = CATEGORY_FILES[selectedCategory];
    if (!file) return;
    setLoading(true);
    setError("");
    fetch(`http://localhost:5000/api/categories/${file}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setCategories(Array.isArray(data?.Categories) ? data.Categories : []);
      })
      .catch((err) => setError(`Failed to load: ${String(err)}`))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return Categories.filter((p) => {
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      let matchesPrice = true;
      if (priceFilter === "low") matchesPrice = p.price < 150;
      else if (priceFilter === "medium")
        matchesPrice = p.price >= 150 && p.price <= 300;
      else if (priceFilter === "high") matchesPrice = p.price > 300;
      return matchesSearch && matchesPrice;
    });
  }, [Categories, search, priceFilter]);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside className="border-end bg-light " style={{ width: 250 }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1  p-5 overflow-auto ">
        <h1 className="mb-4 ">{selectedCategory} Categories</h1>

        {/* Filters */}
        <div className="d-flex flex-wrap gap-3 mb-4">
          <input
            className="form-control"
            style={{ maxWidth: 360 }}
            placeholder="Search pedas by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="form-select"
            style={{ maxWidth: 220 }}
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value as any)}
          >
            <option value="all">All Prices</option>
            <option value="low">Below ₹150</option>
            <option value="medium">₹150 – ₹300</option>
            <option value="high">Above ₹300</option>
          </select>
        </div>

        {/* Content */}
        {loading ? (
          <div className="p-4 d-flex align-items-center gap-2">
            <div className="spinner-border" role="status" />
            <span>Loading {selectedCategory}…</span>
          </div>
        ) : error ? (
          <div className="alert alert-danger p-3">
            {error} — सुनिश्चित करें कि{" "}
            <code>api/categories/{CATEGORY_FILES[selectedCategory]}</code>
            मौजूद है।
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-muted p-3">
            No pedas found for current filters.
          </div>
        ) : (
          <div className="row g-4">
            {filtered.map((p) => (
              <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={p.image ? `http://localhost:5000${p.image}` : fallbackImg}
                    onError={(e) => (e.currentTarget.src = fallbackImg)}
                    alt={p.name}
                    className="card-img-top"
                    style={{ height: 180, objectFit: "cover" }}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-1">{p.name}</h5>
                    <div className="small text-secondary mb-2">
                      {p.category}
                    </div>
                    <p className="card-text">{p.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="fw-bold text-warning">₹{p.price}</span>
                      <span
                        className={`badge ${
                          p.availability ? "bg-success" : "bg-secondary"
                        }`}
                      >
                        {p.availability ? "In stock" : "Out of stock"}
                      </span>
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0 p-3">
                    <button
                      className="btn btn-warning w-100"
                      onClick={() =>
                        addToCart({
                          id: p.id,
                          name: p.name,
                          price: p.price,
                          image: p.image,
                          qty: 1,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Categories;
