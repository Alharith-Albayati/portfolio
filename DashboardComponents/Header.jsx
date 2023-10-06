import React from "react";
import { BiSolidHome } from "react-icons/bi";

const Header = () => {
  return (
    <header className="p-8">
      {/* this is the main header div */}
      <div>
        {/* this is the small div*/}
        <div>
          {/* this is the div for the upper part */}
          <BiSolidHome />
          <p className="inline"> / Dashboard</p>
        </div>
        <div className="text-white">
          {/* this is the div for the lower part */}
          <h3>Dashboard</h3>
        </div>
      </div>
      <div>{/* this is the big div */}</div>
    </header>
  );
};

export default Header;
