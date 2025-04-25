import React, { useState } from "react";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) setQuantity(value);
  };

  const checkout = async () => {
    alert("Checkout SNAP! 🌟");
  };

  const generatePaymentLink = async () => {
    alert("Checkout Payment Link! 🔥");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="text-lg hover:opacity-75"
          >
            ➖
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="h-10 w-16 text-center border border-gray-300 rounded text-black"
            min={1}
          />
          <button
            type="button"
            onClick={increaseQuantity}
            className="text-lg hover:opacity-75"
          >
            ➕
          </button>
        </div>

        <button
          onClick={checkout}
          className="rounded bg-indigo-500 px-4 py-2 text-white text-sm font-medium transition hover:scale-105"
        >
          Checkout
        </button>
      </div>

      <button
        onClick={generatePaymentLink}
        className="text-indigo-500 text-sm font-medium hover:underline"
      >
        Create Payment Link
      </button>
    </div>
  );
};

export default Checkout;
