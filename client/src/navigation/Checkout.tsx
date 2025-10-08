// // import React, { useEffect, useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";

// // const Checkout = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { product, quantity } = location.state || {};

// //   const [step, setStep] = useState(1);

// //   // LocalStorage Saved Addresses
// //   const [savedAddresses, setSavedAddresses] = useState<any[]>(() => {
// //     const stored = localStorage.getItem("savedAddresses");
// //     return stored ? JSON.parse(stored) : [];
// //   });

// //   const [selectedAddress, setSelectedAddress] = useState<any>(null);
// //   const [address, setAddress] = useState({
// //     name: "",
// //     phone: "",
// //     street: "",
// //     city: "",
// //     pincode: "",
// //   });
// //   const [paymentMethod, setPaymentMethod] = useState("COD");
// //   const [paymentDetails, setPaymentDetails] = useState<any>({});

// //   useEffect(() => {
// //     localStorage.setItem("savedAddresses", JSON.stringify(savedAddresses));
// //   }, [savedAddresses]);

// //   if (!product) {
// //     return <div className="p-6 text-center text-gray-600">No product selected.</div>;
// //   }

// //   // Confirm Order
// //   const handleConfirmOrder = () => {
// //     const finalAddress = selectedAddress || address;
// //     const order = {
// //       product,
// //       quantity,
// //       address: finalAddress,
// //       paymentMethod,
// //       paymentDetails,
// //       orderId: Date.now(),
// //     };
// //     navigate("/order-confirmation", { state: order });
// //   };

// //   // Stepper UI
// //   const StepIndicator = () => {
// //     const steps = ["Address", "Payment", "Review"];
// //     const progress = ((step - 1) / (steps.length - 1)) * 100;

// //     return (
// //       <div className="relative mb-8">
// //         <div className="absolute top-5 left-0 h-1 bg-gray-300 w-full rounded"></div>
// //         <div
// //           className="absolute top-5 left-0 h-1 bg-green-500 transition-all duration-500 rounded"
// //           style={{ width: `${progress}%` }}
// //         ></div>
// //         <div className="flex justify-between relative z-10">
// //           {["Address", "Payment", "Review"].map((s, i) => {
// //             const current = i + 1;
// //             return (
// //               <div key={s} className="text-center flex-1">
// //                 <div
// //                   className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
// //                     step === current
// //                       ? "bg-green-600 text-white scale-110"
// //                       : step > current
// //                       ? "bg-green-400 text-white"
// //                       : "bg-gray-300 text-gray-700"
// //                   }`}
// //                 >
// //                   {current}
// //                 </div>
// //                 <p className="mt-2 text-sm">{s}</p>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
// //       {/* Left */}
// //       <div className="md:col-span-2">
// //         <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

// //         <StepIndicator />

// //         {/* STEP 1: Address */}
// //         {step === 1 && (
// //           <div className="bg-white p-5 rounded-2xl shadow-md">
// //             <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
// //             <input
// //               type="text"
// //               placeholder="Full Name"
// //               value={address.name}
// //               onChange={(e) => setAddress({ ...address, name: e.target.value })}
// //               className="border w-full p-2 mb-2 rounded"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Phone"
// //               value={address.phone}
// //               onChange={(e) => setAddress({ ...address, phone: e.target.value })}
// //               className="border w-full p-2 mb-2 rounded"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Street Address"
// //               value={address.street}
// //               onChange={(e) => setAddress({ ...address, street: e.target.value })}
// //               className="border w-full p-2 mb-2 rounded"
// //             />
// //             <input
// //               type="text"
// //               placeholder="City"
// //               value={address.city}
// //               onChange={(e) => setAddress({ ...address, city: e.target.value })}
// //               className="border w-full p-2 mb-2 rounded"
// //             />
// //             <input
// //               type="text"
// //               placeholder="Pincode"
// //               value={address.pincode}
// //               onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
// //               className="border w-full p-2 mb-2 rounded"
// //             />

// //             <button
// //               onClick={() => setStep(2)}
// //               className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow w-full"
// //             >
// //               Continue to Payment →
// //             </button>
// //           </div>
// //         )}

