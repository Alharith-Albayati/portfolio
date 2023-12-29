import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Contactme = () => {
  return (
    <footer className="w-full whitespace-nowrap py-4 mt-12 bg-[#251B37] pt-6 flex justify-around">
      {/* this is the main footer holding the flex 2 divs */}
      <div className="flex flex-col md:flex-row gap-y-[1.5vw] md:gap-x-16 lg:gap-x-[15vw]">
        {/* this is the left div */}
        <div className="w-fit">
          {/* this is the feel free to contact me div */}
          <p className="text-transparent md:max-lg:text-[13px] sm:max-md:text-sm text-[13px] font-bold leading-tightest bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text">
            Feel free to contact me
          </p>
        </div>
        <div className="text-[13px] md:max-lg:text-[13px] sm:max-md:text-sm leading-tightest text-white">
          {/* this is the email div*/}
          <Link href="/">harith2alharith@gmail.com</Link>
        </div>
        <div className="text-[13px] md:max-lg:text-[13px] sm:max-md:text-sm leading-tightest text-white">
          {/* this is the Telegram div */}
          <Link href="/">@aswez2212002</Link>
        </div>
      </div>
      <div className="flex gap-x-4 text-blue-800 text-[21px] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] cursor-pointer">
        {/* this is the icons div on the right */}
        <a
          href="https://www.linkedin.com/in/alharithalbayati"
          className=""
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <BsFacebook />
        <BsInstagram />
      </div>
    </footer>
  );
};

export default Contactme;
