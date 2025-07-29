// CheckoutForm.jsx


export default function BillingDetails() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-4">
          <input className="w-full border rounded p-2" placeholder="First Name*" />
          <input className="w-full border rounded p-2" placeholder="Company Name" />
          <input className="w-full border rounded p-2" placeholder="Street Address*" />
          <input className="w-full border rounded p-2" placeholder="Apartment, floor, etc. (optional)" />
          <input className="w-full border rounded p-2" placeholder="Town/City*" />
          <input className="w-full border rounded p-2" placeholder="Phone Number*" />
          <input className="w-full border rounded p-2" placeholder="Email Address*" />
          <label className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <span>Save this information for faster check-out next time</span>
          </label>
        </form>
      </div>

      {/* Order Summary */}
      <div className="border-l lg:pl-10 mt-8 lg:mt-0">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="https://img.icons8.com/color/48/controller.png" alt="LCD Monitor" className="w-8" />
              <span>LCD Monitor</span>
            </div>
            <span>$650</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="https://img.icons8.com/color/48/game-controller.png" alt="HI Gamepad" className="w-8" />
              <span>HI Gamepad</span>
            </div>
            <span>$1100</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>Bank</span>
              <img src="https://img.icons8.com/color/24/mastercard-logo.png" alt="bank" />
              <img src="https://img.icons8.com/color/24/visa.png" alt="visa" />
              <img src="https://img.icons8.com/color/24/amex.png" alt="amex" />
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              <span>Cash on delivery</span>
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border rounded p-2"
            />
            <button className="bg-red-500 text-white px-4 rounded hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
          <button className="bg-red-600 text-white py-3 px-6 rounded w-full hover:bg-red-700">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
