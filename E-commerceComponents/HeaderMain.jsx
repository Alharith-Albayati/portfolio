import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      {/* this is the main container */}
      <div className="container sm:flex justify-between items-center">
        {/* the is the centerized container by tailwind */}
        <div className="text-4xl font-bold text-blackish text-center pb-4 sm:pb-0">
          {/* this is the div for the logo */}
          Logo
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          {/* this is the div for the input field */}
          <input
            type="text"
            placeholder="Enter any product name..."
            className="border-gray-200 border w-full p-2 px-4 rounded-lg"
          />
          <BsSearch
            className="absolute top-0 right-0 mr-3 mt-3 text-gray-400 cursor-pointer"
            size={20}
          />
        </div>
        <div className="text-gray-500 text-[30px] hidden lg:flex gap-4">
          <BiUser />
          {/* this is the div for the right side for the icons and counters */}
          <div className="relative">
            {/* this is the div for the icon */}
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
              {/* this is the div for the counter */}0
            </div>
          </div>
          <div className="relative">
            {/* this is the div for the icon */}
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white flex items-center justify-center translate-x-1 -translate-y-1">
              {/* this is the div for the counter */}0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
