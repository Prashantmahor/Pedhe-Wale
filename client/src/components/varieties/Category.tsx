// import { useState } from "react";

// export default function CategoryPage() {
//   const categories = [
//     {
//       id: 1,
//       name: "Classic Pedas",
//       products: [
//         { id: 1, name: "Mathura Peda", price: "$10" },
//         { id: 2, name: "Kesar Peda", price: "$12" },
//         { id: 3, name: "Doodh Peda", price: "$8" },
//         { id: 4, name: "Malai Peda", price: "$11" },
//         { id: 5, name: "Elaichi Peda", price: "$9" },
//         { id: 6, name: "Safed Peda", price: "$7" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Nutty & Dry Fruit Pedas",
//       products: [
//         { id: 1, name: "Badam Peda", price: "$14" },
//         { id: 2, name: "Kaju Peda", price: "$15" },
//         { id: 3, name: "Pista Peda", price: "$13" },
//         { id: 4, name: "Dry Fruit Mix Peda", price: "$16" },
//         { id: 5, name: "Anjeer Peda", price: "$17" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Modern Fusion Pedas",
//       products: [
//         { id: 1, name: "Chocolate Peda", price: "$12" },
//         { id: 2, name: "Strawberry Peda", price: "$13" },
//         { id: 3, name: "Mango Peda", price: "$14" },
//         { id: 4, name: "Blueberry Peda", price: "$15" },
//         { id: 5, name: "Coffee Peda", price: "$16" },
//         { id: 6, name: "Oreo Fusion Peda", price: "$18" },
//       ],
//     },
//   ];

//   // Track how many items are visible per category
//   const [visibleItems, setVisibleItems] = useState(
//     categories.reduce((acc, cat) => {
//       acc[cat.id] = 4; // start with 4 products per category
//       return acc;
//     }, {})
//   );

//   const handleShowMore = (catId, total) => {
//     setVisibleItems((prev) => ({
//       ...prev,
//       [catId]: Math.min(prev[catId] + 4, total), // increase by 4, but not more than total
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
//       <h1 className="text-3xl font-semibold mb-8 text-center">Our Peda Varieties</h1>

//       {categories.map((category) => (
//         <div key={category.id} className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {category.products.slice(0, visibleItems[category.id]).map((p) => (
//               <div
//                 key={p.id}
//                 className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
//               >
//                 <div className="w-full h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
//                   <span className="text-gray-500">Image</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="font-medium">{p.name}</div>
//                     <div className="text-sm text-gray-600">{p.price}</div>
//                   </div>
//                   <button className="px-3 py-1 border rounded text-sm">
//                     Add
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Show More Button */}
//           {visibleItems[category.id] < category.products.length && (
//             <div className="mt-6 text-center">
//               <button
//                 onClick={() =>
//                   handleShowMore(category.id, category.products.length)
//                 }
//                 className="px-4 py-2 bg-gray-800 text-white rounded-md"
//               >
//                 Show More
//               </button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
