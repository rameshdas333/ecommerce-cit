import React from 'react';
import signupImg from '../../../../../assets/Signupimg(1).png'
import { FcGoogle } from 'react-icons/fc';

export default function SignUp() {
  return (
    <div className="min-h-screen flex">
      {/* Left side image section */}
      <div className="w-1/2 bg-blue-50 flex items-center justify-center">
        <img
          src={signupImg}
          alt="Shopping Cart with Mobile"
          className="max-w-md w-full"
        />
      </div>

      {/* Right side form section */}
      <div className="w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create an account</h2>
          <p className="text-sm text-gray-600 mb-4">Enter your details below</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full border border-gray-400 py-2 rounded-md flex items-center justify-center gap-2 mt-2"
            >
              <FcGoogle />
              Sign up with Google
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}