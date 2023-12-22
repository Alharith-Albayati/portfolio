import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { popupContext } from "../pages/Ecommerce";

const PopupAddToCart = () => {
  const usePopup = useContext(popupContext);
  const { visible, closePopup } = usePopup;

  return (
    <div
      className={`z-30 font-sans bg-gray-500/75 fixed inset-0 flex justify-center items-center ${
        visible ? null : "hidden"
      }`}
    >
      <div className="text-center bg-gray-300 rounded-xl w-fit relative max-w-[80%] sm:max-w-[70%] lg:max-w-[60%] h-[350px]">
        <div className="h-[80px] w-[600px] flex justify-start items-center">
          {/* this is the div for the your cart icon and text */}
          <div className="flex items-center gap-x-8 pl-6">
            <div className="text-purple-700 text-4xl">
              {/* this is the div for the icon */}
              <BsCart3 />
            </div>
            <div className="text-black font-medium text-2xl">
              {/* this is the div for the text */}
              <p>Your Cart</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-4 md:px-12">
          {/* this is the info table div */}
          <div className="text-gray-700 text-md">
            {/* this is the div for the product field  */}
            <p>Product</p>
          </div>
          <div className="flex w-fit justify-evenly gap-x-8">
            {/* this is the div for the other fields */}
            <p className="text-gray-700 text-md">Price</p>
            <p className="text-gray-700 text-md">Quantity</p>
            <p className="text-gray-700 text-md">Total</p>
          </div>
        </div>
        <hr className="border-1 mt-1 border-gray-400 w-[95%] mx-auto" />
        <div>
          {/* this is the dynamic div to be added */}
          Dynamic content
        </div>
        <hr className="border-1 mt-1 border-gray-400 w-[95%] mx-auto" />
        <div className="flex items-center justify-between px-4 md:px-12">
          {/* this is the div for the total price */}
          <p className="text-md text-gray-700">Total</p>
          <p className="text-md text-gray-700">$10</p>
        </div>
        <div className="mt-24 flex items-center w-full p-4 justify-center gap-x-10">
          {/* this is the div for the buttons */}
          <button className="w-auto h-auto text-md bg-indigo-600 hover:bg-indigo-700 text-indigo-100 rounded-3xl border text-center whitespace-nowrap px-10 py-2">
            View Cart
          </button>
          <button className="w-auto h-auto text-md bg-indigo-300 text-indigo-700 border-2 border-indigo-700 hover:text-white hover:bg-indigo-700 hover:border-indigo-400 ease-in duration-200 rounded-3xl text-center whitespace-nowrap px-5 py-2">
            Checkout Now
          </button>
        </div>
        <div
          onClick={closePopup}
          className="rounded-full absolute -top-4 border-2 border-black/50 -right-4 w-6 h-6 p-[13px] flex justify-center items-center text-black font-bold bg-gray-500 hover:bg-red-500 ease-in duration-200 cursor-pointer"
        >
          X
        </div>
      </div>
    </div>
  );
};

export default PopupAddToCart;
