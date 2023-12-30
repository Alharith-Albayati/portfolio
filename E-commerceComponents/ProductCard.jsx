import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { popupContext } from "../pages/Ecommerce";
import { useContext } from "react";

const generateRating = (rating) => {
  switch (rating) {
    case 1:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 2:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 3:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 4:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );
    case 5:
      return (
        <div className="flex gap-1 text-[20px] text-[#FF9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );

    default:
      return null;
  }
};

const ProductCard = (props) => {
  return (
    <div className="px-4 cursor-pointer max-w-[400px] border border-gray-200 rounded-xl">
      <div>
        <Image
          className="w-full h-auto"
          width={200}
          height={300}
          alt={props.title}
          src={props.img}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{props.title}</h2>
        <p className="text-gray-500 max-w-[150px]">{props.desc}</p>
        <div>{generateRating(props.rating)}</div>
        <div className="flex gap-4 font-bold">
          ${props.price}
          <del className="text-gray-500 font-normal">
            ${parseInt(props.price) + 50}.00
          </del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