// //         {/* STEP 2: Payment */}
// //         {step === 2 && (
// //           <div className="bg-white p-5 rounded-2xl shadow-md">
// //             <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
// //             <select
// //               value={paymentMethod}
// //               onChange={(e) => {
// //                 setPaymentMethod(e.target.value);
// //                 setPaymentDetails({});
// //               }}
// //               className="border w-full p-2 rounded mb-4"
// //             >
// //               <option value="COD">Cash on Delivery</option>
// //               <option value="UPI">UPI</option>
// //               <option value="CARD">Credit/Debit Card</option>
// //               <option value="NETBANKING">Net Banking</option>
// //             </select>

// //             {/* COD */}
// //             {paymentMethod === "COD" && (
// //               <p className="text-gray-600">Pay with Cash at the time of delivery.</p>
// //             )}

// //             {/* UPI */}
// //             {paymentMethod === "UPI" && (
// //               <div className="space-y-3">
// //                 <input
// //                   type="text"
// //                   placeholder="Enter UPI ID (e.g. name@upi)"
// //                   value={paymentDetails.upi || ""}
// //                   onChange={(e) =>
// //                     setPaymentDetails({ ...paymentDetails, upi: e.target.value })
// //                   }
// //                   className="border w-full p-2 rounded"
// //                 />
// //               </div>
// //             )}

// //             {/* Card */}
// //             {paymentMethod === "CARD" && (
// //               <div className="space-y-3">
// //                 <input
// //                   type="text"
// //                   placeholder="Card Number"
// //                   maxLength={16}
// //                   value={paymentDetails.cardNumber || ""}
// //                   onChange={(e) =>
// //                     setPaymentDetails({
// //                       ...paymentDetails,
// //                       cardNumber: e.target.value,
// //                     })
// //                   }
// //                   className="border w-full p-2 rounded"
// //                 />
// //                 <div className="flex gap-3">
// //                   <input
// //                     type="text"
// //                     placeholder="MM/YY"
// //                     value={paymentDetails.expiry || ""}
// //                     onChange={(e) =>
// //                       setPaymentDetails({ ...paymentDetails, expiry: e.target.value })
// //                     }
// //                     className="border w-1/2 p-2 rounded"
// //                   />
// //                   <input
// //                     type="password"
// //                     placeholder="CVV"
// //                     maxLength={3}
// //                     value={paymentDetails.cvv || ""}
// //                     onChange={(e) =>
// //                       setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
// //                     }
// //                     className="border w-1/2 p-2 rounded"
// //                   />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   placeholder="Cardholder Name"
// //                   value={paymentDetails.cardName || ""}
// //                   onChange={(e) =>
// //                     setPaymentDetails({
// //                       ...paymentDetails,
// //                       cardName: e.target.value,
// //                     })
// //                   }
// //                   className="border w-full p-2 rounded"
// //                 />
// //               </div>
// //             )}

// //             {/* NetBanking */}
// //             {paymentMethod === "NETBANKING" && (
// //               <div className="space-y-3">
// //                 <select
// //                   value={paymentDetails.bank || ""}
// //                   onChange={(e) =>
// //                     setPaymentDetails({ ...paymentDetails, bank: e.target.value })
// //                   }
// //                   className="border w-full p-2 rounded"
// //                 >
// //                   <option value="">Select Bank</option>
// //                   <option value="SBI">SBI</option>
// //                   <option value="HDFC">HDFC</option>
// //                   <option value="ICICI">ICICI</option>
// //                   <option value="AXIS">Axis Bank</option>
// //                 </select>
// //                 <input
// //                   type="text"
// //                   placeholder="User ID"
// //                   value={paymentDetails.userId || ""}
// //                   onChange={(e) =>
// //                     setPaymentDetails({
// //                       ...paymentDetails,
// //                       userId: e.target.value,
// //                     })
// //                   }
// //                   className="border w-full p-2 rounded"
// //                 />
// //               </div>
// //             )}

// //             <div className="flex justify-between mt-6">
// //               <button
// //                 onClick={() => setStep(1)}
// //                 className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-6 rounded-lg shadow"
// //               >
// //                 ← Back
// //               </button>
// //               <button
// //                 onClick={() => setStep(3)}
// //                 className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow"
// //               >
// //                 Continue to Review →
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {/* STEP 3: Review */}
// //         {step === 3 && (
// //           <div className="bg-white p-5 rounded-2xl shadow-md">
// //             <h3 className="text-lg font-semibold mb-3">Review Your Order</h3>

