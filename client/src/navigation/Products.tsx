
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "Mix Peda Boxes",
    "Special Namkeen Mixtures",
    "Festive Gift Packs",
    "Family Combo Packs",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/products/products.json")
      .then((res) => res.json())
      .then((data) => {
        const normalizedData = data.map((product: Product) => ({
          ...product,
          image: product.image.startsWith("http")
            ? product.image
            : `http://localhost:5000${product.image}`,
        }));
        setProducts(normalizedData);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const buyNow = (product: Product) => {
    navigate("/checkout", { state: { cart: [{ ...product, qty: 1 }] } });
  };

  // Filter products globally by search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Get products for a section
  const getProductsByCategory = (cat: string) =>
    filteredProducts
      .filter((p) => p.category === cat)
      .slice(0, 3); // 3 products per section

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Our Products</h2>
        <button className="btn btn-primary">🛒 Cart ({cart.length})</button>
      </div>

      {/* Search & Category Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            aria-label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All Categories">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Sections */}
      {categories.map((cat) => {
        const catProducts = getProductsByCategory(cat);
        if (catProducts.length === 0) return null;

        return (
          <div key={cat} className="mb-5">
            <h3 className="mb-3">{cat}</h3>
            <div className="row">
              {catProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card shadow-sm h-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder.jpg";
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="text-muted">{product.description}</p>
                      <h6 className="mb-3">₹{product.price}</h6>
                      <div className="d-flex gap-2 mt-auto">
                        <button
                          className="btn btn-success flex-grow-1"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="btn btn-warning flex-grow-1"
                          onClick={() => buyNow(product)}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <p className="text-center">No products found</p>
      )}
    </div>
  );
};

export default Products;
