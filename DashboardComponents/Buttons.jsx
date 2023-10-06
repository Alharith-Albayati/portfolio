import React from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { HiMiniWrench } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { HiDocument } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
const Buttons = ({ text, icon }) => {
  return (
    <Link href="/" className="flex gap-x-6 items-center w-full h-full">
      {/* this is the div for the react-icon */}
      {icon == "home" ? (
        <div className="flex justify-center items-center py-3 px-2 rounded-lg text-white text-xl bg-blue-600">
          <IoHome />
        </div>
      ) : icon == "tables" ? (
        <div className="flex justify-center items-center py-2 px-2 rounded-xl text-white text-xl bg-blue-600">
          <IoStatsChartSharp />
        </div>
      ) : icon == "billing" ? (
        <div className="flex justify-center items-center py-2 px-2 rounded-xl text-white text-xl bg-blue-600">
          <GiWallet />
        </div>
      ) : icon == "rtl" ? (
        <div className="flex justify-center items-center py-2 px-2 rounded-xl text-white text-xl bg-blue-600">
          <HiMiniWrench />
        </div>
      ) : icon == "profile" ? (
        <div className="flex justify-center items-center py-2 px-2 rounded-xl text-white text-xl bg-blue-600">
          <BsFillPersonFill />
        </div>
      ) : icon == "sign in" ? (
        <div className="flex justify-center items-center py-2 px-2 rounded-xl text-white text-xl bg-blue-600">
          <HiDocument />
        </div>
      ) : icon == "star" ? (
        <div className="flex justify-center items-center py-2 px-2 rounded-xl text-white text-xl bg-blue-600">
          <AiFillStar />
        </div>
      ) : icon == "sign up" ? (
        <div className="flex justify-center items-center py-2 px-2 rounded-xl text-white text-xl bg-blue-600">
          <IoRocketOutline />
        </div>
      ) : null}
      <h3 className="text-white text-md">{text}</h3>
    </Link>
  );
};

export default Buttons;
