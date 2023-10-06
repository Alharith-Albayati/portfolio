import React from "react";

const MenuIcon = ({ click, open }) => {
  return (
    <div onClick={click}>
      <div
        className={
          open
            ? `w-[35px] h-[4px] -rotate-45 translate-y-[11px] transition duration-300 ease-in bg-white my-[6px] mx-0`
            : `w-[35px] h-[4px] bg-white my-[6px] mx-0 transition duration-300 ease-in`
        }
      ></div>
      <div
        className={
          open
            ? `w-[35px] transition duration-300 ease-in opacity-0 h-[4px] bg-white my-[6px] mx-0`
            : `w-[35px] h-[4px] bg-white my-[6px] mx-0 opacity-1 transition duration-300 ease-in`
        }
      ></div>
      <div
        className={
          open
            ? `w-[35px] h-[4px] translate-y-[-11px] transition duration-300 ease-in rotate-45 bg-white my-[6px] mx-0`
            : `w-[35px] h-[4px] bg-white my-[6px] mx-0  transition duration-300 ease-in`
        }
      ></div>
    </div>
  );
};

export default MenuIcon;
