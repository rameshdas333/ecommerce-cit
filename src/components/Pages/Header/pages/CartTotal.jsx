import React from "react";

const CartTotal = () => {
  return (
    <div className="border rounded p-4 w-[400px]">
      <h2 className="font-semibold text-lg my-6">Cart Total</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>$1750</span>
      </div>
      <div className="flex  justify-between mb-2 relative after:absolute  after:content-[''] after:bg-gray-300 after:h-[1px] after:w-full -after:bottom-4 after:left-0">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between font-semibold mb-4 relative after:absolute  after:content-[''] after:bg-gray-300 after:h-[1px] after:w-full -after:bottom-4 after:left-0">
        <span>Total:</span>
        <span>$1750</span>
      </div>
      <button className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;
