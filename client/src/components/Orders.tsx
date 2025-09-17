// src/components/Orders.tsx
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

interface Order {
  id: number;
  date: string;
  items: Product[];
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
}

const Orders: React.FC = () => {
  // Cart products (ये Add to Cart button से आने चाहिए, अभी dummy data रख रहा हूँ)
  const [cart, setCart] = useState<Product[]>([
    { id: 1, name: "Kesar Peda", price: 220, qty: 2, image: "/images/classic_pedas/kesar_peda.jpeg" },
    { id: 2, name: "Rose Peda", price: 340, qty: 1, image: "/images/classic_pedas/rose_peda.jpeg" },
  ]);

  // Past orders
  const [orders] = useState<Order[]>([
    {
      id: 101,
      date: "2025-09-01",
      items: [
        { id: 3, name: "Mawa Peda", price: 200, qty: 3, image: "/images/classic_pedas/mawa_peda.jpeg" },
      ],
      status: "Delivered",
    },
    {
      id: 102,
      date: "2025-09-02",
      items: [
        { id: 4, name: "Elaichi Peda", price: 320, qty: 2, image: "/images/classic_pedas/elaichi_peda.jpeg" },
      ],
      status: "Delivered",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Shipped":
        return "bg-blue-500 text-white";
      case "Delivered":
        return "bg-green-500 text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Orders</h2>

      {/* Cart Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">🛒 My Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded mb-3"
                />
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">₹{item.price} x {item.qty}</p>
                <p className="font-bold text-yellow-600 mt-1">
                  Total: ₹{item.price * item.qty}
                </p>
                <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Place Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <hr className="my-8" />

      {/* Past Orders Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">📦 Past Orders</h3>
        {orders.length === 0 ? (
          <p className="text-gray-500">No past orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => {
              const total = order.items.reduce(
                (sum, i) => sum + i.price * i.qty,
                0
              );
              return (
                <div
                  key={order.id}
                  className="bg-white shadow-md rounded-lg p-4 border"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold">Order #{order.id}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Date: {order.date}</p>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-3 items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p>{item.name}</p>
                          <p className="text-sm text-gray-500">
                            ₹{item.price} x {item.qty}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 font-bold text-yellow-700">
                    Total: ₹{total}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
