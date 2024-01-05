import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* this is for the direct wrapper of the header */}
          <div className="hidden lg:flex gap-1">
            {/* this is the sub-wrapper of the left side */}
            <div className="header_top_icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top_icon_wrapper">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            {/* this is the wrapper of the middle side */}
            <b>FREE SHIPPING </b> THIS WEEK ORDER OVER - $55
          </div>
          <div className="flex gap-4">
            {/* this is the wrapper of the right side for the dropdown menus */}
            <select
              name="currency"
              id="currency"
              className="text-gray-500 text-[12px] w-[70px]"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="IQD">IQD</option>
            </select>
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              id="language"
              name="language"
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
