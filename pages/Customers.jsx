import React from "react";
import { data } from "../data/data.js";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import SideBar from "@/dashboardComponents/SideBar.jsx";

const Customers = () => {
  return (
    <SideBar>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex max-[425px]:flex-col justify-between px-4 pt-4">
          {/* this is the div for the headers */}
          <h2>Customers</h2>
          <h2>Welcome Back, Client.</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            {/* this is the div for the big white card thing */}
            <div className="my-3 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer">
              <span>Name</span>
              <span className="text-right sm:text-left">Email</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {data.map((order) => {
                return (
                  <li
                    key={order.id}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <BsPersonFill className="text-purple-800" />
                      </div>
                      <p className="pl-4">
                        {order.name.first + " " + order.name.last}
                      </p>
                    </div>
                    <p className="text-gray-600 text-right sm:text-left">
                      {order.name.first}@gmail.com
                    </p>
                    <p className="hidden md:flex">{order.date}</p>
                    <div className="sm:flex hidden justify-between items-center">
                      <p>{order.method}</p>
                      <BsThreeDotsVertical />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default Customers;