// //             {/* Address */}
// //             <div className="border-b pb-3 mb-3">
// //               <h4 className="font-medium mb-1">Shipping Address</h4>
// //               <p className="text-sm text-gray-600">
// //                 {address.name}, {address.phone}, {address.street}, {address.city} -{" "}
// //                 {address.pincode}
// //               </p>
// //             </div>

// //             {/* Payment */}
// //             <div className="border-b pb-3 mb-3">
// //               <h4 className="font-medium mb-1">Payment Method</h4>
// //               <p className="text-sm text-gray-600">{paymentMethod}</p>
// //               {paymentMethod !== "COD" && (
// //                 <pre className="text-xs bg-gray-100 p-2 rounded mt-1">
// //                   {JSON.stringify(paymentDetails, null, 2)}
// //                 </pre>
// //               )}
// //             </div>

// //             {/* Product */}
// //             <div className="flex items-center space-x-4 border-b pb-3">
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className="w-20 h-20 object-cover rounded"
// //               />
// //               <div>
// //                 <p className="font-medium">{product.name}</p>
// //                 <p className="text-sm text-gray-500">Qty: {quantity}</p>
// //                 <p className="font-semibold">₹{product.price}</p>
// //               </div>
// //             </div>

// //             <div className="mt-3 flex justify-between font-semibold text-lg">
// //               <span>Total</span>
// //               <span>₹{product.price * quantity}</span>
// //             </div>

// //             <div className="flex justify-between mt-6">
// //               <button
// //                 onClick={() => setStep(2)}
// //                 className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-6 rounded-lg shadow"
// //               >
// //                 ← Back
// //               </button>
// //               <button
// //                 onClick={handleConfirmOrder}
// //                 className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow"
// //               >
// //                 Confirm Order ✅
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Right: Order Summary */}
// //       <div className="bg-white p-5 rounded-2xl shadow-md h-fit sticky top-20">
// //         <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
// //         <div className="flex items-center space-x-4 border-b pb-3">
// //           <img
// //             src={product.image}
// //             alt={product.name}
// //             className="w-20 h-20 object-cover rounded"
// //           />
// //           <div>
// //             <p className="font-medium">{product.name}</p>
// //             <p className="text-sm text-gray-500">Qty: {quantity}</p>
// //             <p className="font-semibold">₹{product.price}</p>
// //           </div>
// //         </div>
// //         <div className="mt-3 flex justify-between font-semibold text-lg">
// //           <span>Total</span>
// //           <span>₹{product.price * quantity}</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const fallbackImg = "/images/placeholder.jpg";

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { product, quantity } = location.state || {};

//   const [step, setStep] = useState(1);

//   // LocalStorage Saved Addresses
//   const [savedAddresses, setSavedAddresses] = useState<any[]>(() => {
//     const stored = localStorage.getItem("savedAddresses");
//     return stored ? JSON.parse(stored) : [];
//   });

//   const [selectedAddress, setSelectedAddress] = useState<any>(null);
//   const [address, setAddress] = useState({
//     name: "",
//     phone: "",
//     street: "",
//     city: "",
//     pincode: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [paymentDetails, setPaymentDetails] = useState<any>({});

//   useEffect(() => {
//     localStorage.setItem("savedAddresses", JSON.stringify(savedAddresses));
//   }, [savedAddresses]);

//   if (!product) {
//     return (
//       <div className="p-6 text-center text-gray-600">
//         No product selected.
//       </div>
//     );
//   }

//   // 👉 Ensure image absolute URL
//   const productImage = product.image?.startsWith("http")
//     ? product.image
//     : `http://localhost:5000${product.image || ""}`;

//   // Confirm Order
//   const handleConfirmOrder = () => {
//     const finalAddress = selectedAddress || address;
//     const order = {
//       product,
//       quantity,
//       address: finalAddress,
//       paymentMethod,
//       paymentDetails,
//       orderId: Date.now(),
//     };
//     navigate("/order-confirmation", { state: order });
//   };

//   // Stepper UI
//   const StepIndicator = () => {
//     const steps = ["Address", "Payment", "Review"];
//     const progress = ((step - 1) / (steps.length - 1)) * 100;

