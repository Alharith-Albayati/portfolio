import React from "react";
import { BsArrowUp } from "react-icons/bs";
import Link from "next/link";

const Fixedbutton = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 w-[40px] h-[40px] bg-gradient-to-br from-fuchsia-500 from-30% to-sky-500 rounded-full z-40">
      <Link href="#top">
        <BsArrowUp
          size={30}
          className="text-white animate-bounce absolute left-[5px] top-[10px]"
        />
      </Link>
    </div>
  );
};

export default Fixedbutton;
