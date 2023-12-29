import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Head from "next/head";

const Signin = () => {
  return (
    <>
      <Head>
        <title>Simple sign in</title>
        <meta charset="UTF8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-full h-screen flex items-start">
        {/* this is the full page component */}
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-1/2 h-screen hidden sm:block">
          {/* this is the container for the colorful part */}
          <div className="font-Poppins flex flex-col absolute w-full top-[20%] md:left-[10%] lg:left-[3%] left-[5%] box-border pr-4">
            <h1 className="font-bold text-4xl text-white my-4">
              Turn your Ideas <br />
              into reality{" "}
            </h1>
            <p className="text-xl text-white font-normal w-[250px] xl:w-fit">
              Start for free and get attractive offers from the community
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:w-1/2 h-screen box-border bg-[#f5f5f5] py-8 px-4 justify-between items-center w-full">
          {/* this is the div for the actual sign in part */}
          <h1 className="text-xl font-semibold text-[#060606] lg:self-start">
            Interactive Brand
          </h1>
          <div className="w-full flex flex-col box-border pt-12 max-w-[500px]">
            {/* this is the container for the data to be entered in the fields and buttons */}
            <div className="flex flex-col w-full mb-2 md:items-center md:justify-center">
              {/* this is the div for login and welcome back */}
              <h3 className="font-semibold text-3xl mb-2">Login</h3>
              <p className="text-base mb-2">
                Welcome Back! Please enter your details.
              </p>
            </div>
            <div className="w-full flex flex-col">
              {/* this is the div for the inputs */}
              <input
                type="email"
                placeholder="Enter your email please"
                className="w-full text-black py-2 border-b my-2 border-black bg-transparent outline-none"
              />
              <input
                type="password"
                placeholder="Enter your password please"
                className="w-full text-black py-2 border-b my-2 border-black bg-transparent outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 mt-2 md:mt-4 w-full justify-between items-center">
              {/* this is the container for the remember me and forgot password */}
              <div className="flex items-center">
                <input id="checkbox" type="checkbox" className="w-4 h-4 mr-2" />
                <label htmlFor="checkbox">
                  <p className="text-sm whitespace-nowrap">
                    Remember me for 30 days
                  </p>
                </label>
              </div>
              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                Forgot password?
              </p>
            </div>
            <div className="w-full flex flex-col my-4">
              {/* this is the container for the buttons */}
              <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center cursor-pointer">
                Log in
              </button>
              <button className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center cursor-pointer">
                Register
              </button>
            </div>
            <div className="w-full flex items-center justify-between py-2 relative">
              {/* this is the container for the or */}
              <div className="bg-black/40 h-[1px] w-full" />
              <p className="text-lg text-black/80 bg-[#f5f5f5] absolute left-[48%] px-1">
                or
              </p>
            </div>
            <div className="cursor-pointer">
              {/* this is the div for the sign in with google button */}
              <button className="w-full text-[#060606] font-semibold bg-white border my-4 border-black/40 rounded-md p-3 text-center flex items-center justify-center gap-x-4">
                <span>
                  <FcGoogle size={30} />
                </span>{" "}
                Sign in with Google
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#060606]">
              Don&apos;t have an account?
              <Link
                href="/"
                className="font-semibold underline underline-offset-2 cursor-pointer"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
