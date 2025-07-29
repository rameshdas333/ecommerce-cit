import React from "react";
import SignupImg from '../../assets/Signupimg(1).png'

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-[#e6f3f9] flex items-center justify-center">
        <img
          src={SignupImg} // replace with your image path
          alt="Shopping Illustration"
          className="w-3/4"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex flex-col justify-center items-start px-20">
        <h2 className="text-3xl font-semibold mb-2">Log in to Exclusive</h2>
        <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-[400px] border-b border-gray-400 focus:outline-none mb-6 pb-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[400px] border-b border-gray-400 focus:outline-none mb-6 pb-2"
        />

        <div className="flex justify-between items-center w-[400px]">
          <button className="bg-red-600 text-white px-6 py-2 rounded">
            Log In
          </button>
          <a href="#" className="text-sm text-red-500 hover:underline">
            Forget Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
