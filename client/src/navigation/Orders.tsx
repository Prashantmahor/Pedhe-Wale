import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

interface OrderItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

interface PastOrder {
  id: number;
  date: string;
  status: string;
  items: OrderItem[];
}

const Orders: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [pastOrders, setPastOrders] = useState<PastOrder[]>([]);

  // Load Cart (localStorage + merge with cart.json)
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const parsedCart: CartItem[] = savedCart ? JSON.parse(savedCart) : [];

    fetch("/Pedhe-Wale/orders/cart.json")
      .then((res) => res.json())
      .then((data) => {
        const jsonCart: CartItem[] = data.cart || [];

        // Merge JSON cart into saved cart
        const mergedCart = [...parsedCart];

        jsonCart.forEach((newItem) => {
          const existing = mergedCart.find((item) => item.id === newItem.id);
          if (existing) {
            // अगर product पहले से है तो qty बढ़ा दो
            existing.qty += newItem.qty;
          } else {
            // नया product add कर दो
            mergedCart.push(newItem);
          }
        });

        setCart(mergedCart);
        localStorage.setItem("cart", JSON.stringify(mergedCart));
      })
      .catch((err) => {
        console.error("Cart fetch error:", err);
        setCart(parsedCart); // fallback
      });

    // Past orders load
    fetch("/Pedhe-Wale/orders/past_orders.json")
      .then((res) => res.json())
      .then((data) => setPastOrders(data.orders || []))
      .catch((err) => console.error("Orders fetch error:", err));
  }, []);

  // Sync cart whenever updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Remove item
  const handleRemove = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div className="container mx-auto p-4 py-5">
      {/* Cart Section */}
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Past Orders Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">📦 Past Orders</h2>
      {pastOrders.length === 0 ? (
        <p className="text-gray-500">No past orders yet.</p>
      ) : (
        <div className="space-y-6">
          {pastOrders.map((order) => (
            <div
              key={order.id}
              className="border p-4 rounded-lg shadow-md bg-gray-50"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
              <p
                className={`text-sm font-medium mb-2 ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {order.status}
              </p>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-600">
                        ₹{item.price} × {item.qty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
