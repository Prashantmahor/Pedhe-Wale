import React, { useEffect, useState } from "react";
import { getCart, removeFromCart, addToCart, CartItem } from "../utils/cartUtils";

const Orders: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

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

    updated.forEach(item => {
      removeFromCart(item.id);
      addToCart(item);
    });

    setCart(updated);
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex items-center space-x-6 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg shadow-sm"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mt-1">
                    ₹{item.price} × {item.qty} = <span className="font-bold text-gray-800">₹{item.price * item.qty}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-4 sm:mt-0 space-x-3">
                <div className="flex items-center space-x-2 m-5">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    onClick={() => handleQtyChange(item.id, -1)}
                  >-</button>
                  <span className="px-3 py-1 border rounded">{item.qty}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    onClick={() => handleQtyChange(item.id, 1)}
                  >+</button>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 p-6 border rounded-lg bg-gray-50 shadow-md text-right">
          <h3 className="text-2xl font-bold text-gray-800">
            Total Amount: ₹{totalAmount}
          </h3>
          <button
            className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
            onClick={() => alert("Proceed to checkout (add your checkout logic)")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;
