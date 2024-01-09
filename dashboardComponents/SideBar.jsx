import React from "react";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const SideBar = ({ children }) => {
  return (
    <div className="flex">
      {/* this is for flexing the whole page into two portions */}
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2">
            {/* this is for the border below the diamond icon */}
          </span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 text-black  font-bold p-3 rounded-lg">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/Customers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 text-black  font-bold p-3 rounded-lg">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/Orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 text-black font-bold p-3 rounded-lg">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 text-black font-bold p-3 rounded-lg">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default SideBar;
