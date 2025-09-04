import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 Router link

export default function Home() {
  const categories = [
    { id: 1, name: "Pedhe", link: "/category/pedhe" },
    { id: 2, name: "Dry Fruit Sweets", link: "/category/dry-fruit" },
    { id: 3, name: "Festival Specials", link: "/category/festival" },
    { id: 4, name: "Gift Packs", link: "/category/gift-packs" },
  ];

  const bestSellers = [
    { id: 1, name: "Mathura ke Pedha", price: "$12", link: "/product/1" },
    { id: 2, name: "Motichoor Laddu", price: "$10", link: "/product/2" },
    { id: 3, name: "Rasgulla", price: "$8", link: "/product/3" },
  ];

  const usps = [
    { id: 1, title: "100% Pure & Fresh ingredients", link: "/about#ingredients" },
    { id: 2, title: "Traditional Recipes", link: "/about#recipes" },
    { id: 3, title: "Secure Packaging", link: "/about#packaging" },
  ];

  const heroSlides = [
    {
      heading: "Traditional Taste, Modern Delivery",
      image: "../src/assets/hero1.png",
      link: "/order",
    },
    {
      heading: "Mithaas jo dil jeet le",
      image: "../src/assets/hero2.webp",
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
        className="bg-cover bg-center relative h-78 mb-4"
        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white">
          <div className="mt-4">
            <Link
              to={heroSlides[currentSlide].link}
              className="no-underline text-inherit"
            >
              <h1
                className="text-4xl md:text-5xl font-semibold mb-6 transition-opacity duration-1000 ease-in-out cursor-pointer"
                key={heroSlides[currentSlide].heading}
              >
                {heroSlides[currentSlide].heading}
              </h1>
            </Link>
            <p className="mb-8 text-lg leading-relaxed">
              Mathura ke asli pedhe — ghar jaisa taste, taiyar delivery.
            </p>
            <div className="flex gap-3">
              <Link to="/order" className="no-underline text-inherit">
                <button className="px-4 py-2 border rounded-md bg-white text-gray-900">
                  Order Now
                </button>
              </Link>
              <Link to="/menu" className="no-underline text-inherit">
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
              className="no-underline text-inherit"
            >
              <div className="bg-white border rounded-lg p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-lg">
                <div className="w-full h-28 rounded-md bg-gray-200 mb-4 flex items-center justify-center"></div>
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
                className="no-underline text-inherit"
              >
                <div className="border rounded-lg p-4 cursor-pointer hover:shadow-lg">
                  <div className="w-full h-36 bg-gray-200 rounded mb-4"></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-gray-600">{p.price}</div>
                    </div>
                    <button className="px-3 py-2 border rounded text-sm">
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
              className="no-underline text-inherit"
            >
              <div className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer hover:shadow-lg">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center" />
                <div>
                  <div className="font-medium">{u.title}</div>
                  <div className="text-sm text-gray-600">
                    Authentic & trusted
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="max-w-8xl mx-auto px-4 py-10">
        <h3 className="text-lg font-semibold mb-4 mt-4">Special Offers</h3>
        <div className="flex flex-col md:flex-row gap-4">
          {[1, 2, 3].map((offer, i) => (
            <Link
              key={i}
              to={`/offer/${offer}`}
              className="no-underline text-inherit"
            >
              <div className="border rounded-lg p-4 flex gap-4 items-center cursor-pointer hover:shadow-lg">
                <div className="w-16 h-16 bg-gray-200 rounded" />
                <div>
                  <div className="font-medium">Ganesh Chaturthi Special</div>
                  <div className="text-sm text-gray-600">
                    Modak Collection
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}


// import { useEffect, useState } from "react";

// export default function Home() {
//   const categories = [
//     { id: 1, name: "Pedhe" },
//     { id: 2, name: "Dry Fruit Sweets" },
//     { id: 3, name: "Festival Specials" },
//     { id: 4, name: "Gift Packs" },
//   ];

//   const bestSellers = [
//     { id: 1, name: "Mathura ke Pedha", price: "$12" },
//     { id: 2, name: "Motichoor Laddu", price: "$10" },
//     { id: 3, name: "Rasgulla", price: "$8" },
//   ];

//   const usps = [
//     { id: 1, title: "100% Pure & Fresh ingredients" },
//     { id: 2, title: "Traditional Recipes" },
//     { id: 3, title: "Secure Packaging" },
//   ];

//   const heroSlides = [
//     {
//       heading: "Traditional Taste, Modern Delivery",
//       image: "../src/assets/hero1.png",
//     },
//     {
//       heading: "Mithaas jo dil jeet le",
//       image: "../src/assets/hero2.webp",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
// <div className="min-h-screen bg-white text-gray-900 space-y-20">
//   {/* Hero Section */}
//   <section className="bg-gray-50">
//     <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
//       <div>
//         <h1
//           className="text-4xl md:text-5xl font-semibold mb-6 transition-opacity duration-1000 ease-in-out"
//           key={heroSlides[currentSlide].heading}
//         >
//           {heroSlides[currentSlide].heading}
//         </h1>
//         <p className="text-gray-600 mb-8 text-lg leading-relaxed">
//           Mathura ke asli pedhe — ghar jaisa taste, taiyar delivery.
//         </p>
//          <div className="flex gap-3">
//           <button className="px-4 py-2 border rounded-md">Order Now</button>
//           <button className="px-4 py-2 bg-gray-800 text-white rounded-md">View Menu</button>
//         </div>
//       </div>

//        <div className="flex justify-center md:justify-end">
//          <img
//            key={heroSlides[currentSlide].image}
//           src={heroSlides[currentSlide].image}
//            alt="Hero Slide"
//            className="w-72 h-48 md:w-96 md:h-64 rounded-xl object-cover shadow-md transition-opacity duration-1000 ease-in-out"
//          />
//       </div>
//      </div>
//    </section>

//       {/* Categories */}
//       <section id="categories" className="max-w-7xl mx-auto px-6">
//         <h2 className="text-2xl font-semibold mb-10 text-center">
//           Categories
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {categories.map((c) => (
//             <div
//               key={c.id}
//               className="bg-white border rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
//             >
//               <div className="w-full h-32 rounded-lg bg-gray-200 mb-6 flex items-center justify-center"></div>
//               <div className="text-base font-medium">{c.name}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Best Sellers */}
//       <section id="products" className="bg-gray-50 border-t">
//         <div className="max-w-7xl mx-auto px-6 py-16">
//           <h2 className="text-2xl font-semibold mb-10 text-center">
//             Best Sellers
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {bestSellers.map((p) => (
//               <div
//                 key={p.id}
//                 className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
//               >
//                 <div className="w-full h-40 bg-gray-200 rounded-lg mb-6"></div>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="font-medium text-lg">{p.name}</div>
//                     <div className="text-sm text-gray-600">{p.price}</div>
//                   </div>
//                   <button className="px-4 py-2 border rounded-md text-sm">
//                     Add
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us / USPs */}
//       <section className="max-w-7xl mx-auto px-6">
//         <h2 className="text-2xl font-semibold mb-10 text-center">
//           Why Choose Us?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {usps.map((u) => (
//             <div
//               key={u.id}
//               className="border rounded-xl p-6 flex items-start gap-5 bg-white shadow-sm hover:shadow-md transition"
//             >
//               <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center" />
//               <div>
//                 <div className="font-medium text-lg">{u.title}</div>
//                 <div className="text-sm text-gray-600">Authentic & trusted</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials + Offers */}
//       <section className="bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
//           <div className="md:col-span-2 space-y-10">
//             <div>
//               <h3 className="text-xl font-semibold mb-6">
//                 Customer Testimonials
//               </h3>
//               <div className="border rounded-xl p-6 bg-white shadow-sm">
//                 <div className="flex items-start gap-5">
//                   <div className="w-14 h-14 rounded-full bg-gray-200" />
//                   <div>
//                     <p className="italic text-lg">
//                       "Sabse behtareen pedhe, bilkul ghar jaisa taste!"
//                     </p>
//                     <p className="text-sm text-gray-600 mt-2">— Ravi Kumar</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold mb-6">Special Offers</h3>
//               <div className="border rounded-xl p-6 bg-white shadow-sm flex gap-6 items-center">
//                 <div className="w-20 h-20 bg-gray-200 rounded-lg" />
//                 <div>
//                   <div className="font-medium text-lg">
//                     Ganesh Chaturthi Special
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     Modak Collection
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
