// import React, { useEffect, useState } from "react";
// import { getCart, removeFromCart, addToCart, CartItem } from "../utils/cartUtils";

// const Orders: React.FC = () => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const updateCart = () => setCart(getCart());
//     updateCart();
//     window.addEventListener("cartUpdated", updateCart);
//     return () => window.removeEventListener("cartUpdated", updateCart);
//   }, []);

//   const handleQtyChange = (id: number, delta: number) => {
//     const updated = cart.map((item) => {
//       if (item.id === id) {
//         const newQty = item.qty + delta;
//         return { ...item, qty: newQty > 0 ? newQty : 1 };
//       }
//       return item;
//     });

//     updated.forEach(item => {
//       removeFromCart(item.id);
//       addToCart(item);
//     });

//     setCart(updated);
//   };

//   const handleRemove = (id: number) => {
//     removeFromCart(id);
//     setCart(getCart());
//   };

//   const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

//       {cart.length === 0 ? (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-6">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
//             >
//               <div className="flex items-center space-x-6 w-full sm:w-auto">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg shadow-sm"
//                 />
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600 mt-1">
//                     ₹{item.price} × {item.qty} = <span className="font-bold text-gray-800">₹{item.price * item.qty}</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center mt-4 sm:mt-0 space-x-3">
//                 <div className="flex items-center space-x-2 m-5">
//                   <button
//                     className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//                     onClick={() => handleQtyChange(item.id, -1)}
//                   >-</button>
//                   <span className="px-3 py-1 border rounded">{item.qty}</span>
//                   <button
//                     className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//                     onClick={() => handleQtyChange(item.id, 1)}
//                   >+</button>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(item.id)}
//                   className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {cart.length > 0 && (
//         <div className="mt-8 p-6 border rounded-lg bg-gray-50 shadow-md text-right">
//           <h3 className="text-2xl font-bold text-gray-800">
//             Total Amount: ₹{totalAmount}
//           </h3>
//           <button
//             className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
//             onClick={() => alert("Proceed to checkout (add your checkout logic)")}
//           >
//             Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  addToCart,
  clearCart,
  CartItem,
} from "../utils/cartUtils";
import { useNavigate } from "react-router-dom";

const Orders: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCart = () => setCart(getCart());
    updateCart();
    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  const handleQtyChange = (id: number, delta: number) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    });

    updated.forEach((item) => {
      removeFromCart(item.id);
      addToCart(item);
    });

    setCart(updated);
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleCheckout = () => {
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    // 👇 Yahan backend pe order bhejna hoga agar API connect karna chahte ho
    // await fetch("http://localhost:5000/api/orders", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ items: cart, total: totalAmount }),
    // });

    // ✅ Clear cart after checkout
    clearCart();

    // ✅ Redirect to confirmation page
    navigate("/order-confirmation", { state: { total: totalAmount } });
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 flex items-center gap-2">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between p-5 border rounded-2xl shadow-sm hover:shadow-md transition bg-white"
            >
              {/* Product Info */}
              <div className="flex items-center gap-6 w-full md:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-xl shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Price: <span className="font-medium">₹{item.price}</span>
                  </p>
                  <p className="text-gray-700 font-semibold mt-1">
                    Total: ₹{item.price * item.qty}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
                {/* Quantity */}
                <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
                  <button
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => handleQtyChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="px-5 py-2 text-gray-800 font-medium bg-white">
                    {item.qty}
                  </span>
                  <button
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => handleQtyChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="mt-10 p-6 border rounded-2xl bg-gray-50 shadow-lg text-right">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Total Amount: <span className="text-green-600">₹{totalAmount}</span>
          </h3>
          <button
            className="mt-3 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition transform hover:scale-105"
            onClick={handleCheckout}
          >
            ✅ Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;
