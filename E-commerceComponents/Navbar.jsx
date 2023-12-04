import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      {/* this is the main wrapper */}
      <div className="container">
        {/* this is for the centerized container by tailwind */}
        <div className="w-fit mx-auto flex gap-10 font-medium text-blackish py-4">
          {/* this is the flex wrapper for the links */}
          <Link href="#" className="navbar_link relative">
            Home
          </Link>
          <Link href="#" className="navbar_link relative">
            Categories
          </Link>
          <Link href="#" className="navbar_link relative">
            Men's
          </Link>
          <Link href="#" className="navbar_link relative">
            Women's
          </Link>
          <Link href="#" className="navbar_link relative">
            Jewelry
          </Link>
          <Link href="#" className="navbar_link relative">
            Perfume
          </Link>
          <Link href="#" className="navbar_link relative">
            Blog
          </Link>
          <Link href="#" className="navbar_link relative">
            Offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
