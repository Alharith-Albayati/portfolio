import React from "react";

const Signin = () => {
  return (
    <div className="w-full font-Poppins bg-cover h-screen bg-no-repeat bg-[url('../public/swiss.jpg')]">
      {/* above div is the whole page and below div is the black upper layer for shadowing */}
      <div className="w-full h-full bg-black/40 flex items-center justify-center">
        {/* this is the shadowing div */}
        <div className="backdrop-blur-[5px] w-[60vw] md:w-[50vw] lg:w-[40vw] h-[60vh] rounded p-4">
          {/* this is the signing in div */}
          <div>
            {/* this is the bluring upper layer div */}
            <div>
              <form className="flex flex-col gap-y-6">
                {/* this is the div-form for the actual signing in box */}
                <div className="flex flex-col items-start gap-y-1 sm:w-[80%] sm:mx-auto">
                  {/* this is the div for the email input */}
                  <label for="email" className="text-xl text-white">
                    Email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your Email here"
                    className="w-full rounded placeholder:text-lg pl-2 py-3"
                  />
                </div>
                <div className="flex flex-col items-start gap-y-1 sm:w-[80%] sm:mx-auto">
                  {/* this is the div for the Password input */}
                  <label for="Password" className="text-xl text-white">
                    Password:
                  </label>
                  <input
                    id="Password"
                    type="Password"
                    placeholder="Enter your Password here"
                    className="w-full rounded placeholder:text-lg pl-2 py-3"
                  />
                </div>
                <div className="flex items-center justify-between mt-4 sm:w-[80%] sm:mx-auto">
                  {/* this is the div for the button */}
                  <button className="py-3 rounded text-md text-black px-6 hover:text-white ease-in duration-300 bg-white hover:bg-black">
                    Log in
                  </button>
                  <button className="py-3 rounded text-md text-black px-6 hover:text-white ease-in duration-300 bg-white hover:bg-black">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
