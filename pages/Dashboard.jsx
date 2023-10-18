import React from "react";
import Buttons from "@/DashboardComponents/Buttons";
import { AiFillStar } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-indigo-700 to-slate-800 font-Poppins flex">
      <div className="w-[300px] h-full overflow-x-hidden overflow-y-auto fixed hidden xl:flex flex-col box-border pt-8 rounded-br-lg rounded-tr-lg bg-[rgb(15,11,33)] items-center">
        {/* this is the div for the sidebar*/}
        <div className="p-4 border-b-[1px] border-b-white text-lg font-bold tracking-widest ml-2 w-fit h-fit">
          {/* this the title*/}
          <h3 className="text-transparent bg-gradient-to-r from-white to-slate-500 bg-clip-text">
            Vision UI Free
          </h3>
        </div>
        <div className="pt-10 w-full flex flex-col items-center">
          {/* this is the div for the first buttons */}
          <div className="rounded-lg w-[80%] flex flex-col gap-y-6 box-border py-3 pl-6">
            <Buttons text="Dashboard" icon="home" />
            <Buttons text="Tables" icon="tables" />
            <Buttons text="Billing" icon="billing" />
            <Buttons text="RTL" icon="rtl" />
          </div>
        </div>
        <div className="text-white text-lg font-semibold w-full h-10 flex items-center justify-center">
          {/* this is the div for the next title*/}
          <h3>Account pages</h3>
        </div>
        <div className="rounded-lg w-[80%] flex flex-col gap-y-6 box-border py-3 pl-6">
          {/* this is the div for the second buttons */}
          <Buttons text="Profile" icon="profile" />
          <Buttons text="Sign In" icon="sign in" />
          <Buttons text="Sign Up" icon="sign up" />
        </div>
        <div className="w-[200px] relative h-[200px] mt-4 bg-gradient-to-r from-blue-900 to-fuchsia-600 rounded-xl">
          {/* this is the div for the gradient picture */}
          ksdfdkflgjkdfgj dsfndslkgndflkgnfk klgdfslkgmsfkgmfdk
          ssdlfmskdgmsklfgm l;fgmdsfkmklfmhkfl gmlkfmhfkmhfmhkh
          fmglfkhmkvmhfmhghmf fmfsklghmfmhghkmgkmhg mfghmfghmfmhgmhgfmhfkmh
          <div className="flex items-center justify-center p-2 bg-blue-600 rounded-lg absolute left-3 top-3">
            {/* this is the div for the star */}
            <AiFillStar className="text-white text-xl" />
          </div>
          <div>
            {/* this is the div for the center text */}
            <h3>Need help?</h3>
            <p>Please check our docs</p>
          </div>
          <div>{/* this is the div for the button */}</div>
        </div>
        <div>{/* this is the div for the upgrade pro button */}</div>
      </div>
      <div className="w-48 flex-grow">
        {/* this is the div for the rest of the page*/}
      </div>
    </div>
  );
};

export default Dashboard;
