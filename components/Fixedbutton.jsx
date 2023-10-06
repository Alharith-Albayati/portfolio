import React from "react";
import { BsArrowUp } from "react-icons/bs";
import Link from "next/link";

const Fixedbutton = () => {
  return (
    <div className="fixed bottom-6 right-4 w-[50px] h-[50px] bg-gradient-to-br from-fuchsia-500 from-30% to-sky-500 rounded-full z-40">
      <Link href="#top" className="relative">
        <BsArrowUp
          size={30}
          className="text-white animate-bounce absolute left-[10px] top-[12px]"
        />
      </Link>
    </div>
  );
};

export default Fixedbutton;
