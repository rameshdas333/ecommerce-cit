import React from "react";
import { FaTruck } from "react-icons/fa";
import { FiRotateCcw } from "react-icons/fi";
import { Link } from "react-router-dom";


const Delivery = () => {
  return (
    <div className="border rounded-md divide-y">
      {/* Free Delivery */}
      <div className="flex items-center p-4 space-x-4">
        <FaTruck className="w-6 h-6" />
        <div>
          <h3 className="font-semibold">Free Delivery</h3>
          <Link
          to={``}
            href="#"
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            Enter your postal code for Delivery Availability
          </Link>
        </div>
      </div>

      {/* Return Delivery */}
      <div className="flex items-center p-4 space-x-4">
        <FiRotateCcw className="w-6 h-6" />
        <div>
          <h3 className="font-semibold">Return Delivery</h3>
          <p className="text-sm">
            Free 30 Days Delivery Returns.{" "}
            <Link
              href="#"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
