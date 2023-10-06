import React from "react";

const Technology = ({ level, Technology }) => {
  return (
    <div className="w-full flex flex-col gap-y-[3px]">
      <div className="w-full flex justify-between">
        <div className="font-Poppins text-2xl text-white">
          <h3>{Technology}</h3>
        </div>
        <div className="font-Poppins text-white text-md">
          <p>{level}</p>
        </div>
      </div>
      <div
        className={
          level == "Intermediate"
            ? "bg-gradient-to-br from-fuchsia-500 from-30% to-sky-500 shadow-[#00B2FF] brightness-105 text-transparent rounded-lg w-[50%]"
            : level == "Good"
            ? "w-[75%] bg-gradient-to-br from-fuchsia-500 from-30% to-sky-500 shadow-[#00B2FF] brightness-105 text-transparent rounded-lg"
            : level == "Advanced"
            ? "w-full bg-gradient-to-br from-fuchsia-500 from-30% to-sky-500 shadow-[#00B2FF] brightness-105 text-transparent rounded-lg"
            : null
        }
      >
        &nbsp;
      </div>
    </div>
  );
};

export default Technology;
