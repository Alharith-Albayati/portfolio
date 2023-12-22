import React from "react";
import MenuIcon from "../components/MenuIcon";
import { useState } from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function click() {
    setOpen(!open);
  }
  return (
    <>
      <nav
        id="top"
        className="w-full flex items-center h-[87px] font-Poppins justify-between"
      >
        <div className="absolute top-5 right-4 cursor-pointer md:hidden z-40">
          <MenuIcon open={open} click={click} />
        </div>
        <div className="text-white text-xl relative left-[2vw] md:text-lg">
          <h1>Alharith&apos;s Portfolio</h1>
        </div>
        <div className="flex items-center gap-x-6 text-sm max-md:hidden lg:gap-x-12 w-fit">
          {/* this is the div for id links */}
          <div className="text-white hover:text-slate-300 ease-in duration-100">
            <Link href="#Projects">Projects</Link>
          </div>
          <div className="text-white hover:text-slate-300 ease-in duration-100">
            <Link href="#Technologies">Technologies</Link>
          </div>
          <div className="text-white hover:text-slate-300 ease-in duration-100">
            <Link href="#About me">About me</Link>
          </div>
        </div>
        <div className="flex items-center gap-x-6 w-fit relative right-[2vw] max-md:hidden ">
          {/* this is the div for the icons */}
          <div className="text-2xl text-sky-700 cursor-pointer">
            <BsFacebook />
          </div>
          <div className="text-2xl text-sky-700 cursor-pointer">
            <BsInstagram />
          </div>
          <div className="text-2xl text-sky-700 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/alharithalbayati"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`bg-gradient-to-r from-fuchsia-500 to-sky-700 w-fit px-10 h-screen z-30 absolute top-0 right-0 rounded-l-lg ${
          open ? "translate-x-0" : "translate-x-full"
        } ease-out duration-400 transition`}
      >
        {/*this is the animated Nav*/}
        <div className="w-full h-full pt-32 pb-6 box-border flex flex-col justify-between items-center">
          {/* this is the container Nav*/}
          <div className="flex flex-col justify-between gap-y-8 items-center">
            {/* this the div of links*/}
            <div className="font-Poppins text-white text-2xl hover:text-slate-300">
              <Link href="#Projects">Projects</Link>
            </div>
            <div className="font-Poppins text-white text-2xl hover:text-slate-300">
              <Link href="#Technologies">Technologies</Link>
            </div>
            <div className="font-Poppins text-white text-2xl hover:text-slate-300">
              <Link href="#About me">About me</Link>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6">
            {/* this is the div of icons */}
            <div className="text-3xl cursor-pointer">
              <BsFacebook />
            </div>
            <div className="text-3xl cursor-pointer">
              <BsInstagram />
            </div>
            <div className="text-3xl cursor-pointer">
              <a
                href="https://www.linkedin.com/in/alharithalbayati"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