//     return (
//       <div className="relative mb-8">
//         <div className="absolute top-5 left-0 h-1 bg-gray-300 w-full rounded"></div>
//         <div
//           className="absolute top-5 left-0 h-1 bg-green-500 transition-all duration-500 rounded"
//           style={{ width: `${progress}%` }}
//         ></div>
//         <div className="flex justify-between relative z-10">
//           {steps.map((s, i) => {
//             const current = i + 1;
//             return (
//               <div key={s} className="text-center flex-1">
//                 <div
//                   className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
//                     step === current
//                       ? "bg-green-600 text-white scale-110"
//                       : step > current
//                       ? "bg-green-400 text-white"
//                       : "bg-gray-300 text-gray-700"
//                   }`}
//                 >
//                   {current}
//                 </div>
//                 <p className="mt-2 text-sm">{s}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
//       {/* Left */}
//       <div className="md:col-span-2">
//         <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

//         <StepIndicator />

//         {/* STEP 1: Address */}
//         {step === 1 && (
//           <div className="bg-white p-5 rounded-2xl shadow-md">
//             <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={address.name}
//               onChange={(e) => setAddress({ ...address, name: e.target.value })}
//               className="border w-full p-2 mb-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               value={address.phone}
//               onChange={(e) => setAddress({ ...address, phone: e.target.value })}
//               className="border w-full p-2 mb-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Street Address"
//               value={address.street}
//               onChange={(e) => setAddress({ ...address, street: e.target.value })}
//               className="border w-full p-2 mb-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="City"
//               value={address.city}
//               onChange={(e) => setAddress({ ...address, city: e.target.value })}
//               className="border w-full p-2 mb-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Pincode"
//               value={address.pincode}
//               onChange={(e) =>
//                 setAddress({ ...address, pincode: e.target.value })
//               }
//               className="border w-full p-2 mb-2 rounded"
//             />

//             <button
//               onClick={() => setStep(2)}
//               className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow w-full"
//             >
//               Continue to Payment →
//             </button>
//           </div>
//         )}

//         {/* STEP 2: Payment */}
//         {step === 2 && (
//           <div className="bg-white p-5 rounded-2xl shadow-md">
//             <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
//             <select
//               value={paymentMethod}
//               onChange={(e) => {
//                 setPaymentMethod(e.target.value);
//                 setPaymentDetails({});
//               }}
//               className="border w-full p-2 rounded mb-4"
//             >
//               <option value="COD">Cash on Delivery</option>
//               <option value="UPI">UPI</option>
//               <option value="CARD">Credit/Debit Card</option>
//               <option value="NETBANKING">Net Banking</option>
//             </select>

//             {paymentMethod === "COD" && (
//               <p className="text-gray-600">
//                 Pay with Cash at the time of delivery.
//               </p>
//             )}

//             {paymentMethod === "UPI" && (
//               <div className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Enter UPI ID (e.g. name@upi)"
//                   value={paymentDetails.upi || ""}
//                   onChange={(e) =>
//                     setPaymentDetails({
//                       ...paymentDetails,
//                       upi: e.target.value,
//                     })
//                   }
//                   className="border w-full p-2 rounded"
//                 />
//               </div>
//             )}

//             {paymentMethod === "CARD" && (
//               <div className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Card Number"
//                   maxLength={16}
//                   value={paymentDetails.cardNumber || ""}
//                   onChange={(e) =>
//                     setPaymentDetails({
//                       ...paymentDetails,
//                       cardNumber: e.target.value,
//                     })
//                   }
//                   className="border w-full p-2 rounded"
//                 />
//                 <div className="flex gap-3">
//                   <input
//                     type="text"
//                     placeholder="MM/YY"
//                     value={paymentDetails.expiry || ""}
//                     onChange={(e) =>
//                       setPaymentDetails({
//                         ...paymentDetails,
//                         expiry: e.target.value,
//                       })
//                     }
//                     className="border w-1/2 p-2 rounded"
//                   />
//                   <input
//                     type="password"
//                     placeholder="CVV"
//                     maxLength={3}
//                     value={paymentDetails.cvv || ""}
//                     onChange={(e) =>
//                       setPaymentDetails({
//                         ...paymentDetails,
//                         cvv: e.target.value,
//                       })
//                     }
//                     className="border w-1/2 p-2 rounded"
//                   />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Cardholder Name"
//                   value={paymentDetails.cardName || ""}
//                   onChange={(e) =>
//                     setPaymentDetails({
//                       ...paymentDetails,
//                       cardName: e.target.value,
//                     })
//                   }
//                   className="border w-full p-2 rounded"
//                 />
//               </div>
//             )}

