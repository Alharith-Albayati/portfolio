import React from "react";
import { data } from "../data/data.js";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 h-[70vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order) => {
          return (
            <li
              key={order.id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex cursor-pointer items-center lg:justify-between"
            >
              <div className="bg-purple-100 rounded-lg p-3">
                {/* this is the div for the shopping bag icon */}
                <FaShoppingBag className="text-purple-800" />
              </div>
              <div className="flex max-[425px]:flex-col md:max-lg:flex-col pl-4 items-center justify-between w-full relative">
                <div>
                  <p className="text-gray-800 font-bold">${order.total}</p>
                  <p className="text-gray-400 text-sm">{order.name.first}</p>
                </div>
                <p className="w-fit text-sm">{order.date}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentOrders;
