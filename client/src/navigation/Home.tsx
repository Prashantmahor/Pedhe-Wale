import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 Router link
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.webp";
import { BiSolidOffer } from "react-icons/bi";

export default function Home() {
  const categories = [
    {
      id: 1,
      name: "Pedhe",
      link: "/category/pedhe",
      image: "http://localhost:5000/images/products/pedhe.jpeg",
    },
    {
      id: 2,
      name: "Dry Fruit Sweets",
      link: "/category/dry-fruit",
      image: "http://localhost:5000/images/products/dry_fruit_sweet.jpeg",
    },
    {
      id: 3,
      name: "Festival Specials",
      link: "/category/festival",
      image: "http://localhost:5000/images/products/festive_special.jpeg",
    },
    {
      id: 4,
      name: "Gift Packs",
      link: "/category/gift-packs",
      image: "http://localhost:5000/images/products/gift_pack.jpeg",
    },
  ];

  const bestSellers = [
    {
      id: 1,
      name: "Mathura ke Pedha",
      price: "₹412",
      link: "/product/1",
      image: "http://localhost:5000/images/best_seller/mathura_ke_pedhe.jpeg",
    },
    {
      id: 2,
      name: "Motichoor Laddu",
      price: "₹410",
      link: "/product/2",
      image: "http://localhost:5000/images/best_seller/motichoor_laddu.jpeg",
    },
    {
      id: 3,
      name: "Rasgulla",
      price: "₹480",
      link: "/product/3",
      image: "http://localhost:5000/images/best_seller/rasgulla.jpeg",
    },
  ];

  const usps = [
    {
      id: 1,
      title: "100% Pure & Fresh ingredients",
      subTitle: "No compromise with health",
      link: "/about#ingredients",
    },
    {
      id: 2,
      title: "Traditional Recipes",
      subTitle: "Old is gold",
      link: "/about#recipes",
    },
    {
      id: 3,
      title: "Secure Packaging",
      subTitle: "Lesser damage",
      link: "/about#packaging",
    },
  ];

  const heroSlides = [
    {
      heading: "Traditional Taste, Modern Delivery",
      image: hero1,
      link: "/order",
    },
    {
      heading: "Mithaas jo dil jeet le",
      image: hero2,
      link: "/menu",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 mb-4">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center relative h-82 mb-4"
        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white">
          <div className="mt-4">
            <Link
              to={heroSlides[currentSlide].link}
              className="text-decoration-none text-reset"
            >
              <h1
                className="text-4xl md:text-5xl font-semibold mb-6 mt-5 transition-opacity duration-1000 ease-in-out cursor-pointer"
                key={heroSlides[currentSlide].heading}
              >
                {heroSlides[currentSlide].heading}
              </h1>
            </Link>
            <p className="mb-8 text-lg leading-relaxed">
              Mathura ke asli pedhe — ghar jaisa taste, taiyar delivery.
            </p>
            <div className="flex gap-3">
              <Link to="/order" className="text-decoration-none text-reset">
                <button className="px-4 py-2 border rounded-md bg-white text-gray-900">
                  Order Now
                </button>
              </Link>
              <Link to="/menu" className="text-decoration-none text-reset">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-8xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={c.link}
              className="text-decoration-none text-reset"
            >
              <div className="bg-white border rounded-lg p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-lg">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-48 rounded-md bg-gray-200 mb-4 flex items-center justify-center object-cover"
                />
                <div className="text-sm font-medium">{c.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Best Sellers */}
      <section id="products" className="bg-white">
        <div className="max-w-8xl mx-auto px-4 py-10">
          <h2 className="text-xl font-semibold mb-4 mt-4">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bestSellers.map((p) => (
              <Link
                key={p.id}
                to={p.link}
                className="text-decoration-none text-reset"
              >
                <div className="border rounded-lg p-4 cursor-pointer hover:shadow-lg">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 rounded-md bg-gray-200 mb-4 object-cover"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-gray-600">{p.price}</div>
                    </div>
                    <button
                      className="px-3 py-2 border rounded text-sm 
                bg-gray-800 text-white hover:bg-gray-700"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / USPs */}
      <section className="max-w-8xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold mb-4 mt-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usps.map((u) => (
            <Link
              key={u.id}
              to={u.link}
              className="text-decoration-none text-reset"
            >
              <div className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer hover:shadow-lg">
                <img
                  src="https://media.assettype.com/freepressjournal/2023-09/ddd44940-3f42-413c-93fc-31794912990b/Veg_Logo.jpeg"
                  className="w-12 h-12"
                  alt="quality assurance"
                />
                <div>
                  <div className="font-medium">{u.title}</div>
                  <div className="text-sm text-gray-600">{u.subTitle}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="max-w-8xl mx-auto px-4 py-10">
        <h3 className="text-lg font-semibold mb-4 mt-4">Special Offers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((offer, i) => (
            <Link
              key={i}
              to={`/offer/${offer}`}
              className="no-underline text-inherit"
            >
              <div className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer hover:shadow-lg">
                <BiSolidOffer className="offer" />
                <div>
                  <div className="font-medium">Ganesh Chaturthi Special</div>
                  <div className="text-sm text-gray-600">Modak Collection</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