//             {paymentMethod === "NETBANKING" && (
//               <div className="space-y-3">
//                 <select
//                   value={paymentDetails.bank || ""}
//                   onChange={(e) =>
//                     setPaymentDetails({
//                       ...paymentDetails,
//                       bank: e.target.value,
//                     })
//                   }
//                   className="border w-full p-2 rounded"
//                 >
//                   <option value="">Select Bank</option>
//                   <option value="SBI">SBI</option>
//                   <option value="HDFC">HDFC</option>
//                   <option value="ICICI">ICICI</option>
//                   <option value="AXIS">Axis Bank</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="User ID"
//                   value={paymentDetails.userId || ""}
//                   onChange={(e) =>
//                     setPaymentDetails({
//                       ...paymentDetails,
//                       userId: e.target.value,
//                     })
//                   }
//                   className="border w-full p-2 rounded"
//                 />
//               </div>
//             )}

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setStep(1)}
//                 className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-6 rounded-lg shadow"
//               >
//                 ← Back
//               </button>
//               <button
//                 onClick={() => setStep(3)}
//                 className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow"
//               >
//                 Continue to Review →
//               </button>
//             </div>
//           </div>
//         )}

//         {/* STEP 3: Review */}
//         {step === 3 && (
//           <div className="bg-white p-5 rounded-2xl shadow-md">
//             <h3 className="text-lg font-semibold mb-3">Review Your Order</h3>

//             <div className="border-b pb-3 mb-3">
//               <h4 className="font-medium mb-1">Shipping Address</h4>
//               <p className="text-sm text-gray-600">
//                 {address.name}, {address.phone}, {address.street}, {address.city}{" "}
//                 - {address.pincode}
//               </p>
//             </div>

//             <div className="border-b pb-3 mb-3">
//               <h4 className="font-medium mb-1">Payment Method</h4>
//               <p className="text-sm text-gray-600">{paymentMethod}</p>
//               {paymentMethod !== "COD" && (
//                 <pre className="text-xs bg-gray-100 p-2 rounded mt-1">
//                   {JSON.stringify(paymentDetails, null, 2)}
//                 </pre>
//               )}
//             </div>

//             <div className="flex items-center space-x-4 border-b pb-3">
//               <img
//                 src={productImage || fallbackImg}
//                 alt={product.name}
//                 className="w-20 h-20 object-cover rounded"
//                 onError={(e) => (e.currentTarget.src = fallbackImg)}
//               />
//               <div>
//                 <p className="font-medium">{product.name}</p>
//                 <p className="text-sm text-gray-500">Qty: {quantity}</p>
//                 <p className="font-semibold">₹{product.price}</p>
//               </div>
//             </div>

//             <div className="mt-3 flex justify-between font-semibold text-lg">
//               <span>Total</span>
//               <span>₹{product.price * quantity}</span>
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setStep(2)}
//                 className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-6 rounded-lg shadow"
//               >
//                 ← Back
//               </button>
//               <button
//                 onClick={handleConfirmOrder}
//                 className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow"
//               >
//                 Confirm Order ✅
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Right: Order Summary */}
//       <div className="bg-white p-5 rounded-2xl shadow-md h-fit sticky top-20">
//         <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
//         <div className="flex items-center space-x-4 border-b pb-3">
//           <img
//             src={productImage || fallbackImg}
//             alt={product.name}
//             className="w-20 h-20 object-cover rounded"
//             onError={(e) => (e.currentTarget.src = fallbackImg)}
//           />
//           <div>
//             <p className="font-medium">{product.name}</p>
//             <p className="text-sm text-gray-500">Qty: {quantity}</p>
//             <p className="font-semibold">₹{product.price}</p>
//           </div>
//         </div>
//         <div className="mt-3 flex justify-between font-semibold text-lg">
//           <span>Total</span>
//           <span>₹{product.price * quantity}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

 // ✅ Step 1: Try getting from state or fallback to localStorage
const stored = localStorage.getItem("checkoutCart");
const { cart: storedCart } = stored ? JSON.parse(stored) : { cart: [] };
const { cart = storedCart || [] } = location.state || {};

  const [step, setStep] = useState(1);
   
  // ✅ Step 2: Save cart to localStorage for persistence
useEffect(() => {
  if (cart && cart.length > 0) {
    localStorage.setItem("checkoutCart", JSON.stringify({ cart }));
  }
}, [cart]);


  // Address
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  // Payment
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [paymentDetails, setPaymentDetails] = useState<any>({});

  // Total calculation
  const totalAmount = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.qty,
    0
  );
