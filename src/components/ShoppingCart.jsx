import React from "react";

export default function ShoppingCart({ cart, handlePay, showCart, onClose, removeFromCart }) {
  if (!showCart) return null;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
      <button className="mb-4 text-gray-500 hover:text-gray-800" onClick={onClose}>
        Close
      </button>
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-4 border-b pb-2"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.price} ETH</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: {total} ETH</p>
          <button
            onClick={handlePay}
            className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Pay
          </button>
        </>
      )}
    </div>
  );
}
