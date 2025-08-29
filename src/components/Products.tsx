import React, { useEffect, useMemo, useState } from "react";
import { CATEGORY_FILES } from "../constants/categoryFiles";
import type { Product } from "../types/Product";

interface ProductsProps {
  selectedTab: string;
}

const fallbackImg = "/images/placeholder.jpg";

const Products: React.FC<ProductsProps> = ({ selectedTab }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // filters
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<"all" | "low" | "medium" | "high">("all");

  // JSON load on tab change
  useEffect(() => {
    const file = CATEGORY_FILES[selectedTab];
    if (!file) return;
    setLoading(true);
    setError("");
    fetch(`/pedhe_json/${file}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data?.products) ? data.products : []);
      })
      .catch((err) => setError(`Failed to load: ${String(err)}`))
      .finally(() => setLoading(false));
  }, [selectedTab]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      let matchesPrice = true;
      if (priceFilter === "low") matchesPrice = p.price < 150;
      else if (priceFilter === "medium") matchesPrice = p.price >= 150 && p.price <= 300;
      else if (priceFilter === "high") matchesPrice = p.price > 300;
      return matchesSearch && matchesPrice;
    });
  }, [products, search, priceFilter]);

  if (loading) {
    return (
      <div className="p-4 d-flex align-items-center gap-2">
        <div className="spinner-border" role="status" />
        <span>Loading {selectedTab}…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4">
        {error} — सुनिश्चित करें कि <code>public/pedhe_json/{CATEGORY_FILES[selectedTab]}</code> मौजूद है।
      </div>
    );
  }

  return (
    <div className="p-4 w-100 ml-64 mt-16  overflow-y-auto">
      <h1 className="mb-4">{selectedTab} Products</h1>
      {/* Filters */}
      <div className="d-flex flex-wrap gap-2 mb-3">
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

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-muted">No pedas found for current filters.</div>
      ) : (
        <div className="row">
          {filtered.map((p) => (
            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={p.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={p.image || fallbackImg}
                  onError={(e) => ((e.currentTarget.src = fallbackImg))}
                  alt={p.name}
                  className="card-img-top"
                  style={{ height: 180, objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{p.name}</h5>
                  <div className="small text-secondary mb-2">{p.category}</div>
                  <p className="card-text">{p.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-warning">₹{p.price}</span>
                    <span className={`badge ${p.availability ? "bg-success" : "bg-secondary"}`}>
                      {p.availability ? "In stock" : "Out of stock"}
                    </span>
                  </div>
                </div>
                <div className="card-footer bg-white border-0">
                  <button className="btn btn-warning w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