//confirmordeer
const handleConfirmOrder = () => {
  const order = {
    items: cart,
    address,
    paymentMethod,
    paymentDetails,
    orderId: Date.now(),
    total: totalAmount,
  };
  localStorage.removeItem("checkoutCart"); // ✅ clear saved cart
  navigate("/order-confirmation", { state: order });
};
  // Stepper UI
  const StepIndicator = () => {
    const steps = ["Address", "Payment", "Review"];
    const progress = ((step - 1) / (steps.length - 1)) * 100;

    return (
      <div className="relative mb-8">
        <div className="absolute top-5 left-0 h-1 bg-gray-300 w-full rounded"></div>
        <div
          className="absolute top-5 left-0 h-1 bg-green-500 transition-all duration-500 rounded"
          style={{ width: `${progress}%` }}
        ></div>
        <div className="flex justify-between relative z-10">
          {steps.map((s, i) => {
            const current = i + 1;
            return (
              <div key={s} className="text-center flex-1">
                <div
                  className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    step === current
                      ? "bg-green-600 text-white scale-110"
                      : step > current
                      ? "bg-green-400 text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {current}
                </div>
                <p className="mt-2 text-sm">{s}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">No items in cart.</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      {/* Left */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

        <StepIndicator />

        {/* STEP 1: Address */}
        {step === 1 && (
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={address.name}
              onChange={(e) => setAddress({ ...address, name: e.target.value })}
              className="border w-full p-2 mb-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              value={address.phone}
              onChange={(e) => setAddress({ ...address, phone: e.target.value })}
              className="border w-full p-2 mb-2 rounded"
            />
            <input
              type="text"
              placeholder="Street Address"
              value={address.street}
              onChange={(e) =>
                setAddress({ ...address, street: e.target.value })
              }
              className="border w-full p-2 mb-2 rounded"
            />
            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              className="border w-full p-2 mb-2 rounded"
            />
            <input
              type="text"
              placeholder="Pincode"
              value={address.pincode}
              onChange={(e) =>
                setAddress({ ...address, pincode: e.target.value })
              }
              className="border w-full p-2 mb-2 rounded"
            />

            <button
              onClick={() => setStep(2)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow w-full"
            >
              Continue to Payment →
            </button>
          </div>
        )}

        {/* STEP 2: Payment */}
        {step === 2 && (
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
            <select
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                setPaymentDetails({});
              }}
              className="border w-full p-2 rounded mb-4"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="CARD">Credit/Debit Card</option>
              <option value="NETBANKING">Net Banking</option>
            </select>

            {paymentMethod === "COD" && (
              <p className="text-gray-600">
                Pay with Cash at the time of delivery.
              </p>
            )}

            {paymentMethod === "UPI" && (
              <input
                type="text"
                placeholder="Enter UPI ID (e.g. name@upi)"
                value={paymentDetails.upi || ""}
                onChange={(e) =>
                  setPaymentDetails({ ...paymentDetails, upi: e.target.value })
                }
                className="border w-full p-2 rounded"
              />
            )}

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-6 rounded-lg shadow"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow"
              >
                Continue to Review →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Review */}
        {step === 3 && (
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Review Your Order</h3>

            <div className="border-b pb-3 mb-3">
              <h4 className="font-medium mb-1">Shipping Address</h4>
              <p className="text-sm text-gray-600">
                {address.name}, {address.phone}, {address.street}, {address.city}{" "}
                - {address.pincode}
              </p>
            </div>

            <div className="border-b pb-3 mb-3">
              <h4 className="font-medium mb-1">Payment Method</h4>
              <p className="text-sm text-gray-600">{paymentMethod}</p>
            </div>

            {/* All Cart Items */}
            <div className="space-y-3 border-b pb-3">
              {cart.map((item: any) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    <p className="font-semibold">₹{item.price * item.qty}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(2)}
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-6 rounded-lg shadow"
              >
                ← Back
              </button>
              <button
                onClick={handleConfirmOrder}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow"
              >
                Confirm Order ✅
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right: Order Summary */}
      <div className="bg-white p-5 rounded-2xl shadow-md h-fit sticky top-20">
        <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
        <div className="space-y-3 border-b pb-3">
          {cart.map((item: any) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                <p className="font-semibold">₹{item.price * item.qty}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
