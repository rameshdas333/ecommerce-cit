import React from 'react';
import logo from  "../../../../assets/logo.png"
import { CiHeart} from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className=" pt-[42px] pb-[14px]  border-b-[2px] border-[#D9D9D9]">
        <div className='w-[1170px] mx-auto flex items-center justify-center'>
          <div className="w-[20%]">
            <img src={logo} alt="" />
          </div>

          <div className="w-[40%]">
            <ul className="flex space-x-12">
              <li className='text-base text-black'>
                <Link to="/">Home</Link>
              </li>
              <li className='text-base text-black'>
                <Link to="/product">Product</Link>
              </li>
              <li className='text-base text-black'>
                <Link to="/contact">Contact</Link>
              </li>
              <li className='text-base text-black'>
                <Link to="/about">About</Link>
              </li>
              <li className='text-base text-black'>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>

          <div className="w-[40%] flex items-center  justify-end space-x-6">
            <label className="input relative bg-[#F5F5F5] outline-none">
             
              <input className='w-[243px]  rounded px-5 py-2' type="search" required placeholder="What are you looking for?" />
               <svg
                className="h-[1em] absolute text-xl text-black top-[9px] pr-2 right-0 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>
            {/* icon */}
            <div className='flex items-center space-x-4'>
                <CiHeart className='text-4xl '/>
                <MdOutlineShoppingCart className='text-4xl' />
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;