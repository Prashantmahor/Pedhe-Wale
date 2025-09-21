import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const { product, quantity, address, paymentMethod, orderId } = location.state;

  return (
    <div className="p-4 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Order Confirmed!</h2>
      <p className="mb-4">Your Order ID: <strong>{orderId}</strong></p>

      <div className="text-left border p-4 mb-4">
        <h3 className="font-semibold mb-2">Shipping Address</h3>
        <p>{address.name}</p>
        <p>{address.street}, {address.city} - {address.pincode}</p>
        <p>Phone: {address.phone}</p>

        <h3 className="font-semibold mt-4 mb-2">Order Summary</h3>
        <p>{product.name} × {quantity}</p>
        <p>Total Amount: ₹{product.price * quantity}</p>

        <p className="mt-2">Payment Method: {paymentMethod}</p>
      </div>

      <p>Thank you for shopping with us! Your order will be delivered soon.</p>
    </div>
  );
};

export default OrderConfirmation;
